import React, { useState, useEffect, useCallback } from 'react';
import { Copy } from 'lucide-react';
import { debounce } from '../utils/debounce';

interface CodeDisplayProps {
  styles: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
  onCodeUpdate: (code: string) => string | null;
}

export function CodeDisplay({ styles, content, onCodeUpdate }: CodeDisplayProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  // Generate code string when props change
  useEffect(() => {
    const codeString = `<div style={{
  ${Object.entries(styles)
    .map(([key, value]) => `${key}: '${value}'`)
    .join(',\n  ')}
}}>
  <div className="p-4">
    <h3 className="text-lg mb-2">${content.title}</h3>
    <p className="text-sm opacity-75">
      ${content.description}
    </p>
  </div>
</div>`;
    setCode(codeString);
  }, [styles, content]);

  // Debounced code update function
  const debouncedUpdate = useCallback(
    debounce((newCode: string) => {
      const error = onCodeUpdate(newCode);
      setError(error || '');
    }, 300),
    [onCodeUpdate]
  );

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    debouncedUpdate(newCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 hover:bg-[#2a2a2a] rounded transition-colors"
        title="Copy code"
      >
        <Copy className="w-4 h-4" />
      </button>
      <div className="bg-[#0a0a0a] p-4 rounded-lg">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-48 bg-transparent text-sm font-mono focus:outline-none resize-none"
          spellCheck={false}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}