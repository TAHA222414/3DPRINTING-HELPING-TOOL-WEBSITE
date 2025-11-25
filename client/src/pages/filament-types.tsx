import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-10">
      <Card className="w-full max-w-3xl mx-4">
        <CardContent className="pt-6">
          <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h1>Advanced Filament Types Explained</h1>

            <p>
              Once you’ve printed a few rolls of PLA, you start to notice its limits.
              Maybe your car-mount sagged in the summer heat, or a clip snapped the
              first time you flexed it. That’s when people start looking beyond the
              “starter” filaments.
            </p>

            <p>
              Let’s walk through the most common advanced filament types, what they’re
              good at, and what to watch out for.
            </p>

            <h2>PLA – the baseline</h2>
            <p>PLA is still the reference point for everything else:</p>
            <ul>
              <li>Easy to print at ~190–215 °C</li>
              <li>Often works fine with a modest or cool bed</li>
              <li>Low warping, great for decorative parts</li>
            </ul>
            <p>
              But PLA softens around 55–60 °C, so parts left in hot environments may
              deform.
            </p>

            <h2>PETG – the tough all-rounder</h2>
            <p>PETG sits between PLA and ABS and has become the “daily driver” for many:</p>
            <ul>
              <li>More impact-resistant and temperature-resistant than PLA</li>
              <li>Less brittle and slightly flexible</li>
              <li>Prints at 230–250 °C with a 70–85 °C bed</li>
            </ul>
            <p>
              PETG is perfect for brackets, tool holders, enclosures, and outdoor
              parts. Can be stringy until tuned.
            </p>

            <h2>ABS & ASA – for heat and durability</h2>
            <p>ABS is a classic engineering plastic with high durability:</p>
            <ul>
              <li>Handles higher heat than PLA/PETG</li>
              <li>Strong and durable</li>
              <li>Sands and acetone-glues well</li>
            </ul>
            <p>
              The catch? ABS warps easily and prefers an enclosure. ASA is similar
              but UV-resistant and better for outdoor use.
            </p>

            <h2>TPU & flexible filaments</h2>
            <p>
              TPU prints like flexible rubber and is amazing for functional flexible parts:
            </p>
            <ul>
              <li>Phone cases</li>
              <li>Vibration-damping feet</li>
              <li>Straps, hinges, and gaskets</li>
            </ul>
            <p>
              Prints at 210–240 °C. Best printed slow. Direct-drive extruders work
              best.
            </p>

            <h2>Nylon – tough and hardworking</h2>
            <p>Nylon is very strong, abrasion-resistant, and flexible:</p>
            <ul>
              <li>Gears and bushings</li>
              <li>Stress-bearing components</li>
              <li>Moving functional parts</li>
            </ul>
            <p>
              Needs high heat and stays dry — nylon absorbs moisture quickly
              and prints poorly when wet.
            </p>

            <h2>Composite filaments (carbon fiber, glass, wood, metal)</h2>

            <h3>Carbon-fiber blends</h3>
            <p>
              Available in PLA, PETG, or nylon bases. Very stiff, low warping,
              beautiful matte finish — but abrasive (needs a hardened steel nozzle).
            </p>

            <h3>Wood-filled PLA</h3>
            <p>
              Smells like wood, looks like wood. Perfect for decor but brittle.
              Works best with 0.5–0.6 mm nozzles.
            </p>

            <h3>Metal-filled PLA</h3>
            <p>
              Heavy, metallic-looking prints. Great for art and props, but not
              structurally strong like real metal.
            </p>

            <h2>How to choose the right filament</h2>
            <p>Ask these questions:</p>

            <ul>
              <li>
                <strong>Will this part see heat?</strong><br />
                → Use PETG, ABS, ASA, or nylon.
              </li>

              <li>
                <strong>Does it need to flex or handle impact?</strong><br />
                → PETG, ABS, or TPU.
              </li>

              <li>
                <strong>Is it aesthetic/decorative?</strong><br />
                → PLA, silk PLA, wood-fill, metal-fill.
              </li>

              <li>
                <strong>How much tuning am I willing to do?</strong><br />
                → The more advanced, the more setup required.
              </li>
            </ul>

            <p>
              Start with one step above PLA — usually PETG or TPU — and build your
              way up. Each material teaches you new skills and opens the door to
              more advanced projects.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
