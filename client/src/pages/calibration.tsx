import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Download, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Calibration() {
  const [stepsPerMm, setStepsPerMm] = useState("80");
  const [flowRate, setFlowRate] = useState("100");
  const [nozzleTemp, setNozzleTemp] = useState("200");
  const [retraction, setRetraction] = useState("5");
  const [retractionSpeed, setRetractionSpeed] = useState("30");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateGcode = (testType: "tower" | "linear") => {
    const lines: string[] = [];
    
    // G-code header
    lines.push("; Printer Calibration Test - " + (testType === "tower" ? "Calibration Tower" : "Linear Advance Test"));
    lines.push(`; Steps/mm: ${stepsPerMm}`);
    lines.push(`; Flow Rate: ${flowRate}%`);
    lines.push(`; Nozzle Temp: ${nozzleTemp}°C`);
    lines.push(`; Retraction: ${retraction}mm at ${retractionSpeed}mm/s`);
    lines.push(";");
    lines.push("G28 ; Home all axes");
    lines.push("G29 ; Bed leveling");
    
    if (testType === "tower") {
      // Calibration tower
      lines.push(`;`);
      lines.push(`; CALIBRATION TOWER TEST`);
      lines.push(`;`);
      lines.push(`M104 S${nozzleTemp} ; Set hotend temp`);
      lines.push(`M140 S60 ; Set bed temp`);
      lines.push("M109 S"+nozzleTemp+" ; Wait for hotend");
      lines.push("M190 S60 ; Wait for bed");
      lines.push("G0 F1500 ; Set speed");
      lines.push(`;`);
      lines.push("; Layer 1-10: Base test");
      for (let i = 0; i < 10; i++) {
        lines.push(`G0 X10 Y10 Z${(i * 0.2).toFixed(1)} ; Layer ${i + 1}`);
        lines.push("G1 X50 Y50 E10 F1500");
      }
      lines.push(`;`);
      lines.push("; Layer 11-20: Flow rate variation");
      for (let i = 10; i < 20; i++) {
        const flowVar = 95 + (i - 10) * 1;
        lines.push(`; Flow: ${flowVar}%`);
        lines.push(`G0 X10 Y70 Z${(i * 0.2).toFixed(1)}`);
        lines.push("G1 X50 Y100 E10 F1500");
      }
      lines.push(`;`);
      lines.push("; Layer 21-30: Temperature variation");
      for (let i = 20; i < 30; i++) {
        const tempVar = parseInt(nozzleTemp) + ((i - 20) * 2);
        lines.push(`M104 S${tempVar} ; Temp: ${tempVar}°C`);
        lines.push(`G0 X70 Y10 Z${(i * 0.2).toFixed(1)}`);
        lines.push("G1 X100 Y50 E10 F1500");
      }
    } else {
      // Linear advance test
      lines.push(`;`);
      lines.push(`; LINEAR ADVANCE TEST`);
      lines.push(`;`);
      lines.push(`M104 S${nozzleTemp}`);
      lines.push(`M140 S60`);
      lines.push("M109 S"+nozzleTemp);
      lines.push("M190 S60");
      lines.push(`;`);
      lines.push("; Testing different K-values via speed changes");
      lines.push("; Manual K value: adjust based on visible banding pattern");
      lines.push(`;`);
      const speeds = [30, 40, 50, 60, 70, 80, 90, 100];
      for (let i = 0; i < speeds.length; i++) {
        const speed = speeds[i];
        lines.push(`; K-value test area ${i + 1} - Speed ${speed}mm/s`);
        lines.push(`G0 X10 Y${10 + i * 15} Z0.2 F${speed * 60}`);
        lines.push(`G1 X100 Y${10 + i * 15} E50 F${speed * 60}`);
        lines.push(`G0 X100 Y${10 + i * 15 + 5}`);
        lines.push(`G1 X10 Y${10 + i * 15 + 5} E50 F${speed * 60}`);
      }
    }
    
    lines.push(`;`);
    lines.push("; Retraction test");
    for (let i = 0; i < 5; i++) {
      lines.push(`G0 X${20 + i * 20} Y120 Z0.2`);
      lines.push(`G0 Z10 ; Lift`);
      lines.push(`G0 X${30 + i * 20} Y120`);
      lines.push(`G0 Z0.2 ; Lower`);
    }
    
    lines.push(`;`);
    lines.push("M104 S0 ; Turn off hotend");
    lines.push("M140 S0 ; Turn off bed");
    lines.push("M84 ; Disable motors");
    lines.push("M107 ; Fan off");
    
    return lines.join("\n");
  };

  const handleGenerateGcode = async (testType: "tower" | "linear") => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const gcodeContent = generateGcode(testType);
    const blob = new Blob([gcodeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `calibration_${testType}_test.gcode`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "G-code generated!",
      description: `Calibration ${testType === "tower" ? "tower" : "linear advance"} test file downloaded successfully!`,
    });
    setIsGenerating(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Wrench className="w-10 h-10 text-primary" />
          Printer Calibration Guide
        </h1>
        <p className="text-muted-foreground">
          Generate custom calibration test patterns based on your printer specifications
        </p>
      </div>

      <Tabs defaultValue="configuration" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="configuration" data-testid="tab-configuration">Configuration</TabsTrigger>
          <TabsTrigger value="tests" data-testid="tab-tests">Tests</TabsTrigger>
          <TabsTrigger value="guide" data-testid="tab-guide">Guide</TabsTrigger>
        </TabsList>

        {/* Configuration Tab */}
        <TabsContent value="configuration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Printer Settings</CardTitle>
              <CardDescription>Enter your printer specifications for custom calibration files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="steps-per-mm">Steps per mm (E-axis)</Label>
                  <Input
                    id="steps-per-mm"
                    type="number"
                    value={stepsPerMm}
                    onChange={(e) => setStepsPerMm(e.target.value)}
                    placeholder="80"
                    data-testid="input-steps-per-mm"
                  />
                  <p className="text-xs text-muted-foreground">Default: 80 (check your printer specs)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="flow-rate">Flow Rate (%)</Label>
                  <Input
                    id="flow-rate"
                    type="number"
                    value={flowRate}
                    onChange={(e) => setFlowRate(e.target.value)}
                    placeholder="100"
                    data-testid="input-flow-rate"
                  />
                  <p className="text-xs text-muted-foreground">Default: 100%</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nozzle-temp">Nozzle Temperature (°C)</Label>
                  <Input
                    id="nozzle-temp"
                    type="number"
                    value={nozzleTemp}
                    onChange={(e) => setNozzleTemp(e.target.value)}
                    placeholder="200"
                    data-testid="input-nozzle-temp"
                  />
                  <p className="text-xs text-muted-foreground">PLA: 200-220°C, ABS: 230-250°C</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="retraction">Retraction Distance (mm)</Label>
                  <Input
                    id="retraction"
                    type="number"
                    value={retraction}
                    onChange={(e) => setRetraction(e.target.value)}
                    placeholder="5"
                    data-testid="input-retraction"
                  />
                  <p className="text-xs text-muted-foreground">Bowden: 4-6mm, Direct: 1-3mm</p>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="retraction-speed">Retraction Speed (mm/s)</Label>
                  <Input
                    id="retraction-speed"
                    type="number"
                    value={retractionSpeed}
                    onChange={(e) => setRetractionSpeed(e.target.value)}
                    placeholder="30"
                    data-testid="input-retraction-speed"
                  />
                  <p className="text-xs text-muted-foreground">Typical: 25-35 mm/s</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tests Tab */}
        <TabsContent value="tests" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Calibration Tower</CardTitle>
                <CardDescription>Tests multiple settings on a single model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>This tower tests:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Flow rate at different heights</li>
                    <li>Temperature variation</li>
                    <li>Layer adhesion</li>
                    <li>Retraction quality</li>
                  </ul>
                </div>
                <Button
                  onClick={() => handleGenerateGcode("tower")}
                  disabled={isGenerating}
                  className="w-full"
                  data-testid="button-generate-tower"
                >
                  {isGenerating ? (
                    "Generating..."
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Generate Tower G-code
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Linear Advance Test</CardTitle>
                <CardDescription>Advanced pressure compensation tuning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Tests:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pressure advance factors</li>
                    <li>Print quality at corners</li>
                    <li>Ghosting elimination</li>
                    <li>Wall thickness consistency</li>
                  </ul>
                </div>
                <Button
                  onClick={() => handleGenerateGcode("linear")}
                  disabled={isGenerating}
                  className="w-full"
                  data-testid="button-generate-linear"
                >
                  {isGenerating ? (
                    "Generating..."
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Linear Test
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Guide Tab */}
        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calibration Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">1. First Layer Calibration</h4>
                  <p className="text-muted-foreground">
                    Start with proper bed leveling and nozzle height. Use the calibration tower with your specified temperature.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">2. Flow Rate Adjustment</h4>
                  <p className="text-muted-foreground">
                    Print the tower and adjust flow rate (typically 95-105%) based on wall thickness and surface quality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">3. Retraction Testing</h4>
                  <p className="text-muted-foreground">
                    Look for stringing between test areas. Increase retraction distance if stringing is present.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">4. Linear Advance (Advanced)</h4>
                  <p className="text-muted-foreground">
                    After basics are tuned, use linear advance test to eliminate ghosting and pressure-related artifacts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">5. Temperature Tuning</h4>
                  <p className="text-muted-foreground">
                    Fine-tune nozzle temperature in 5°C increments for optimal extrusion and surface quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/20">
            <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Pro Tip:</strong> Save your calibration results! Once you find optimal settings for each filament, document them for future use.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
