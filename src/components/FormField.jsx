import React from 'react';
import { 
  TextInput, 
  Select 
} from "@trussworks/react-uswds";

const FormField = ({ 
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  options = [],
  required = false,
  placeholder = "",
  pattern = "",
  additionalProps = {},
  labelStyle,
  requiredMarker
}) => {
  
  const renderInput = () => {
    switch(type) {
      case 'select':
        return (
          <Select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="width-full"
            {...additionalProps}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      
      case 'tel':
      case 'email':
      case 'text':
      default:
        return (
          <TextInput
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            pattern={pattern}
            placeholder={placeholder}
            className="width-full"
            {...additionalProps}
          />
        );
    }
  };
  
  return (
    <div className="flex-6">
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span style={requiredMarker}>*</span>}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormField; 