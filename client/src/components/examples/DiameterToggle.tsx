import { useState } from "react";
import DiameterToggle from "../DiameterToggle";

export default function DiameterToggleExample() {
  const [diameter, setDiameter] = useState(1.75);

  return <DiameterToggle diameter={diameter} onDiameterChange={setDiameter} />;
}
