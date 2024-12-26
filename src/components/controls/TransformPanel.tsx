import React from 'react';

interface TransformPanelProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
}

export function TransformPanel({ styles, onStyleChange }: TransformPanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Rotate</label>
        <input
          type="range"
          min="-180"
          max="180"
          value={parseInt(styles.rotate || '0')}
          onChange={(e) => onStyleChange('rotate', e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Scale</label>
        <input
          type="range"
          min="50"
          max="150"
          value={parseInt(styles.scale || '100')}
          onChange={(e) => onStyleChange('scale', e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Skew X</label>
        <input
          type="range"
          min="-45"
          max="45"
          value={parseInt(styles.skewX || '0')}
          onChange={(e) => onStyleChange('skewX', e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Skew Y</label>
        <input
          type="range"
          min="-45"
          max="45"
          value={parseInt(styles.skewY || '0')}
          onChange={(e) => onStyleChange('skewY', e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
}