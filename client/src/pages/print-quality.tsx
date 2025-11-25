import { Card, CardContent } from "@/components/ui/card";

export default function PrintQuality() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-10">
      <Card className="w-full max-w-3xl mx-4">
        <CardContent className="pt-6">
          <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            
            <h1>Optimizing Print Quality</h1>

            <p>
              Once your printer is reliable, the next question becomes:
              <strong> How do I make my prints look amazing?</strong>
            </p>

            <p>
              Better quality doesn't require buying a new printer. Most improvements
              come from fine-tuning settings, tightening a few screws, and understanding
              the trade-off between speed and print quality.
            </p>

            <h2>Start with a Solid Mechanical Foundation</h2>

            <p>Before tweaking slicer settings, ensure your printer is physically sound:</p>

            <ul>
              <li>Tighten the frame — loose screws create wobble.</li>
              <li>Check that X/Y belts are snug and aligned.</li>
              <li>Make sure the Z-axis moves smoothly without binding.</li>
              <li>Lubricate rods or rails if recommended by your manufacturer.</li>
            </ul>

            <p>
              Mechanical issues often show up as banding, ripples, ghosting, or inconsistent
              layers — and software alone cannot fix those.
            </p>

            <h2>Calibrate Steps, Flow, and Temperatures</h2>

            <p>
              Think of calibration as teaching your printer <em>what a millimeter really is</em>.
              These three calibrations have the biggest impact on print quality:
            </p>

            <h3>Extruder Steps/mm (E-steps)</h3>
            <p>
              Command your printer to extrude 100 mm of filament, measure the actual amount,
              and correct the steps/mm until it's perfect.
            </p>

            <h3>Flow Rate</h3>
            <p>
              Print a single-wall cube and measure the wall thickness. Adjust flow until
              the printed wall matches the slicer's expected line width.
            </p>

            <h3>Temperature Calibration</h3>
            <p>
              Use a temperature tower. Each layer is printed at a different temperature,
              exposing the ideal balance between detail, smoothness, and layer adhesion.
            </p>

            <h2>Dial in Retraction and Travel</h2>

            <p>
              Stringing and blobs ruin print appearance, especially on detailed models.
            </p>

            <ul>
              <li>
                <strong>Retraction distance:</strong> Start with slicer defaults for your printer type (Bowden vs direct drive).
              </li>
              <li>
                <strong>Retraction speed:</strong> Too slow = stringing; too fast = grinding or jams.
              </li>
              <li>
                <strong>Travel speed:</strong> Faster travel gives less time for ooze and reduces wispy strings.
              </li>
            </ul>

            <p>
              You can find popular retraction test models online that print multiple settings in one print.
            </p>

            <h2>Print Settings That Instantly Boost Quality</h2>

            <p>A few slicer tweaks give major visual improvements:</p>

            <ul>
              <li>
                <strong>Layer height:</strong> 0.16–0.2 mm is ideal for a 0.4 mm nozzle.
              </li>
              <li>
                <strong>Outer wall speed:</strong> Slow outer walls, fast infill — best combination of detail and speed.
              </li>
              <li>
                <strong>Top layers:</strong> 4–6 top layers reduce gaps and prevent pillowing.
              </li>
              <li>
                <strong>Monotonic infill / Ironing:</strong> Gives smoother top surfaces on compatible slicers.
              </li>
            </ul>

            <h2>Cooling and Environment</h2>

            <p>Cooling dramatically affects print quality:</p>

            <ul>
              <li><strong>PLA:</strong> Usually loves 100% fan after layer 2.</li>
              <li><strong>PETG:</strong> Prefers 40–60% to avoid brittle layers.</li>
              <li><strong>ABS/ASA:</strong> Minimal cooling; use an enclosure for best results.</li>
            </ul>

            <p>
              Avoid printing in rooms with drafts — even a small breeze can cause
              inconsistent layers or warping.
            </p>

            <h2>Better Support Settings</h2>

            <p>Supports are necessary but shouldn't destroy your surface finish:</p>

            <ul>
              <li>Use tree/organic supports wherever possible.</li>
              <li>Enable support interface layers for clean separation.</li>
              <li>
                Reduce support density and slightly increase Z-distance if supports
                fuse to the print.
              </li>
            </ul>

            <h2>Post-Processing for the Last 10% of Polish</h2>

            <ul>
              <li>
                <strong>Sanding:</strong> Start at 220–320 grit, work up to 800–1000 for smooth results.
              </li>
              <li>
                <strong>Filler primer:</strong> Spray, sand, repeat — perfect before painting.
              </li>
              <li>
                <strong>Chemical smoothing:</strong> ABS vapor smoothing gives a glossy finish (use proper safety!).
              </li>
            </ul>

            <h2>Quality Is a Process, Not a Mystery</h2>

            <p>Great prints come from:</p>

            <ul>
              <li>A mechanically solid printer</li>
              <li>Correct calibration</li>
              <li>Thoughtful slicer settings</li>
              <li>Optional post-processing</li>
            </ul>

            <p>
              Treat every print as a tiny experiment. Over time, you'll develop
              intuition for what works — and your prints will keep getting better.
            </p>

          </article>
        </CardContent>
      </Card>
    </div>
  );
}
