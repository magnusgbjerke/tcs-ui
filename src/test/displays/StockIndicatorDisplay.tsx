import { useState } from "react";
import { StockIndicator } from "../../components/StockIndicator";

export function StockIndicatorDisplay() {
  const [state, setState] = useState(7);
  return (
    <>
      <p className="text-3xl underline">Stock Indicator</p>
      <p>Stock:</p>
      <p>0 = red</p>
      <p>5 or less = yellow</p>
      <p>5+ = green</p>
      <input
        type="number"
        id="user-input"
        value={state}
        step="1"
        className="border border-gray-300 rounded m-3"
        onChange={(e) => setState(+e.target.value)}
        placeholder={"placeholder"}
      />
      <StockIndicator stock={state} />
    </>
  );
}
