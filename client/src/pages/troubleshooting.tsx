import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-10">
      <Card className="w-full max-w-3xl mx-4">
        <CardContent className="pt-6">
          <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h1>Troubleshooting Common Print Issues</h1>

            <p>
              Sooner or later, every 3D printer owner meets the same villains:
              spaghetti on the bed, warped corners, weird gaps, or a print that
              just… stops. It’s frustrating, but it’s also completely normal.
            </p>

            <p>
              Let’s walk through the most common issues, how they look, and
              the steps to fix them.
            </p>

            <h2>1. The dreaded first-layer fail (poor bed adhesion)</h2>

            <h3>Symptoms</h3>
            <ul>
              <li>Print comes loose mid-print</li>
              <li>Corners curl up (warping)</li>
              <li>Filament doesn’t seem to stick at all</li>
            </ul>

            <h3>Likely causes</h3>
            <ul>
              <li>Bed not level or Z-offset too high</li>
              <li>Bed dirty or greasy</li>
              <li>Bed temperature too low for the material</li>
            </ul>

            <h3>Fix it</h3>
            <ul>
              <li>Re-level the bed carefully and check your Z-offset.</li>
              <li>
                Clean the surface with isopropyl alcohol (and avoid
                fingerprints afterwards).
              </li>
              <li>Raise bed temperature slightly, especially for PETG/ABS.</li>
              <li>
                Try a brim or raft for stubborn parts or harder-to-print
                materials.
              </li>
            </ul>

            <h2>2. Warping and corner lifting</h2>
            <p>
              Warping is when the part pulls up at the corners, especially with
              materials like ABS and nylon.
            </p>

            <h3>What helps</h3>
            <ul>
              <li>Use an enclosure or at least block drafts.</li>
              <li>Increase bed temperature and make sure it’s stable.</li>
              <li>Add a brim or raft in your slicer.</li>
              <li>
                For ABS/ASA, try specialty bed surfaces or adhesives designed
                for those materials.
              </li>
            </ul>

            <h2>3. Stringing (those wispy hairs everywhere)</h2>

            <h3>Symptoms</h3>
            <p>
              Fine strands of filament appear between separate parts of the
              print, like cobwebs.
            </p>

            <h3>Likely causes</h3>
            <ul>
              <li>Retraction distance or speed not tuned</li>
              <li>Printing temperature too high</li>
              <li>Wet filament (especially PETG, TPU, and nylon)</li>
            </ul>

            <h3>Fix it</h3>
            <ul>
              <li>Increase retraction distance and speed a bit at a time.</li>
              <li>Lower the nozzle temperature in 5 °C steps.</li>
              <li>
                Dry your filament if you hear popping or see bubbles in the
                extruded line.
              </li>
            </ul>

            <h2>4. Under-extrusion and gaps</h2>

            <h3>Symptoms</h3>
            <ul>
              <li>Sparse infill</li>
              <li>Gaps between lines</li>
              <li>Weak or brittle parts</li>
            </ul>

            <h3>Likely causes</h3>
            <ul>
              <li>Clogged or partially blocked nozzle</li>
              <li>Filament grinding in the extruder</li>
              <li>Incorrect flow rate or filament diameter in slicer</li>
            </ul>

            <h3>Fix it</h3>
            <ul>
              <li>Heat the nozzle and perform a cold pull, or replace it.</li>
              <li>
                Check the extruder gear, clean shavings, and increase tension
                slightly.
              </li>
              <li>
                Make sure your slicer is set to the correct filament diameter
                (1.75 mm for most printers).
              </li>
              <li>
                Increase flow by a small amount (e.g., 103–105 %) and test
                again.
              </li>
            </ul>

            <h2>5. Layer shifting</h2>

            <h3>Symptoms</h3>
            <p>
              The print suddenly jumps sideways partway up, leaving a “stair
              step” effect.
            </p>

            <h3>Likely causes</h3>
            <ul>
              <li>Belts too loose or slipping</li>
              <li>Stepper motor drivers overheating</li>
              <li>Print head hitting a curled-up section of the print</li>
            </ul>

            <h3>Fix it</h3>
            <ul>
              <li>
                Tighten belts so they’re firm but not guitar-string tight.
              </li>
              <li>Reduce print speed or acceleration limits.</li>
              <li>
                Fix your adhesion/warping issues so the nozzle doesn’t collide
                with the part.
              </li>
            </ul>

            <h2>6. Elephant’s foot (bulged first layer)</h2>

            <h3>Symptoms</h3>
            <p>
              The first few layers flare out so the bottom edge is wider than
              the rest of the part.
            </p>

            <h3>Likely causes</h3>
            <ul>
              <li>Bed temperature too high</li>
              <li>Z-offset a bit too low, squishing the first layer</li>
              <li>Heavy part with insufficient cooling in the first layers</li>
            </ul>

            <h3>Fix it</h3>
            <ul>
              <li>Lower bed temperature slightly.</li>
              <li>Nudge Z-offset up by 0.02–0.05 mm.</li>
              <li>
                Enable features like “initial layer fan speed” or “elephant’s
                foot compensation” if your slicer supports them.
              </li>
            </ul>

            <h2>7. Ugly surface finish</h2>

            <p>
              Sometimes a print completes and is dimensionally fine, but it just
              doesn’t look good. You might see rough top layers, tiny gaps, or
              visible seams where each layer starts and ends.
            </p>

            <h3>Things to try</h3>
            <ul>
              <li>Slow down outer wall speeds.</li>
              <li>Increase top layer count slightly.</li>
              <li>Enable ironing for top surfaces (if your slicer has it).</li>
              <li>
                Check for wobble or loose screws in the frame and motion system.
              </li>
            </ul>

            <p>
              Every failed print is feedback. The more you recognize these
              patterns, the faster you’ll be able to dial in your machine and
              get reliable, clean prints.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
