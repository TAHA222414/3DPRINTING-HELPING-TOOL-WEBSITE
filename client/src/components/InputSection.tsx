import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Scale, Ruler, DollarSign } from "lucide-react";

interface InputSectionProps {
  inputMode: "weight" | "length";
  weight: string;
  length: string;
  costPerKg: string;
  onInputModeChange: (mode: "weight" | "length") => void;
  onWeightChange: (weight: string) => void;
  onLengthChange: (length: string) => void;
  onCostPerKgChange: (cost: string) => void;
}

export default function InputSection({
  inputMode,
  weight,
  length,
  costPerKg,
  onInputModeChange,
  onWeightChange,
  onLengthChange,
  onCostPerKgChange,
}: InputSectionProps) {
  return (
    <div className="space-y-6" data-testid="input-section">
      <Tabs value={inputMode} onValueChange={(v) => onInputModeChange(v as "weight" | "length")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weight" data-testid="tab-weight">
            <Scale className="w-4 h-4 mr-2" />
            Enter Weight
          </TabsTrigger>
          <TabsTrigger value="length" data-testid="tab-length">
            <Ruler className="w-4 h-4 mr-2" />
            Enter Length
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weight" className="space-y-2 mt-4">
          <Label htmlFor="weight" className="text-sm font-medium">
            Filament Weight
          </Label>
          <div className="relative">
            <Input
              id="weight"
              type="number"
              step="0.1"
              min="0"
              value={weight}
              onChange={(e) => onWeightChange(e.target.value)}
              className="h-12 text-lg font-mono pr-12"
              placeholder="0"
              data-testid="input-weight"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
              g
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Length will be calculated automatically
          </p>
        </TabsContent>

        <TabsContent value="length" className="space-y-2 mt-4">
          <Label htmlFor="length" className="text-sm font-medium">
            Filament Length
          </Label>
          <div className="relative">
            <Input
              id="length"
              type="number"
              step="0.1"
              min="0"
              value={length}
              onChange={(e) => onLengthChange(e.target.value)}
              className="h-12 text-lg font-mono pr-12"
              placeholder="0"
              data-testid="input-length"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
              m
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Weight will be calculated automatically
          </p>
        </TabsContent>
      </Tabs>

      <div className="space-y-2">
        <Label htmlFor="cost" className="text-sm font-medium flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          Cost per Kilogram
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </div>
          <Input
            id="cost"
            type="number"
            step="0.01"
            min="0"
            value={costPerKg}
            onChange={(e) => onCostPerKgChange(e.target.value)}
            className="h-12 font-mono pl-8"
            placeholder="20.00"
            data-testid="input-cost-per-kg"
          />
        </div>
      </div>
    </div>
  );
}
