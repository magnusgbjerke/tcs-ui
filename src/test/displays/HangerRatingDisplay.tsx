import { useState } from "react";
import { HangerRating } from "../../components/HangerRating";

export function HangerRatingDisplay() {
  const [value, setValue] = useState(3.5);
  const [disabled, setDisabled] = useState(false);
  const [hangerClicked, setHangerClicked] = useState(0);

  return (
    <>
      <p className="text-3xl underline">Hanger Rating</p>
      <input
        type="number"
        id="user-input"
        value={value}
        step="0.50"
        className="border border-gray-300 rounded m-3"
        onChange={(e) => setValue(+e.target.value)}
        placeholder={"placeholder"}
      />
      <button
        className="px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold focus:outline-none transition-colors"
        onClick={() => {
          setDisabled(!disabled);
        }}
      >
        Disabled: {disabled ? "True" : "False"}
      </button>
      <HangerRating
        averageRating={value}
        disabled={disabled}
        onClick={(index) => {
          setHangerClicked(index + 1);
          setValue(index + 1);
        }}
      />
      <a>Hanger click: {hangerClicked}</a>
    </>
  );
}
