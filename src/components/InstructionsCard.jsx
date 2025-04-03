import React from 'react';
import { Card, CardBody } from "@trussworks/react-uswds";
import FormStepsIndicator from './FormStepsIndicator';
import InstructionText from './InstructionText';
import ActionButtons from './ActionButtons';

const InstructionsCard = ({ 
  steps, 
  currentStep,
  introText,
  extraInfo,
  links,
  primaryAction,
  primaryLabel,
  secondaryAction,
  secondaryLabel
}) => {
  return (
    <Card>
      <CardBody className="padding-y-4 padding-x-3">
        <InstructionText 
          introText={introText}
          extraInfo={extraInfo}
          links={links}
        />
        
        <FormStepsIndicator 
          steps={steps} 
          currentStep={currentStep} 
        />
        
        <ActionButtons 
          primaryAction={primaryAction}
          primaryLabel={primaryLabel}
          secondaryAction={secondaryAction}
          secondaryLabel={secondaryLabel}
        />
      </CardBody>
    </Card>
  );
};

export default InstructionsCard; 