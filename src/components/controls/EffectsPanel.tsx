import React from 'react';

interface EffectsPanelProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
}

export function EffectsPanel({ styles, onStyleChange }: EffectsPanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Box Shadow</label>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs">Offset X</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={parseInt(styles.boxShadowX || '0')}
                onChange={(e) => onStyleChange('boxShadowX', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs">Offset Y</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={parseInt(styles.boxShadowY || '0')}
                onChange={(e) => onStyleChange('boxShadowY', e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-xs">Blur</label>
            <input
              type="range"
              min="0"
              max="100"
              value={parseInt(styles.boxShadowBlur || '0')}
              onChange={(e) => onStyleChange('boxShadowBlur', e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Opacity</label>
        <input
          type="range"
          min="0"
          max="100"
          value={parseInt((parseFloat(styles.opacity || '1') * 100).toString())}
          onChange={(e) => onStyleChange('opacity', (parseInt(e.target.value) / 100).toString())}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Backdrop Filter</label>
        <select
          value={styles.backdropFilter || 'none'}
          onChange={(e) => onStyleChange('backdropFilter', e.target.value)}
          className="w-full bg-[#2a2a2a] rounded px-2 py-1"
        >
          <option value="none">None</option>
          <option value="blur(5px)">Blur</option>
          <option value="brightness(150%)">Bright</option>
          <option value="contrast(200%)">High Contrast</option>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="hue-rotate(90deg)">Hue Rotate</option>
        </select>
      </div>
    </div>
  );
}