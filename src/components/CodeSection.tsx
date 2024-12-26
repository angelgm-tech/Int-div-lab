import React from 'react';
import { Code } from 'lucide-react';
import { CodeDisplay } from './CodeDisplay';

interface CodeSectionProps {
  styles: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
  onCodeUpdate: (code: string) => string | null;
}

export function CodeSection({ styles, content, onCodeUpdate }: CodeSectionProps) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#00fff2]">
      <h2 className="text-xl mb-4 flex items-center gap-2">
        <Code className="w-5 h-5" />
        Generated Code
      </h2>
      <CodeDisplay 
        styles={styles} 
        content={content}
        onCodeUpdate={onCodeUpdate}
      />
    </div>
  );
}