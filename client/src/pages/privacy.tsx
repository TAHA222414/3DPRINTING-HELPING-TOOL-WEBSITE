import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <Card>
        <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information We Collect</h2>
          <p>
            This calculator runs entirely in your browser. We do not collect, store, or transmit
            any calculation data or personal information to our servers.
          </p>

          <h2>Local Storage</h2>
          <p>
            We use your browser's local storage only to save your theme preference (light/dark mode).
            This data never leaves your device.
          </p>

          <h2>Cookies</h2>
          <p>
            We do not use cookies for tracking or analytics purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This application does not integrate with third-party analytics or tracking services.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us through our contact form.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
