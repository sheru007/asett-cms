import React from 'react';
import { Alert } from "@trussworks/react-uswds";

const ErrorSummary = ({ errors, show }) => {
  if (!show || Object.keys(errors).length === 0) return null;
  
  return (
    <div className="padding-2">
      <Alert type="error" heading="Form Errors" slim>
        <p>Please correct the following errors before proceeding:</p>
        <ul className="usa-list margin-y-1">
          {Object.values(errors).map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </Alert>
    </div>
  );
};

export default ErrorSummary; 