import { useState } from "react";
import MaterialSelector from "../MaterialSelector";

export default function MaterialSelectorExample() {
  const [material, setMaterial] = useState("PLA");
  const [customDensity, setCustomDensity] = useState(1.24);

  return (
    <MaterialSelector
      selectedMaterial={material}
      customDensity={customDensity}
      onMaterialChange={setMaterial}
      onCustomDensityChange={setCustomDensity}
    />
  );
}
