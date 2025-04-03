import React from 'react';
import { Radio } from "@trussworks/react-uswds";

const AnonymousSection = ({ 
  isAnonymous, 
  onChange, 
  error, 
  showError, 
  labelStyle, 
  radioContainerStyle, 
  radioStyle, 
  errorStyle, 
  requiredMarker, 
  formSectionStyle 
}) => {
  return (
    <div style={formSectionStyle}>
      <div className="display-flex flex-row margin-bottom-2">
        <div className="flex-6">
          <label htmlFor="anonymous" style={labelStyle}>
            Do you want to remain anonymous during this process?
            <span style={requiredMarker}>*</span>
          </label>
        </div>
        <div className="flex-6">
          <div style={radioContainerStyle}>
            <div style={{ display: 'flex', alignItems: 'center', ...radioStyle }}>
              <Radio
                id="anonymous-yes"
                name="anonymous"
                value="yes"
                label="Yes"
                onChange={() => onChange(true)}
                checked={isAnonymous === true}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Radio
                id="anonymous-no"
                name="anonymous"
                value="no"
                label="No"
                onChange={() => onChange(false)}
                checked={isAnonymous === false}
              />
            </div>
          </div>
          {error && showError && <div style={errorStyle}>{error}</div>}
        </div>
      </div>

      {isAnonymous && (
        <div className="margin-top-2">
          <div className="bg-accent-cool-lighter padding-2 border-left-05 border-accent-cool">
            <p className="font-sans-sm margin-y-0">
              <strong>Disclaimer:</strong> If you select yes, CMS will not share your information with the Filed Against 
              Entity (FAE) during the investigation process. However, information provided 
              in this complaint is subject to rules and policies under the Freedom of 
              Information Act (FOIA).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnonymousSection; 