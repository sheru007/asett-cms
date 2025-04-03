import React from 'react';
import { Grid } from "@trussworks/react-uswds";
import PropTypes from 'prop-types';

const steps = [
  "Complaint Type",
  "Complainant Details",
  "FAE Details",
  "Complaint Details",
  "Review Complaint",
  "Submitted"
];

function StepIndicator({ currentStep, counters = false }) {
  const stepperClassName = counters 
    ? "usa-step-indicator usa-step-indicator--counters" 
    : "usa-step-indicator usa-step-indicator--counters-sm";

  return (
    <Grid row>
      <Grid col={12}>
        <div className={stepperClassName} aria-label="Form progress">
          {counters ? (
            <div className="usa-step-indicator__segments">
              {steps.map((step, index) => {
                let segmentClass = "usa-step-indicator__segment";
                let srText = "not completed";
                
                if (index + 1 === currentStep) {
                  segmentClass += " usa-step-indicator__segment--current";
                  srText = "current step";
                } else if (index + 1 < currentStep) {
                  segmentClass += " usa-step-indicator__segment--complete";
                  srText = "completed";
                }
                
                return (
                  <div key={index} className={segmentClass}>
                    <span className="usa-step-indicator__segment-label">
                      {step} <span className="usa-sr-only">{srText}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <ol className="usa-step-indicator__segments">
              {steps.map((step, index) => {
                let segmentClass = "usa-step-indicator__segment";
                let srText = "not completed";
                
                if (index + 1 === currentStep) {
                  segmentClass += " usa-step-indicator__segment--current";
                  srText = "current step";
                } else if (index + 1 < currentStep) {
                  segmentClass += " usa-step-indicator__segment--complete";
                  srText = "completed";
                }
                
                return (
                  <li key={index} className={segmentClass}>
                    <span className="usa-step-indicator__segment-label">
                      {step} <span className="usa-sr-only">{srText}</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  counters: PropTypes.bool
};

export default StepIndicator; 