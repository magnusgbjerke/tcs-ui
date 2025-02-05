import { useState } from "react";
import { Button } from "../../components/Button";

export function ButtonDisplay() {
  const [state, setState] = useState(0);

  return (
    <>
      <p className="text-3xl underline p-2">Button</p>
      <Button
        size="sm"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Button
      </Button>
      <Button
        size="md"
        className="ml-1 mr-1"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Button
      </Button>
      <Button
        size="lg"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Button
      </Button>

      <a>Button click: {state}</a>

      <br />

      <Button
        size="md"
        disabled
        onClick={() => {
          setState(state + 1);
        }}
      >
        Button
      </Button>
    </>
  );
}
