import { Checkbox } from "../../components/Checkbox";

export function CheckboxDisplay() {
  return (
    <>
      <p className="text-3xl underline">Checkbox</p>
      <Checkbox checked={true} />
    </>
  );
}
