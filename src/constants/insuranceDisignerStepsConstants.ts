import { IStep } from "../components/StepperForm/StepperForm.interfaces";
import { AgeStep, EmailStep, NameStep, SummaryStep } from "../components/StepperForm/components/formSteps";

export const insuranceDesignerSteps: IStep[] = [
  { id: "email", name: "Email", isRequired: true, children: EmailStep },
  { id: "name", name: "Name", isRequired: true, children: NameStep },
  { id: "age", name: "Age", children: AgeStep },
  { id: "summary", name: "Summary", isSummary: true, children: SummaryStep }
];
