import React, {FC, memo, useCallback, useEffect, useState} from "react";
import { IField, IStep, IStepField } from "./StepperForm.interfaces";
import { ProductIds } from "../../interfaces/productsIdsInterface";
import { PRODUCT_IDS_TO_NAMES } from "../../constants/productIdsConstants";

export interface StepperFormProps {
  productId: ProductIds;
  steps: IStep[];
}

const _ERROR_MESSAGE = 'This field is required';

const StepperForm: FC<StepperFormProps> = ({ productId, steps }) => {
  const initData: IStepField[] = [];
  steps.forEach(step => {
    if(!step.isSummary) initData.push({
      id: step.id,
      name: step.name,
      value: '',
      isRequired: step.isRequired || false,
      isSummary: step.isSummary || false
    })
  });

  const [currentStep, setStep] = useState(0);
  const [collectedData, setCollectedData] = useState<IStepField[]>(initData);
  const [errorMessage, setSetErrorMessage] = useState<string>('');

  useEffect(() => setSetErrorMessage(''), [currentStep]);

  const handleChange = (value: string | number) => {
    setSetErrorMessage('');
    setCollectedData((prevState) =>
      prevState.map((item) =>
        item.id === collectedData[currentStep].id
          ? { ...item, value: value }
          : item
      )
    );
  };

  const handlePrevStep = useCallback(() => {
    if (currentStep > 0) setStep(currentStep - 1);
  }, [currentStep]);

  const isLastStep = useCallback((): boolean => {
    return currentStep >= steps.length;
  }, [currentStep, steps.length]);

  const hasRequiredError = useCallback((fieldData: IStepField) => {
    const isRequireError = !fieldData.value?.toString().length && fieldData.isRequired;
    isRequireError ? setSetErrorMessage(_ERROR_MESSAGE) : setSetErrorMessage('');
    return isRequireError;
  }, []);

  const handleNextStep = useCallback(() => {
    const stepData: IStepField = collectedData[currentStep];
    if(hasRequiredError(stepData)) return;
    if (!isLastStep()) setStep(currentStep + 1);
  }, [currentStep, isLastStep, collectedData, hasRequiredError]);

  const handleSubmit = () => {
    const convertedData: IField = {};
    collectedData.forEach(item => {
      if(!item.isSummary) convertedData[item.id] = item.value;
    });

    console.log("Data has been successfully sent to nowhere: ", convertedData);
  };

  return (
    <div>
      {`Step: ${currentStep + 1}/${steps.length}`}
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {steps[currentStep].children?.({
        onChange: handleChange,
        onNextStep: handleNextStep,
        onPrevStep: handlePrevStep,
        onSubmit: handleSubmit,
        value: collectedData[currentStep]?.value,
        errorMessage: errorMessage,
        isRequired: collectedData[currentStep]?.isRequired,
        collectedData: collectedData
      })}
    </div>
  );
};

export default memo(StepperForm);
