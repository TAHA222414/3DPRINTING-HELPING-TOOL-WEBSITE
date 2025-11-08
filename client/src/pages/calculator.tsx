import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Moon, Sun } from "lucide-react";
import MaterialSelector, { MATERIAL_PRESETS } from "@/components/MaterialSelector";
import DiameterToggle from "@/components/DiameterToggle";
import InputSection from "@/components/InputSection";
import SpoolTracker from "@/components/SpoolTracker";
import ResultsPanel from "@/components/ResultsPanel";

export default function Calculator() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedMaterial, setSelectedMaterial] = useState("PLA");
  const [customDensity, setCustomDensity] = useState(1.24);
  const [diameter, setDiameter] = useState(1.75);
  const [inputMode, setInputMode] = useState<"weight" | "length">("weight");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [costPerKg, setCostPerKg] = useState("20");
  const [grossWeight, setGrossWeight] = useState("");
  const [tareWeight, setTareWeight] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getDensity = () => {
    if (selectedMaterial === "custom") return customDensity;
    return MATERIAL_PRESETS.find((m) => m.name === selectedMaterial)?.density || 1.24;
  };

  const calculateResults = () => {
    const density = getDensity();
    const d = diameter;
    const radiusCm = (d / 2) / 10;
    const crossSectionArea = Math.PI * radiusCm * radiusCm;

    let calculatedLength = 0;
    let calculatedWeight = 0;

    if (inputMode === "weight" && weight) {
      const w = parseFloat(weight);
      calculatedWeight = w;
      const volumeCm3 = w / density;
      calculatedLength = volumeCm3 / crossSectionArea / 100;
    } else if (inputMode === "length" && length) {
      const l = parseFloat(length);
      calculatedLength = l;
      const volumeCm3 = crossSectionArea * l * 100;
      calculatedWeight = volumeCm3 * density;
    }

    const volumeCm3 = calculatedWeight / density;
    const cost = (calculatedWeight / 1000) * parseFloat(costPerKg || "0");

    let metersRemaining = null;
    if (grossWeight && tareWeight) {
      const netWeight = parseFloat(grossWeight) - parseFloat(tareWeight);
      if (netWeight > 0) {
        const netVolumeCm3 = netWeight / density;
        metersRemaining = netVolumeCm3 / crossSectionArea / 100;
      }
    }

    return {
      length: calculatedLength,
      weight: calculatedWeight,
      volume: volumeCm3,
      cost,
      metersRemaining,
    };
  };

  const handleReset = () => {
    setSelectedMaterial("PLA");
    setCustomDensity(1.24);
    setDiameter(1.75);
    setInputMode("weight");
    setWeight("");
    setLength("");
    setCostPerKg("20");
    setGrossWeight("");
    setTareWeight("");
  };

  useEffect(() => {
    if (inputMode === "weight" && weight) {
      const results = calculateResults();
      setLength(results.length.toFixed(2));
    }
  }, [weight, diameter, selectedMaterial, customDensity, inputMode]);

  useEffect(() => {
    if (inputMode === "length" && length) {
      const results = calculateResults();
      setWeight(results.weight.toFixed(2));
    }
  }, [length, diameter, selectedMaterial, customDensity, inputMode]);

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Filament Calculator</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                3D Printing Metrics Tool
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              data-testid="button-reset"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 space-y-6">
              <MaterialSelector
                selectedMaterial={selectedMaterial}
                customDensity={customDensity}
                onMaterialChange={setSelectedMaterial}
                onCustomDensityChange={setCustomDensity}
              />

              <DiameterToggle diameter={diameter} onDiameterChange={setDiameter} />

              <InputSection
                inputMode={inputMode}
                weight={weight}
                length={length}
                costPerKg={costPerKg}
                onInputModeChange={setInputMode}
                onWeightChange={setWeight}
                onLengthChange={setLength}
                onCostPerKgChange={setCostPerKg}
              />
            </div>

            <SpoolTracker
              grossWeight={grossWeight}
              tareWeight={tareWeight}
              onGrossWeightChange={setGrossWeight}
              onTareWeightChange={setTareWeight}
              remainingWeight={results.weight}
            />
          </div>

          <div>
            <ResultsPanel
              length={results.length}
              weight={results.weight}
              volume={results.volume}
              cost={results.cost}
              metersRemaining={results.metersRemaining}
            />
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            Using formula: Volume = π(d/2)² × L | Mass = ρ × V
          </p>
          <p className="mt-2 text-xs">
            Material densities may vary by brand. Adjust custom density as needed.
          </p>
        </footer>
      </main>
    </div>
  );
}
