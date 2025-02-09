import { useState } from "react";
import { Checkbox } from "../../components/Checkbox";

export function CheckboxDisplay() {
  const [state, setState] = useState(false);
  return (
    <>
      <p className="text-3xl underline p-2">Checkbox</p>
      <Checkbox checked={state} onChange={() => setState(!state)} />
    </>
  );
}
