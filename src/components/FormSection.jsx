import React from 'react';

const FormSection = ({ title, children, style }) => {
  return (
    <>
      {title && <h3 className="font-heading-lg margin-y-3">{title}</h3>}
      <div style={style}>
        {children}
      </div>
    </>
  );
};

export default FormSection; 