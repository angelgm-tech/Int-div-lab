import React from 'react';

interface AppearancePanelProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
}

export function AppearancePanel({ styles, onStyleChange }: AppearancePanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Background Color</label>
        <div className="flex gap-2">
          <input
            type="color"
            value={styles.backgroundColor}
            onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
            className="w-10 h-10 bg-transparent rounded"
          />
          <input
            type="text"
            value={styles.backgroundColor}
            onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
            className="flex-1 bg-[#2a2a2a] rounded px-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Border Radius</label>
        <div className="grid grid-cols-2 gap-2">
          {['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'].map((corner) => (
            <div key={corner}>
              <label className="text-xs">{corner.replace(/([A-Z])/g, ' $1').trim()}</label>
              <input
                type="range"
                min="0"
                max="50"
                value={parseInt(styles[`border${corner}Radius`] || '0')}
                onChange={(e) => onStyleChange(`border${corner}Radius`, `${e.target.value}px`)}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Border</label>
        <div className="grid grid-cols-2 gap-2">
          <select
            value={styles.borderStyle}
            onChange={(e) => onStyleChange('borderStyle', e.target.value)}
            className="bg-[#2a2a2a] rounded px-2 py-1"
          >
            <option value="none">None</option>
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
          </select>
          <input
            type="number"
            value={parseInt(styles.borderWidth || '0')}
            onChange={(e) => onStyleChange('borderWidth', `${e.target.value}px`)}
            className="bg-[#2a2a2a] rounded px-2 py-1"
            min="0"
            max="20"
          />
          <input
            type="color"
            value={styles.borderColor}
            onChange={(e) => onStyleChange('borderColor', e.target.value)}
            className="col-span-2 w-full h-8 bg-transparent rounded"
          />
        </div>
      </div>
    </div>
  );
}