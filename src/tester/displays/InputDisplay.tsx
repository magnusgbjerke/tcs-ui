import { useState } from "react";
import { Input } from "../../components/Input";

export function InputDisplay() {
  const [state, setState] = useState("");

  const handleInputChange = (value: string) => {
    setState(value);
  };

  return (
    <>
      <p className="text-3xl underline p-2">Input</p>
      <Input
        size="sm"
        value={state}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Input
        size="md"
        value={state}
        onChange={handleInputChange}
        className="ml-1 mr-1"
        placeholder="Enter phonenumber"
      />
      <Input
        size="lg"
        value={state}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
      <button
        className="px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold focus:outline-none transition-colors"
        onClick={() => {
          alert(`Value: ${state}`);
          setState("");
        }}
      >
        Value?
      </button>
      <br />
      <Input
        size="md"
        value={state}
        disabled
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </>
  );
}
