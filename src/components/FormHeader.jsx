import React from 'react';
import { Grid } from "@trussworks/react-uswds";

const FormHeader = ({ title, subtitle }) => {
  return (
    <h3 
      className="font-heading-lg margin-top-0 margin-bottom-1" 
      style={{display:'flex', alignItems:'center', justifyContent:'center'}}
    >
      {title}
      {subtitle && (
        <div className="margin-left-2" style={{fontWeight:'normal'}}>
          {subtitle}
        </div>
      )}
    </h3>
  );
};

export default FormHeader; 