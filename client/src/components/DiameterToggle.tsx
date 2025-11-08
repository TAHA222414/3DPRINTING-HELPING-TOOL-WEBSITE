import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

interface DiameterToggleProps {
  diameter: number;
  onDiameterChange: (diameter: number) => void;
}

export default function DiameterToggle({ diameter, onDiameterChange }: DiameterToggleProps) {
  return (
    <div className="space-y-2" data-testid="diameter-toggle">
      <Label className="text-sm font-medium flex items-center gap-2">
        <Circle className="w-4 h-4 text-primary" />
        Filament Diameter
      </Label>
      <div className="flex gap-2">
        <Button
          variant={diameter === 1.75 ? "default" : "outline"}
          onClick={() => onDiameterChange(1.75)}
          className="flex-1 h-12"
          data-testid="button-diameter-1.75"
        >
          <div className="flex items-center gap-2">
            <Circle className="w-3 h-3" />
            <span className="font-mono">1.75 mm</span>
          </div>
        </Button>
        <Button
          variant={diameter === 2.85 ? "default" : "outline"}
          onClick={() => onDiameterChange(2.85)}
          className="flex-1 h-12"
          data-testid="button-diameter-2.85"
        >
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4" />
            <span className="font-mono">2.85 mm</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
