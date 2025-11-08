import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Package } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SpoolTrackerProps {
  grossWeight: string;
  tareWeight: string;
  onGrossWeightChange: (weight: string) => void;
  onTareWeightChange: (weight: string) => void;
  remainingWeight: number;
}

export default function SpoolTracker({
  grossWeight,
  tareWeight,
  onGrossWeightChange,
  onTareWeightChange,
  remainingWeight,
}: SpoolTrackerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const gross = parseFloat(grossWeight) || 0;
  const tare = parseFloat(tareWeight) || 0;
  const netWeight = Math.max(0, gross - tare);
  const percentageRemaining = tare > 0 && gross > tare ? (netWeight / (gross - tare)) * 100 : 0;

  return (
    <div className="border rounded-lg" data-testid="spool-tracker">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full justify-between h-auto p-4 hover-elevate"
        data-testid="button-toggle-spool-tracker"
      >
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-primary" />
          <span className="font-medium">Track Remaining Filament</span>
        </div>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gross-weight" className="text-sm font-medium">
                Gross Weight
              </Label>
              <div className="relative">
                <Input
                  id="gross-weight"
                  type="number"
                  step="1"
                  min="0"
                  value={grossWeight}
                  onChange={(e) => onGrossWeightChange(e.target.value)}
                  className="h-12 font-mono pr-12"
                  placeholder="0"
                  data-testid="input-gross-weight"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
                  g
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tare-weight" className="text-sm font-medium">
                Empty Spool Weight
              </Label>
              <div className="relative">
                <Input
                  id="tare-weight"
                  type="number"
                  step="1"
                  min="0"
                  value={tareWeight}
                  onChange={(e) => onTareWeightChange(e.target.value)}
                  className="h-12 font-mono pr-12"
                  placeholder="0"
                  data-testid="input-tare-weight"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
                  g
                </div>
              </div>
            </div>
          </div>

          {netWeight > 0 && (
            <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Net Filament Weight</span>
                <span className="font-mono font-semibold" data-testid="text-net-weight">
                  {netWeight.toFixed(1)} g
                </span>
              </div>
              <Progress
                value={Math.min(percentageRemaining, 100)}
                className="h-2"
              />
              <div className="text-xs text-muted-foreground text-center">
                {percentageRemaining.toFixed(0)}% remaining
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
