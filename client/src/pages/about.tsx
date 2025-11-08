import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <Card>
        <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Welcome to Filament Calculator, your comprehensive tool for 3D printing calculations.
          </p>
          <p>
            We created this tool to help makers, hobbyists, and professionals accurately calculate
            filament usage, costs, and material requirements for their 3D printing projects.
          </p>
          <p>
            Our calculator uses precise formulas to convert between weight, length, and volume,
            taking into account different material densities and filament diameters. Whether you're
            planning a print, tracking your spool inventory, or estimating project costs, we've got
            you covered.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
