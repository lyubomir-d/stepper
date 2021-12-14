import React, { FC } from "react";
import { IStepProps } from "../../StepperForm.interfaces";

const NameStep: FC<IStepProps> = ({
    value,
    onChange,
    onPrevStep,
    onNextStep,
    errorMessage
}) => {
  return (
    <>
      <div>
        Name:{" "}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            onChange(value);
          }}
          value={value || ""}
        />
      </div>
      <small style={{color: 'tomato'}}>{errorMessage}</small>
      <div>
        <button onClick={onPrevStep}>Prev</button>
        <button onClick={onNextStep}>Next</button>
      </div>
    </>
  );
};

export default NameStep;
