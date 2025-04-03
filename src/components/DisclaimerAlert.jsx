import React from 'react';
import { Grid, Alert } from "@trussworks/react-uswds";

const DisclaimerAlert = ({ message, type = "warning" }) => {
  return (
    <Grid row gap className="margin-bottom-1">
      <Grid col={12}>
        <Alert type={type} slim headingLevel="h4">
          <strong>Disclaimer:</strong> {message}
        </Alert>
      </Grid>
    </Grid>
  );
};

export default DisclaimerAlert; 