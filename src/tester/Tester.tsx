import { BreadcrumbsDisplay } from "./displays/BreadcrumbsDisplay";
import { ButtonDisplay } from "./displays/ButtonDisplay";
import { CardDisplay } from "./displays/card-display/CardDisplay";
import { CheckboxDisplay } from "./displays/CheckboxDisplay";
import { HangerRatingDisplay } from "./displays/HangerRatingDisplay";
import { InputDisplay } from "./displays/InputDisplay";
import { SearchbarDisplay } from "./displays/SearchbarDisplay";
import { StockIndicatorDisplay } from "./displays/StockIndicatorDisplay";

export default function Tester() {
  let items: Array<JSX.Element> = [
    <ButtonDisplay />,
    <InputDisplay />,
    <BreadcrumbsDisplay />,
    <CheckboxDisplay />,
    <HangerRatingDisplay />,
    <StockIndicatorDisplay />,
    <CardDisplay />,
    <SearchbarDisplay />,
  ];

  const Seperator = () => {
    return (
      <p className="text-3xl mt-5">
        __________________________________________________________________________
      </p>
    );
  };
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="p-2">
          {item}
          <Seperator />
        </div>
      ))}
    </>
  );
}
