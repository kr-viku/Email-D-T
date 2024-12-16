import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onClick: () => void;
}

export function CopyButton({ onClick }: CopyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Copy className="w-4 h-4 mr-2" />
      Copy HTML
    </button>
  );
}