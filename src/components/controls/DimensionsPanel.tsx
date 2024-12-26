import React from 'react';

interface DimensionsPanelProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
}

export function DimensionsPanel({ styles, onStyleChange }: DimensionsPanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Width</label>
        <div className="flex gap-2">
          <input
            type="range"
            min="100"
            max="1000"
            value={parseInt(styles.width)}
            onChange={(e) => onStyleChange('width', `${e.target.value}px`)}
            className="flex-1"
          />
          <input
            type="number"
            value={parseInt(styles.width)}
            onChange={(e) => onStyleChange('width', `${e.target.value}px`)}
            className="w-20 bg-[#2a2a2a] rounded px-2 py-1"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Height</label>
        <div className="flex gap-2">
          <input
            type="range"
            min="50"
            max="800"
            value={parseInt(styles.height)}
            onChange={(e) => onStyleChange('height', `${e.target.value}px`)}
            className="flex-1"
          />
          <input
            type="number"
            value={parseInt(styles.height)}
            onChange={(e) => onStyleChange('height', `${e.target.value}px`)}
            className="w-20 bg-[#2a2a2a] rounded px-2 py-1"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Padding</label>
        <input
          type="range"
          min="0"
          max="50"
          value={parseInt(styles.padding || '0')}
          onChange={(e) => onStyleChange('padding', `${e.target.value}px`)}
          className="w-full"
        />
      </div>
    </div>
  );
}