import React from 'react';
import { processStyles } from '../utils/styleProcessor';

interface PreviewProps {
  styles: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
}

export function Preview({ styles, content }: PreviewProps) {
  const processedStyles = processStyles(styles);

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#00fff2] mb-8">
      <h2 className="text-xl mb-4">Preview</h2>
      <div className="flex items-center justify-center min-h-[400px] bg-[#0a0a0a] rounded-lg p-4">
        <div style={processedStyles} className="shadow-lg">
          <div className="p-4">
            <h3 className="text-lg mb-2">{content.title}</h3>
            <p className="text-sm opacity-75">{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}