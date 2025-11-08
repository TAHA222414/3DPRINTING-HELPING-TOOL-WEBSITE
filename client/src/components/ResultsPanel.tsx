import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Scale, Box, DollarSign, Copy, Check, Target } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ResultsPanelProps {
  length: number;
  weight: number;
  volume: number;
  cost: number;
  metersRemaining: number | null;
}

export default function ResultsPanel({
  length,
  weight,
  volume,
  cost,
  metersRemaining,
}: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    const results = `Filament Calculation Results:
Length: ${length.toFixed(2)} meters
Weight: ${weight.toFixed(2)} grams
Volume: ${volume.toFixed(2)} cm³
Estimated Cost: $${cost.toFixed(2)}${metersRemaining !== null ? `\nRemaining on Spool: ${metersRemaining.toFixed(2)} meters` : ""}`;

    navigator.clipboard.writeText(results);
    setCopied(true);
    toast({
      title: "Results copied!",
      description: "Calculation results copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="lg:sticky lg:top-6" data-testid="results-panel">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <ResultItem
            icon={<Ruler className="w-5 h-5" />}
            label="Length"
            value={length.toFixed(2)}
            unit="meters"
            testId="result-length"
          />
          <ResultItem
            icon={<Scale className="w-5 h-5" />}
            label="Weight"
            value={weight.toFixed(2)}
            unit="grams"
            testId="result-weight"
          />
          <ResultItem
            icon={<Box className="w-5 h-5" />}
            label="Volume"
            value={volume.toFixed(2)}
            unit="cm³"
            testId="result-volume"
          />
          <ResultItem
            icon={<DollarSign className="w-5 h-5" />}
            label="Cost"
            value={`$${cost.toFixed(2)}`}
            unit=""
            testId="result-cost"
          />

          {metersRemaining !== null && metersRemaining > 0 && (
            <>
              <div className="border-t pt-3 mt-3" />
              <ResultItem
                icon={<Target className="w-5 h-5 text-primary" />}
                label="Remaining on Spool"
                value={metersRemaining.toFixed(2)}
                unit="meters"
                highlight
                testId="result-remaining"
              />
            </>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleCopy}
          data-testid="button-copy-results"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Results
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

interface ResultItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  highlight?: boolean;
  testId?: string;
}

function ResultItem({ icon, label, value, unit, highlight, testId }: ResultItemProps) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${highlight ? "bg-primary/5" : "bg-muted/50"}`}>
      <div className="flex items-center gap-3">
        <div className={highlight ? "text-primary" : "text-muted-foreground"}>{icon}</div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="text-right">
        <div className={`text-xl font-semibold font-mono ${highlight ? "text-primary" : ""}`} data-testid={testId}>
          {value}
        </div>
        {unit && <div className="text-xs text-muted-foreground">{unit}</div>}
      </div>
    </div>
  );
}
