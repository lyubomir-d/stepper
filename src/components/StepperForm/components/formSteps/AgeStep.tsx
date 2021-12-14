import React, { FC } from "react";
import { IStepProps } from "../../StepperForm.interfaces";

const AgeStep: FC<IStepProps> = ({
  value,
  onChange,
  onPrevStep,
  onNextStep
}) => {
  return (
    <>
      <div>
        Age:{" "}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            onChange(value);
          }}
          value={value || ""}
        />
      </div>
      <button onClick={onPrevStep}>Prev</button>
      <button onClick={onNextStep}>Next</button>
    </>
  );
};

export default AgeStep;
