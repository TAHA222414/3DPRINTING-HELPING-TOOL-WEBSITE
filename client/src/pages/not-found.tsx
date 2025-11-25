import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-3xl mx-4 my-8">
        <CardContent className="pt-6">
          <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h1>Getting Started with 3D Printing</h1>

            <p>
              If you’ve just unboxed your first 3D printer, you’re probably feeling
              equal parts excited and nervous. There’s a hot nozzle, a moving bed,
              a tangle of settings you’ve never heard of, and everyone online keeps
              talking about “bed leveling” like it’s a sacred ritual.
            </p>

            <p>
              Take a breath. Once you understand a few core ideas, 3D printing
              becomes much less mysterious and a lot more fun.
            </p>

            <h2>What 3D printing actually does</h2>

            <p>
              Desktop 3D printers work by building objects one thin layer at a
              time. Most beginner-friendly machines are FDM (Fused Deposition
              Modeling) printers: they melt a plastic filament and draw each layer
              like a tiny robot glue gun.
            </p>

            <p>
              The second big family is resin printers, which use liquid resin cured
              by light. They offer amazing detail, but they’re messier and more
              chemical-heavy, so most people start with FDM and move to resin later.
            </p>

            <h2>Choosing (or understanding) your first printer</h2>

            <p>
              If you’re still shopping, here are the three things that matter more
              than fancy marketing:
            </p>

            <ul>
              <li>
                <strong>Community &amp; support</strong> – A popular model has more
                tutorials, printable upgrades, and troubleshooting help.
              </li>
              <li>
                <strong>Build volume</strong> – Bigger isn’t always better; it just
                takes more space and time. For most people, a “medium” bed (around
                220×220×250 mm) is plenty.
              </li>
              <li>
                <strong>Ease of use</strong> – Automatic bed leveling, filament
                run-out sensors, and a decent touchscreen can save you a lot of
                frustration.
              </li>
            </ul>

            <p>
              If you already own a printer, look it up online and bookmark a few
              guides or videos specific to your model; they’ll be gold later when
              you’re tuning things.
            </p>

            <h2>Essential tools and materials</h2>

            <p>You don’t need a full workshop, but a few simple tools make life easier:</p>

            <ul>
              <li>A set of Allen keys (usually included with the printer)</li>
              <li>Side cutters for trimming filament and supports</li>
              <li>A metal scraper or thin spatula for removing prints</li>
              <li>Digital calipers for measuring parts</li>
              <li>A soft brush or microfiber cloth to keep the bed clean</li>
              <li>
                Blue painter’s tape or glue stick if your bed surface needs extra
                grip
              </li>
            </ul>

            <p>
              For filament, start with PLA (polylactic acid). It’s easy to print,
              doesn’t need a heated enclosure, and works great for most decorative
              or light-duty parts.
            </p>

            <h2>Step 1: Set up and safety</h2>

            <p>Before you turn anything on:</p>

            <ul>
              <li>Put the printer on a stable, level surface. Shaky tables = shaky prints.</li>
              <li>
                Make sure there’s good ventilation, especially later if you print
                ABS or other stronger plastics.
              </li>
              <li>
                Check that all screws and belts look snug, and nothing is obviously
                bent or loose from shipping.
              </li>
            </ul>

            <p>
              Always keep fingers away from the hot nozzle and the heated bed; they
              reach 200–250 °C and 60–100 °C, respectively.
            </p>

            <h2>Step 2: Bed leveling and the first layer</h2>

            <p>
              If 3D printing has a “secret sauce,” it’s the first layer. If that
              first layer doesn’t stick properly, the whole print is doomed.
            </p>

            <p>
              Most beginner tutorials focus on bed leveling—making sure the print
              surface is perfectly flat relative to the nozzle—and Z-offset, which
              controls how far the nozzle is from the bed.
            </p>

            <p>Basic manual leveling goes like this:</p>

            <ol>
              <li>Preheat the nozzle and bed (heat can slightly change the geometry).</li>
              <li>Home the printer (send it to its zero position).</li>
              <li>
                Move the nozzle to each corner and the center, sliding a piece of
                paper between the nozzle and bed.
              </li>
              <li>
                Adjust the knobs until you feel a slight scratch on the paper
                everywhere – not loose, not jammed.
              </li>
            </ol>

            <p>
              Once that’s done, print a simple bed leveling test or a big single-layer
              square. You want a smooth, slightly squished line, not round “spaghetti”
              and not gouged into the bed.
            </p>

            <h2>Step 3: Loading filament</h2>

            <p>
              Most printers let you manually feed filament into the extruder until
              you see plastic coming out of the nozzle. Cut the filament end at a
              clean angle, push it in firmly, and keep feeding until the old color
              is fully purged.
            </p>

            <p>
              If you hear grinding or see the extruder gear chewing the filament,
              stop and check that you’re fully in the path and the nozzle is at
              temperature.
            </p>

            <h2>Step 4: Basic slicer settings</h2>

            <p>
              Your slicer (Cura, PrusaSlicer, Bambu Studio, etc.) takes a 3D model
              and turns it into G-code—the printer’s instructions. For your first
              prints, keep it simple:
            </p>

            <ul>
              <li>Layer height: 0.2 mm is a good starting point.</li>
              <li>Infill: 15–20% grid or gyroid.</li>
              <li>Wall count: 2 or 3 perimeters.</li>
              <li>Print temperature: Around 200 °C for PLA (check your filament spool).</li>
              <li>Bed temperature: 50–60 °C for PLA.</li>
              <li>Supports: Only “touching build plate” if you absolutely need them.</li>
            </ul>

            <p>
              Most modern beginner guides walk through these settings with screenshots
              for your slicer of choice.
            </p>

            <h2>Step 5: Your first “real” print</h2>

            <p>Start with something forgiving:</p>

            <ul>
              <li>A small calibration cube</li>
              <li>A phone stand</li>
              <li>A simple key holder</li>
            </ul>

            <p>
              Let the first layer finish before you walk away. If it’s not sticking,
              stop the print and re-check leveling and bed cleanliness.
            </p>

            <h2>The mindset that makes 3D printing fun</h2>

            <p>
              Here’s the secret: every failed print is data. You’ll gradually learn
              what your machine likes, which materials are chill and which are drama
              queens, and how much you can push speed before things get ugly.
            </p>

            <p>
              Don’t worry about perfection on day one. Focus on getting one
              successful, small print, then build from there.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
