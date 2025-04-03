import React from 'react';
import { Button } from "@trussworks/react-uswds";

const ActionButtons = ({ 
  primaryAction, 
  primaryLabel, 
  secondaryAction, 
  secondaryLabel, 
  align = "end" 
}) => {
  return (
    <div className={`display-flex flex-justify-${align} margin-top-6`}>
      {secondaryAction && (
        <Button 
          outline 
          type="button" 
          className="margin-right-2" 
          onClick={secondaryAction}
        >
          {secondaryLabel}
        </Button>
      )}
      <Button type="button" onClick={primaryAction}>
        {primaryLabel}
      </Button>
    </div>
  );
};

export default ActionButtons; 