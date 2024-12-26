import React from 'react';

interface RangeInputProps {
  label: string;
  value: number;
  onChange: (value: string) => void;
  min: number;
  max: number;
  step?: number;
  withNumber?: boolean;
}

export function RangeInput({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1,
  withNumber = false 
}: RangeInputProps) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={withNumber ? "flex-1" : "w-full"}
        />
        {withNumber && (
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-20 bg-[#2a2a2a] rounded px-2 py-1"
            min={min}
            max={max}
            step={step}
          />
        )}
      </div>
    </div>
  );
}