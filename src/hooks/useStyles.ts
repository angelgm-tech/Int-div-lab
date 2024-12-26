import { useState } from 'react';
import { presets } from '../utils/presets';

export function useStyles() {
  const [divStyles, setDivStyles] = useState({
    width: '400px',
    height: '200px',
    backgroundColor: '#1a1a1a',
    borderRadius: '0px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00fff2',
    transform: 'none'
  });

  const handleStyleChange = (property: string, value: string) => {
    setDivStyles(prev => ({
      ...prev,
      [property]: value
    }));
  };

  const handleBulkStyleChange = (newStyles: Record<string, string>) => {
    setDivStyles(newStyles);
  };

  const applyPreset = (preset: keyof typeof presets) => {
    setDivStyles(presets[preset]);
  };

  return { 
    divStyles, 
    handleStyleChange, 
    handleBulkStyleChange,
    applyPreset 
  };
}