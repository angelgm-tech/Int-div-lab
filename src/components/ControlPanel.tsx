import React from 'react';
import { Settings } from 'lucide-react';
import { DivControls } from './DivControls';

interface ControlPanelProps {
  styles: Record<string, string>;
  onStyleChange: (property: string, value: string) => void;
  onPresetSelect: (preset: string) => void;
}

export function ControlPanel({ styles, onStyleChange, onPresetSelect }: ControlPanelProps) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#00fff2]">
      <h2 className="text-xl mb-4 flex items-center gap-2">
        <Settings className="w-5 h-5" />
        Controls
      </h2>
      <DivControls 
        styles={styles}
        onStyleChange={onStyleChange}
        onPresetSelect={onPresetSelect}
      />
    </div>
  );
}