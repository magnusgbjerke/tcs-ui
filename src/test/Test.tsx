import { BreadcrumbsDisplay } from "./displays/BreadcrumbsDisplay";
import { ButtonDisplay } from "./displays/ButtonDisplay";
import { CheckboxDisplay } from "./displays/CheckboxDisplay";
import { HangerRatingDisplay } from "./displays/HangerRatingDisplay";
import { InputDisplay } from "./displays/InputDisplay";

function Test() {
  const Seperator = () => {
    return (
      <p className="text-3xl mt-5 mb-5">
        __________________________________________________________________________
      </p>
    );
  };
  return (
    <>
      <ButtonDisplay />
      <Seperator />
      <InputDisplay />
      <Seperator />
      <BreadcrumbsDisplay />
      <Seperator />
      <CheckboxDisplay />
      <Seperator />
      <HangerRatingDisplay />
      <Seperator />
    </>
  );
}

export default Test;
