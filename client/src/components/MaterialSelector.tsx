import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Box } from "lucide-react";

export interface Material {
  name: string;
  density: number;
}

export const MATERIAL_PRESETS: Material[] = [
  { name: "PLA", density: 1.24 },
  { name: "PETG", density: 1.27 },
  { name: "ABS", density: 1.07 },
  { name: "TPU", density: 1.22 },
];

interface MaterialSelectorProps {
  selectedMaterial: string;
  customDensity: number;
  onMaterialChange: (material: string) => void;
  onCustomDensityChange: (density: number) => void;
}

export default function MaterialSelector({
  selectedMaterial,
  customDensity,
  onMaterialChange,
  onCustomDensityChange,
}: MaterialSelectorProps) {
  const isCustom = selectedMaterial === "custom";
  const currentDensity = isCustom
    ? customDensity
    : MATERIAL_PRESETS.find((m) => m.name === selectedMaterial)?.density || 1.24;

  return (
    <div className="space-y-3" data-testid="material-selector">
      <div className="space-y-2">
        <Label htmlFor="material" className="text-sm font-medium flex items-center gap-2">
          <Box className="w-4 h-4 text-primary" />
          Material Type
        </Label>
        <Select value={selectedMaterial} onValueChange={onMaterialChange}>
          <SelectTrigger id="material" className="h-12" data-testid="select-material">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MATERIAL_PRESETS.map((material) => (
              <SelectItem key={material.name} value={material.name}>
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium">{material.name}</span>
                  <span className="text-xs text-muted-foreground ml-3">
                    {material.density} g/cm³
                  </span>
                </div>
              </SelectItem>
            ))}
            <SelectItem value="custom">
              Custom Density
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isCustom && (
        <div className="space-y-2">
          <Label htmlFor="custom-density" className="text-sm font-medium">
            Custom Density (g/cm³)
          </Label>
          <Input
            id="custom-density"
            type="number"
            step="0.01"
            min="0.01"
            value={customDensity}
            onChange={(e) => onCustomDensityChange(parseFloat(e.target.value) || 0)}
            className="h-12 font-mono"
            placeholder="1.24"
            data-testid="input-custom-density"
          />
        </div>
      )}

      <div className="text-xs text-muted-foreground">
        Current density: <span className="font-mono font-medium">{currentDensity.toFixed(2)} g/cm³</span>
      </div>
    </div>
  );
}
