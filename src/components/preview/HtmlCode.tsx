import React from 'react';

interface HtmlCodeProps {
  html: string;
}

export function HtmlCode({ html }: HtmlCodeProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated HTML</h2>
      <textarea
        readOnly
        value={html}
        className="w-full h-[200px] px-3 py-2 text-sm font-mono bg-gray-50 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  );
}