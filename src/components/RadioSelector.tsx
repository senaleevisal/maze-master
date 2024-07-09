import React from 'react';

type RadioSelectorProps = {
    options: any[];
    selectedOption: any;
    onOptionChange: (option: any) => void;
    className?: string|"";
};

const RadioSelector: React.FC<RadioSelectorProps> = ({
    options,
    selectedOption,
    onOptionChange,
    className,
}) => {
    return (
        <>
            {options.map((option) => (
                <div className={`flex items-center gap-x-3 ${className}`} key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => onOptionChange(option)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label className="block text-sm font-medium leading-6 text-gray-300">
                        {option}
                    </label>
                </div>
            ))}
        </>
    );
};

export default RadioSelector;