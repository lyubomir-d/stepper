import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StepperForm, { StepperFormProps } from './StepperForm';
import {AgeStep, EmailStep, SummaryStep} from "./components/formSteps";
import {ProductIds} from "../../interfaces/productsIdsInterface";

const mockSteps = [
    { id: "email", name: "Email", isRequired: true, children: EmailStep },
    { id: "age", name: "Age", children: AgeStep },
    { id: "summary", name: "Summary", isSummary: true, children: SummaryStep }
];

const renderComponent = (props: StepperFormProps) => {
    return render(
       <StepperForm productId={ProductIds.devIns} steps={mockSteps} />
    );
};

describe('StepperForm', () => {
    it('Render without errors', () => {
        renderComponent({productId: ProductIds.devIns, steps: mockSteps});
        expect(screen.getByText(/Buying Developer Insurance/i)).toBeInTheDocument();
    });

    describe('props checking', () => {
        it('next step', () => {
            renderComponent({productId: ProductIds.devIns, steps: mockSteps});
            const input = screen.getByRole('textbox');
            const nextBtn = screen.getByText('Next');
            fireEvent.change(input, {target: {value: 'email@email.com'}});
            fireEvent.click(nextBtn);
            expect(screen.getByText(/Age:/i)).toBeInTheDocument();
        });

        it('prev step', () => {
            renderComponent({productId: ProductIds.devIns, steps: mockSteps});
            const input = screen.getByRole('textbox');
            const nextBtn = screen.getByText('Next');
            fireEvent.change(input, {target: {value: 'email@email.com'}});
            fireEvent.click(nextBtn);
            expect(screen.getByText(/Age:/i)).toBeInTheDocument();

            const prevBtn = screen.getByText('Prev');
            fireEvent.click(prevBtn);
            expect(screen.getByText(/Email:/i)).toBeInTheDocument();
        });

        it('Check require field', () => {
            renderComponent({productId: ProductIds.devIns, steps: mockSteps});
            const input = screen.getByRole('textbox');
            const button = screen.getByText('Next');
            fireEvent.change(input, {target: {value: ''}});
            fireEvent.click(button);
            expect(screen.getByText(/This field is required/i) && screen.getByText(/Email:/i)).toBeInTheDocument();
        });
    });
});
