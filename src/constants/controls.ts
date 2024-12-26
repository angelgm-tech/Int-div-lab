import { Sliders, Palette, Box, Move, Droplets } from 'lucide-react';

export const TABS = [
  { id: 'dimensions', icon: Sliders, label: 'Size' },
  { id: 'appearance', icon: Palette, label: 'Style' },
  { id: 'transform', icon: Move, label: 'Transform' },
  { id: 'effects', icon: Droplets, label: 'Effects' },
  { id: 'presets', icon: Box, label: 'Presets' }
] as const;

export const BACKDROP_FILTERS = [
  { value: 'none', label: 'None' },
  { value: 'blur(5px)', label: 'Blur' },
  { value: 'brightness(150%)', label: 'Bright' },
  { value: 'contrast(200%)', label: 'High Contrast' },
  { value: 'grayscale(100%)', label: 'Grayscale' },
  { value: 'hue-rotate(90deg)', label: 'Hue Rotate' }
] as const;

export const BORDER_STYLES = [
  { value: 'none', label: 'None' },
  { value: 'solid', label: 'Solid' },
  { value: 'dashed', label: 'Dashed' },
  { value: 'dotted', label: 'Dotted' },
  { value: 'double', label: 'Double' }
] as const;