import React from 'react';
import { EmailPreviewProps } from '../types/email';
import { PreviewFrame } from './preview/PreviewFrame';
import { HtmlCode } from './preview/HtmlCode';

export function EmailPreview({ html }: EmailPreviewProps) {
  return (
    <div className="space-y-4">
      <PreviewFrame html={html} />
      <HtmlCode html={html} />
    </div>
  );
}