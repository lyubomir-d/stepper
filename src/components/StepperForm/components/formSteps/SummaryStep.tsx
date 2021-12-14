import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IStepProps } from "../../StepperForm.interfaces";

const SummaryStep: FC<IStepProps> = ({
  onPrevStep,
  onSubmit,
  collectedData
}) => {
  return (
    <>
      {collectedData?.map((item) => (
        <div key={item.id}>
          {item.name}: {item.value}
        </div>
      ))}
      <button onClick={onPrevStep}>Prev</button>
      <button onClick={onSubmit}>Submit</button>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  );
};

export default SummaryStep;
