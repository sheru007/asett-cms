import React from 'react';
import { Grid } from "@trussworks/react-uswds";

const PageHeader = ({ title }) => {
  return (
    <Grid row>
      <Grid col={12}>
        <h2 className="usa-heading margin-bottom-3">{title}</h2>
        <hr className="usa-divider margin-bottom-3" />
      </Grid>
    </Grid>
  );
};

export default PageHeader; 