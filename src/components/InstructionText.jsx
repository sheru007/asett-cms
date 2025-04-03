import React from 'react';
import { Link } from "@trussworks/react-uswds";

const InstructionText = ({ introText, extraInfo, links = [] }) => {
  return (
    <>
      <p className="margin-bottom-5">
        {introText}
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {' '}
            <Link href={link.url}>{link.text}</Link>
            {' '}
          </React.Fragment>
        ))}
      </p>
      
      <div className="margin-top-6 margin-bottom-6">
        {extraInfo.map((text, index) => (
          <p key={index} className={index < extraInfo.length - 1 ? "margin-bottom-3" : ""}>
            {text}
          </p>
        ))}
      </div>
    </>
  );
};

export default InstructionText; 