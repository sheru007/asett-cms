import React from 'react';
import { Grid } from "@trussworks/react-uswds";

const FormApproval = ({ approvalNumber }) => {
  return (
    <Grid row>
      <Grid col={12} className="text-right">
        <p className="font-sans-3xs text-base-dark">Form Approved OMB No. {approvalNumber}</p>
      </Grid>
    </Grid>
  );
};

export default FormApproval; 