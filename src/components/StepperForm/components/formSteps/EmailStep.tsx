import React, { FC } from "react";
import { IStepProps } from "../../StepperForm.interfaces";

const EmailStep: FC<IStepProps> = ({ value, onChange, onNextStep, errorMessage }) => {
  return (
    <>
      <div>
        Email:{" "}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            onChange(value);
          }}
          value={value || ""}
        />
        <br/>
        <small style={{color: 'tomato'}}>{ errorMessage }</small>
      </div>
      <button onClick={onNextStep}>Next</button>
    </>
  );
};

export default EmailStep;
