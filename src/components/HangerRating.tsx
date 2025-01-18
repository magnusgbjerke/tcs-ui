import HalfFilledHangerSVG from "../assets/half-filled-hanger.svg";
import filledHangerSVG from "../assets/filled-hanger.svg";
import EmptyHangerSVG from "../assets/hanger.svg";

type PropsHanger = {
  type: "filled" | "half" | "empty";
};

function Hanger({ type = "filled" }: PropsHanger) {
  const hangerStyle = {
    filled: filledHangerSVG,
    half: HalfFilledHangerSVG,
    empty: EmptyHangerSVG,
  };

  return <img src={hangerStyle[type]} />;
}

type PropsRating = {
  averageRating: number;
};

export function HangerRating({ averageRating = 4.67 }: PropsRating) {
  function roundHalf(num: number) {
    return Math.round(num * 2) / 2;
  }

  let rounded = roundHalf(averageRating);

  switch (rounded) {
    case 0: {
      break;
    }
    case 1: {
      break;
    }
    case 2: {
      break;
    }
    case 3: {
      break;
    }
    case 4: {
      break;
    }
    case 5: {
      break;
    }
    default: {
      break;
    }
  }

  const items: Array<PropsHanger> = [
    { type: "filled" },
    { type: "filled" },
    { type: "filled" },
    { type: "half" },
    { type: "empty" },
  ];

  return (
    <div className="flex">
      {items.map((item, index) => (
        <p key={index}>
          <Hanger type={item.type} />
        </p>
      ))}
    </div>
  );
}
