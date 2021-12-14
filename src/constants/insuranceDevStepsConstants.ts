import { IStep } from "../components/StepperForm/StepperForm.interfaces";
import { AgeStep, EmailStep, SummaryStep } from "../components/StepperForm/components/formSteps";

export const insuranceDevSteps: IStep[] = [
  { id: "email", name: "Email", children: EmailStep },
  { id: "age", name: "Age", children: AgeStep },
  { id: "summary", name: "Summary", children: SummaryStep }
];
