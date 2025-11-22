import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Clock, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function TimeEstimator() {
  const [volume, setVolume] = useState(50);
  const [layerHeight, setLayerHeight] = useState(0.2);
  const [printSpeed, setPrintSpeed] = useState(50);
  const [infill, setInfill] = useState(20);

  const estimateTime = () => {
    const volumeLayers = volume / layerHeight;
    const speedFactor = printSpeed / 100;
    const infillFactor = (infill / 100) * 0.8 + 0.2;
    const baseTime = volumeLayers / speedFactor * infillFactor;
    return Math.round(baseTime);
  };

  const handleReset = () => {
    setVolume(50);
    setLayerHeight(0.2);
    setPrintSpeed(50);
    setInfill(20);
  };

  const estimatedMinutes = estimateTime();
  const hours = Math.floor(estimatedMinutes / 60);
  const minutes = estimatedMinutes % 60;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Clock className="w-10 h-10 text-primary" />
          Print Time Estimator
        </h1>
        <p className="text-muted-foreground">
          Estimate how long your 3D print will take based on key parameters
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Adjust parameters to see time estimate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Volume */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume">Object Volume</Label>
                <span className="text-sm font-mono font-semibold">{volume} cm³</span>
              </div>
              <Slider
                id="volume"
                min={10}
                max={500}
                step={10}
                value={[volume]}
                onValueChange={(val) => setVolume(val[0])}
                className="w-full"
                data-testid="slider-volume"
              />
              <p className="text-xs text-muted-foreground">Larger volumes take longer to print</p>
            </div>

            {/* Layer Height */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="layer-height">Layer Height</Label>
                <span className="text-sm font-mono font-semibold">{layerHeight.toFixed(2)} mm</span>
              </div>
              <Slider
                id="layer-height"
                min={0.1}
                max={0.4}
                step={0.05}
                value={[layerHeight]}
                onValueChange={(val) => setLayerHeight(val[0])}
                className="w-full"
                data-testid="slider-layer-height"
              />
              <p className="text-xs text-muted-foreground">Finer layers = more time, better quality</p>
            </div>

            {/* Print Speed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="print-speed">Print Speed</Label>
                <span className="text-sm font-mono font-semibold">{printSpeed} mm/s</span>
              </div>
              <Slider
                id="print-speed"
                min={20}
                max={100}
                step={5}
                value={[printSpeed]}
                onValueChange={(val) => setPrintSpeed(val[0])}
                className="w-full"
                data-testid="slider-print-speed"
              />
              <p className="text-xs text-muted-foreground">Higher speed = faster print, lower quality</p>
            </div>

            {/* Infill */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="infill">Infill Percentage</Label>
                <span className="text-sm font-mono font-semibold">{infill}%</span>
              </div>
              <Slider
                id="infill"
                min={0}
                max={100}
                step={5}
                value={[infill]}
                onValueChange={(val) => setInfill(val[0])}
                className="w-full"
                data-testid="slider-infill"
              />
              <p className="text-xs text-muted-foreground">More infill = stronger part, longer print</p>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={handleReset}
              data-testid="button-reset-estimator"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card className="lg:sticky lg:top-6">
          <CardHeader>
            <CardTitle>Estimated Time</CardTitle>
            <CardDescription>Based on your current settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-primary/10 rounded-lg p-6 text-center space-y-2">
              <div className="text-5xl font-bold text-primary" data-testid="text-estimated-time">
                {hours}h {minutes}m
              </div>
              <p className="text-sm text-muted-foreground">
                Total estimated print time
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                ({estimatedMinutes} minutes)
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Volume</span>
                <span className="font-mono font-semibold">{volume} cm³</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Layer Height</span>
                <span className="font-mono font-semibold">{layerHeight.toFixed(2)} mm</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Print Speed</span>
                <span className="font-mono font-semibold">{printSpeed} mm/s</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Infill</span>
                <span className="font-mono font-semibold">{infill}%</span>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> This is an estimate based on typical printing conditions. Actual time may vary based on your printer model, material, and complexity.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
