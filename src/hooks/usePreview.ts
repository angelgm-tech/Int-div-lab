import { useState } from 'react';
import { presets } from '../utils/presets';

interface PreviewState {
  styles: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
}

export function usePreview() {
  const [previewState, setPreviewState] = useState<PreviewState>({
    styles: {
      width: '400px',
      height: '200px',
      backgroundColor: '#1a1a1a',
      borderRadius: '0px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#00fff2',
      padding: '0px',
      // Transform components
      rotate: '0',
      scale: '100',
      skewX: '0',
      skewY: '0',
      // Shadow components
      boxShadowX: '0',
      boxShadowY: '0',
      boxShadowBlur: '0',
      // Effects
      opacity: '1',
      backdropFilter: 'none'
    },
    content: {
      title: 'Interactive Div',
      description: 'Modify the properties using the controls'
    }
  });

  const handleStyleChange = (property: string, value: string) => {
    setPreviewState(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        [property]: value
      }
    }));
  };

  const handleContentChange = (newContent: typeof previewState.content) => {
    setPreviewState(prev => ({
      ...prev,
      content: newContent
    }));
  };

  const handleCodeUpdate = (code: string) => {
    try {
      const styleMatch = code.match(/style=\{\{([\s\S]*?)\}\}/);
      const contentMatch = code.match(/<h3[^>]*>(.*?)<\/h3>.*?<p[^>]*>(.*?)<\/p>/s);

      if (!styleMatch) throw new Error('No style object found');

      const styleString = styleMatch[1];
      const styleObj = {};
      
      styleString.split(',').forEach(line => {
        const [key, value] = line.split(':').map(s => s.trim());
        if (key && value) {
          styleObj[key] = value.replace(/['"]/g, '');
        }
      });

      setPreviewState(prev => ({
        styles: {
          ...prev.styles,
          ...styleObj
        },
        content: contentMatch ? {
          title: contentMatch[1].trim(),
          description: contentMatch[2].trim()
        } : prev.content
      }));

      return null;
    } catch (err) {
      return 'Invalid code format. Please check your syntax.';
    }
  };

  const applyPreset = (preset: keyof typeof presets) => {
    setPreviewState(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        ...presets[preset]
      }
    }));
  };

  return {
    previewState,
    handleStyleChange,
    handleContentChange,
    handleCodeUpdate,
    applyPreset
  };
}