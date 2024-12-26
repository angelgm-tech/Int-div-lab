import React, { useState } from 'react';
import { TABS } from '../constants/controls';
import { DimensionsPanel } from './controls/DimensionsPanel';
import { AppearancePanel } from './controls/AppearancePanel';
import { TransformPanel } from './controls/TransformPanel';
import { EffectsPanel } from './controls/EffectsPanel';
import { PresetsPanel } from './controls/PresetsPanel';

interface DivControlsProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
  onPresetSelect: (preset: string) => void;
}

export function DivControls({ styles, onStyleChange, onPresetSelect }: DivControlsProps) {
  const [activeTab, setActiveTab] = useState('dimensions');

  const renderPanel = () => {
    switch (activeTab) {
      case 'dimensions':
        return <DimensionsPanel styles={styles} onStyleChange={onStyleChange} />;
      case 'appearance':
        return <AppearancePanel styles={styles} onStyleChange={onStyleChange} />;
      case 'transform':
        return <TransformPanel styles={styles} onStyleChange={onStyleChange} />;
      case 'effects':
        return <EffectsPanel styles={styles} onStyleChange={onStyleChange} />;
      case 'presets':
        return <PresetsPanel onPresetSelect={onPresetSelect} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {TABS.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-3 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === id 
                ? 'bg-[#00fff2] text-black' 
                : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
      {renderPanel()}
    </div>
  );
}