import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              How to Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">1. Select Your Material</h3>
              <p className="text-muted-foreground">
                Choose from common filament types (PLA, PETG, ABS, TPU) or enter a custom density.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Choose Filament Diameter</h3>
              <p className="text-muted-foreground">
                Select either 1.75mm or 2.85mm diameter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Enter Weight or Length</h3>
              <p className="text-muted-foreground">
                Input either the weight in grams or length in meters - the other value will be calculated automatically.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Track Your Spool (Optional)</h3>
              <p className="text-muted-foreground">
                Enter gross and tare weights to see how much filament remains on your spool.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Need More Help?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you have questions or need assistance, we're here to help!
            </p>
            <Link href="/contact">
              <a>
                <Button className="w-full">
                  Contact Us
                </Button>
              </a>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
