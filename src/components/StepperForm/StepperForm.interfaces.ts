import { FC } from "react";

export interface IField {
  [name: string]: string | number | null;
}

export interface IStep {
  id: string;
  name: string;
  isRequired?: boolean;
  isSummary?: boolean;
  children: FC<IStepProps>;
}

export interface IStepField {
  id: string;
  name: string;
  value: string | number | null;
  isRequired?: boolean;
  isSummary?: boolean;
}

export interface IStepProps {
  onChange: (value: string | number) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: (collectedData: any) => void;
  errorMessage: string;
  isRequired?: boolean;
  value: string | number | null;
  collectedData: IStepField[];
}