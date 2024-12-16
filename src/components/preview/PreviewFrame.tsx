import React from 'react';

interface PreviewFrameProps {
  html: string;
}

export function PreviewFrame({ html }: PreviewFrameProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          srcDoc={html}
          title="Email Preview"
          className="w-full h-[600px]"
          frameBorder="0"
        />
      </div>
    </div>
  );
}