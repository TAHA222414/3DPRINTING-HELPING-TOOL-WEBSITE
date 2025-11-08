import { Card, CardContent } from "@/components/ui/card";

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
      <Card>
        <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
          <h2>Accuracy of Calculations</h2>
          <p>
            While we strive to provide accurate calculations, the results are estimates based on
            standard formulas and material densities. Actual filament properties may vary by
            manufacturer, color, and production batch.
          </p>

          <h2>Material Density Variations</h2>
          <p>
            The preset density values are typical averages. For the most accurate results, we
            recommend using the custom density option with values specific to your filament brand.
          </p>

          <h2>No Warranty</h2>
          <p>
            This tool is provided "as is" without warranty of any kind. We are not responsible for
            any errors in calculations or decisions made based on the results.
          </p>

          <h2>Educational Purpose</h2>
          <p>
            This calculator is intended as a helpful tool for planning and estimation. Always verify
            critical calculations independently.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
