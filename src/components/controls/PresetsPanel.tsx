import React from 'react';

interface PresetGroup {
  title: string;
  presets: Array<{
    id: string;
    label: string;
  }>;
}

interface PresetsPanelProps {
  onPresetSelect: (preset: string) => void;
}

export function PresetsPanel({ onPresetSelect }: PresetsPanelProps) {
  const presetGroups: PresetGroup[] = [
    {
      title: "Base Styles",
      presets: [
        { id: 'card', label: 'Card' },
        { id: 'modal', label: 'Modal' },
        { id: 'banner', label: 'Banner' },
        { id: 'paperCard', label: 'Paper Card' },
        { id: 'techMinimalist', label: 'Tech Minimalist' },
      ]
    },
    {
      title: "Glass Effects",
      presets: [
        { id: 'glassmorphic', label: 'Glassmorphic' },
        { id: 'frostedGlass', label: 'Frosted Glass' },
        { id: 'crystalPrism', label: 'Crystal Prism' },
      ]
    },
    {
      title: "Futuristic",
      presets: [
        { id: 'cyberpunk', label: 'Cyberpunk' },
        { id: 'neonPulse', label: 'Neon Pulse' },
        { id: 'retroWave', label: 'Retro Wave' },
      ]
    },
    {
      title: "Nature Inspired",
      presets: [
        { id: 'organicShape', label: 'Organic Shape' },
        { id: 'deepOcean', label: 'Deep Ocean' },
      ]
    },
    {
      title: "Modern",
      presets: [
        { id: 'mintMinimal', label: 'Mint Minimal' },
        { id: 'neumorphic', label: 'Neumorphic' },
        { id: 'industrialMetal', label: 'Industrial Metal' },
      ]
    },
    {
      title: "Decorative",
      presets: [
        { id: 'cosmicPortal', label: 'Cosmic Portal' },
        { id: 'sunsetGradient', label: 'Sunset Gradient' },
        { id: 'liquid', label: 'Liquid' },
      ]
    }
  ];

  return (
    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
      {presetGroups.map((group) => (
        <div key={group.title} className="space-y-2">
          <h3 className="text-sm font-semibold text-[#00fff2] mb-2">
            {group.title}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {group.presets.map(preset => (
              <button
                key={preset.id}
                onClick={() => onPresetSelect(preset.id)}
                className="px-3 py-2 bg-[#1a1a1a] border border-[#00fff2] rounded 
                          hover:bg-[#2a2a2a] transition-colors text-sm"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}