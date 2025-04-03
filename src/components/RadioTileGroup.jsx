import React from 'react';
import { Radio } from "@trussworks/react-uswds";

const RadioTileGroup = ({ options, selectedValue, onChange }) => {
  return (
    <form>
      {options.map((option) => (
        <div key={option.id} className="usa-radio usa-radio--tile margin-bottom-3">
          <Radio
            id={option.id}
            name="optionType"
            value={option.value}
            label={option.label}
            onChange={onChange}
            checked={selectedValue === option.value}
            tile
          />
          <p className="margin-left-4 margin-top-05 font-sans-2xs text-base-dark margin-bottom-0">
            {option.description}
          </p>
        </div>
      ))}
    </form>
  );
};

export default RadioTileGroup; 