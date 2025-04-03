import React from 'react';

const FormContainer = ({ 
  headerContent, 
  children, 
  containerStyle, 
  headerStyle, 
  bodyStyle 
}) => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        {headerContent}
      </div>
      <div style={bodyStyle}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer; 