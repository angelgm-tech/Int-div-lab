import React from 'react';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { Preview } from './components/Preview';
import { CodeSection } from './components/CodeSection';
import { CodeExport } from './components/CodeExport';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { usePreview } from './hooks/usePreview';

export default function App() {
  const { 
    previewState,
    handleStyleChange,
    handleCodeUpdate,
    applyPreset 
  } = usePreview();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00fff2] font-mono relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ControlPanel 
            styles={previewState.styles}
            onStyleChange={handleStyleChange}
            onPresetSelect={applyPreset}
          />

          <div className="lg:col-span-2">
            <Preview 
              styles={previewState.styles} 
              content={previewState.content}
            />
            <CodeSection 
              styles={previewState.styles}
              content={previewState.content}
              onCodeUpdate={handleCodeUpdate}
            />
            <CodeExport 
              styles={previewState.styles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}