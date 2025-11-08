import { useState } from "react";
import SpoolTracker from "../SpoolTracker";

export default function SpoolTrackerExample() {
  const [grossWeight, setGrossWeight] = useState("1200");
  const [tareWeight, setTareWeight] = useState("200");

  return (
    <SpoolTracker
      grossWeight={grossWeight}
      tareWeight={tareWeight}
      onGrossWeightChange={setGrossWeight}
      onTareWeightChange={setTareWeight}
      remainingWeight={1000}
    />
  );
}
