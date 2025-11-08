import { useState } from "react";
import InputSection from "../InputSection";

export default function InputSectionExample() {
  const [inputMode, setInputMode] = useState<"weight" | "length">("weight");
  const [weight, setWeight] = useState("100");
  const [length, setLength] = useState("");
  const [costPerKg, setCostPerKg] = useState("20");

  return (
    <InputSection
      inputMode={inputMode}
      weight={weight}
      length={length}
      costPerKg={costPerKg}
      onInputModeChange={setInputMode}
      onWeightChange={setWeight}
      onLengthChange={setLength}
      onCostPerKgChange={setCostPerKg}
    />
  );
}
