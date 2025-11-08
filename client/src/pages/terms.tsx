import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <Card>
        <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By using Filament Calculator, you agree to these terms and conditions. If you do not
            agree, please do not use this service.
          </p>

          <h2>Use License</h2>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to use this
            calculator for personal or commercial purposes.
          </p>

          <h2>Limitations</h2>
          <p>You may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose without attribution</li>
            <li>Attempt to reverse engineer any software contained on this website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on Filament Calculator are provided on an 'as is' basis. We make no
            warranties, expressed or implied, and hereby disclaim all warranties including implied
            warranties of merchantability or fitness for a particular purpose.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            In no event shall Filament Calculator or its suppliers be liable for any damages
            arising out of the use or inability to use this service.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to revise these terms at any time. By using this website, you are
            agreeing to be bound by the current version of these terms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
