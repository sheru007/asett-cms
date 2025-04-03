import React from 'react';
import { Link } from "@trussworks/react-uswds";

const FormStepsIndicator = ({ steps, currentStep = 0 }) => {
  return (
    <div className="usa-step-indicator usa-step-indicator--counters-sm display-flex flex-justify-center" aria-label="Form progress">
      <ol className="usa-step-indicator__segments">
        {steps.map((step, index) => (
          <li 
            key={index} 
            className={`usa-step-indicator__segment ${index === currentStep ? 'usa-step-indicator__segment--current' : ''}`}
          >
            <span className="usa-step-indicator__segment-label">
              {step.label} 
              {index === currentStep && <span className="usa-sr-only">current step</span>}
              {index !== currentStep && <span className="usa-sr-only">not completed</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FormStepsIndicator; 