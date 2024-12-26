import React from 'react';
import { Download } from 'lucide-react';
import { generateReactComponent, generateCSS, generateHTML } from '../utils/exportHelpers';
import type { StyleState } from '../types/styles';

interface CodeExportProps {
  styles: StyleState;
}

export function CodeExport({ styles }: CodeExportProps) {
  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportOptions = [
    {
      label: 'React Component',
      filename: 'StyledDiv.tsx',
      generator: () => generateReactComponent(styles)
    },
    {
      label: 'CSS',
      filename: 'styles.css',
      generator: () => generateCSS(styles)
    },
    {
      label: 'HTML',
      filename: 'index.html',
      generator: () => generateHTML()
    }
  ];

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#00fff2] mt-8">
      <h2 className="text-xl mb-4 flex items-center gap-2">
        <Download className="w-5 h-5" />
        Export Code
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {exportOptions.map(option => (
          <button
            key={option.filename}
            onClick={() => downloadFile(option.generator(), option.filename)}
            className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a] transition-colors"
          >
            Download {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}