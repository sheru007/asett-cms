import React from 'react';
import FormField from './FormField';

const FormFieldGroup = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  options = [],
  required = false,
  error = null,
  showError = false,
  placeholder = "",
  pattern = "",
  additionalProps = {},
  groupStyle,
  labelStyle,
  errorStyle,
  requiredMarker
}) => {
  return (
    <div style={required ? groupStyle.required : groupStyle.default}>
      <div className="flex-6">
        <label htmlFor={id} style={labelStyle}>
          {label}
          {required && <span style={requiredMarker}>*</span>}
        </label>
      </div>
      <div className="flex-6">
        <FormField
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          options={options}
          error={error}
          showError={showError}
          placeholder={placeholder}
          pattern={pattern}
          additionalProps={additionalProps}
          labelStyle={{ display: 'none' }}
        />
        {error && showError && <div style={errorStyle}>{error}</div>}
      </div>
    </div>
  );
};

export default FormFieldGroup; 