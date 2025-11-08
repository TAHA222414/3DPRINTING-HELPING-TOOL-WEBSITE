# 3D Printing Filament Calculator - Design Guidelines

## Design Approach

**Framework**: Material Design principles adapted for a calculator tool interface - emphasizes clarity, immediate feedback, and efficient data entry. Drawing inspiration from calculator tools like Fused Filaments and modern productivity apps like Linear for their clean, focused layouts.

**Core Principle**: Single-purpose clarity with instant visual feedback. Every interaction should feel responsive and purposeful.

---

## Layout Architecture

**Single-Page Application Structure**:
- Compact header (h-16) with tool name and logo
- Main calculator zone using two-column desktop layout (lg:grid-cols-2)
- Left column: Input controls
- Right column: Live results panel (sticky positioning)
- Mobile: Single column stack with results appearing below inputs
- No hero section required - this is a pure utility tool
- Maximum container width: max-w-6xl for optimal readability
- Vertical spacing: Use py-8 for main sections, py-12 for container padding

**Spacing System**:
Primary units: 2, 3, 4, 6, 8, 12 (as in p-4, gap-6, mt-8)
- Form fields: gap-4 between inputs
- Section spacing: space-y-6 within cards
- Card padding: p-6 (desktop), p-4 (mobile)

---

## Typography Hierarchy

**Font Families**:
- Primary: Inter (Google Fonts) - clean, modern, excellent for numbers
- Monospace: Roboto Mono - for numerical outputs and calculations

**Type Scale**:
- Tool title: text-2xl font-bold (32px)
- Section headers: text-lg font-semibold (18px)
- Input labels: text-sm font-medium (14px)
- Body/values: text-base (16px)
- Results display: text-xl font-semibold for primary values
- Helper text: text-xs text-gray-600 (12px)

---

## Component Library

### Input Controls

**Material Selector**:
- Dropdown with icon indicators for each material type
- Visual density badges next to material names (e.g., "PLA • 1.24 g/cm³")
- "Custom" option expanding to reveal density input field
- Selected state shows material icon and name

**Diameter Toggle**:
- Segmented control with two options: "1.75mm" | "2.85mm"
- Active state: solid background, inactive: outline only
- Icon representation: small circle sizes showing relative diameter

**Dual Input Fields (Weight/Length)**:
- Large, prominent input boxes (h-12)
- Clear unit indicators (g, m) inside input on the right
- Tabbed interface switching between "Enter Weight" and "Enter Length" modes
- Only one input active at a time, other auto-calculates and displays read-only

**Spool Tracker Section**:
- Collapsible panel with "Track Remaining Filament" header
- Two number inputs: "Gross Weight" and "Empty Spool Weight"
- Visual progress indicator showing percentage remaining
- Color-coded: green (>50%), yellow (20-50%), red (<20%)

**Cost Input**:
- Currency-prefixed input ($ symbol)
- "per kg" suffix
- Preset common prices as quick-select chips below input

### Output Display

**Results Card**:
- Elevated card with subtle shadow (shadow-lg)
- Organized in clear sections with dividers
- Icon indicators for each metric (ruler for length, scale for weight, cube for volume, dollar for cost)
- Large, bold numbers with small unit labels
- "Copy All" button at bottom of results
- Real-time updates as user types (debounced 300ms)

**Metrics Layout**:
```
📏 Length: [25.3] meters
⚖️ Weight: [45.2] grams
📦 Volume: [36.4] cm³
💰 Cost: [$0.90]
───────────────────────
🎯 Remaining: [22.1] meters (from spool)
```

### Action Buttons

**Primary Calculate** (if manual trigger needed):
- Full-width on mobile, right-aligned on desktop
- Prominent size (h-12, px-8)
- Icon + text: "Calculate"

**Reset Button**:
- Ghost button style (outline only)
- Positioned in header, right side
- Icon: circular arrow

**Copy Results**:
- Secondary button below results
- Icon: clipboard
- Toast notification on success

---

## Visual Design Elements

**Cards & Containers**:
- White background cards with rounded corners (rounded-xl)
- Subtle borders (border border-gray-200)
- Elevated shadow for results panel (shadow-lg)
- Input section uses lighter background (bg-gray-50)

**Form Elements**:
- Input fields: border-2, rounded-lg, h-12
- Focus state: prominent border color change, subtle glow
- Disabled/read-only: lighter background, reduced opacity
- Error states: red border, small error message below

**Icons**:
Use Heroicons via CDN for consistent iconography:
- Material types: cube, beaker, shield icons
- Measurements: ruler, scale, calculator
- Actions: arrow-path (reset), clipboard (copy), chevron-down (dropdown)

**Dividers**:
- Subtle horizontal rules between result metrics (border-t border-gray-200)
- Vertical divider on desktop between input/output columns

---

## Interaction Patterns

**Real-Time Calculation**:
- All calculations update instantly as user types
- Smooth number transitions (use CSS transitions on value changes)
- Loading state: subtle pulse animation on results card during calculation

**Field Validation**:
- Inline validation with helpful messages
- Prevent negative numbers
- Max/min value constraints with clear feedback
- Required field indicators

**Progressive Disclosure**:
- Advanced options (like spool tracking) initially collapsed
- Expand/collapse with smooth height transitions
- Remember user's last state in session

**Copy Functionality**:
- One-click copy all results to clipboard
- Brief success toast message: "Results copied!"
- Format for paste: plain text with labels

---

## Responsive Behavior

**Desktop (lg: 1024px+)**:
- Two-column layout with sticky results panel
- Results scroll with page until hitting top, then stick
- Generous spacing and breathing room

**Tablet (md: 768px)**:
- Still two columns but narrower gaps
- Results panel no longer sticky, flows naturally

**Mobile (<768px)**:
- Single column stack
- Results appear immediately below inputs
- Sticky "Calculate" button at bottom of screen if needed
- Reduced padding (p-4 instead of p-6)

---

## Accessibility

- All inputs have associated labels (visible, not placeholder-only)
- ARIA labels for icon-only buttons
- Keyboard navigation: tab order follows logical flow
- Focus indicators clearly visible on all interactive elements
- Color contrast meets WCAG AA standards minimum
- Screen reader announcements for calculation results updates
- Error messages associated with inputs via aria-describedby

---

## Additional Features

**Header Bar**:
- Tool name with small 3D printer icon
- Optional tagline: "Calculate filament metrics instantly"
- Reset button on right side
- Minimal height (h-16) to maximize calculator space

**Footer**:
- Compact footer with formula reference link
- Material density source note
- No newsletter or heavy content - keep minimal

**Helper Tooltips**:
- Question mark icons next to technical fields (density, tare weight)
- Hover/click reveals explanation in small popover
- Non-intrusive, helpful for new users

---

**Images**: No images required for this calculator tool. It's purely functional with icon-based visual elements.