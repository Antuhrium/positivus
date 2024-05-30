import React from 'react';

const RadioButton = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="flex space-x-[35px]">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <span className={`w-[28px] h-[28px] rounded-full border flex items-center justify-center border-black`}>
            {selectedValue === option.value && <span className="w-[16px] h-[16px] bg-green rounded-full"></span>}
          </span>
          <span className="ml-2 text-sm sm:text-base">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
