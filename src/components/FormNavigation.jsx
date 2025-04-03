import React from 'react';
import { Grid, Button } from "@trussworks/react-uswds";

const FormNavigation = ({ 
  backAction, 
  backLabel, 
  nextAction, 
  nextLabel,
  cancelAction,
  disableNext = false 
}) => {
  return (
    <Grid row className="margin-top-3 width-full">
      <Grid col={12} className="display-flex flex-justify margin-bottom-2">
        {backAction && (
          <Button 
            type="button" 
            outline 
            className="margin-right-2" 
            onClick={backAction}
          >
            <span className="usa-button__text">&lt; {backLabel}</span>
          </Button>
        )}
        
        <Button 
          type="button" 
          outline 
          secondary 
          className="margin-right-2" 
          onClick={cancelAction}
        >
          <span className="usa-button__text">Cancel</span>
        </Button>
        
        <Button 
          type="button" 
          disabled={disableNext} 
          onClick={nextAction}
        >
          <span className="usa-button__text">{nextLabel}</span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormNavigation; 