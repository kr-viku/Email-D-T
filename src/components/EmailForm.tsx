import React from 'react';
import { EmailFormProps } from '../types/email';
import { FormField } from './form/FormField';
import { CopyButton } from './form/CopyButton';
import { RichTextEditor } from './form/RichTextEditor';
import { LogoUpload } from './form/LogoUpload';

export function EmailForm({
  recipientName,
  message,
  ctaText,
  ctaLink,
  logo,
  signature,
  companyName,
  companyAddress,
  onUpdateFields,
  onCopyHtml,
}: EmailFormProps) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Email Template Settings</h2>
      
      <LogoUpload
        value={logo || ''}
        onChange={(value) => onUpdateFields('logo', value)}
      />

      <FormField
        id="recipientName"
        label="Recipient Name"
        value={recipientName}
        onChange={(value) => onUpdateFields('recipientName', value)}
        placeholder="Enter recipient name"
      />

      <RichTextEditor
        label="Main Message"
        value={message}
        onChange={(value) => onUpdateFields('message', value)}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="ctaText"
          label="CTA Text"
          value={ctaText}
          onChange={(value) => onUpdateFields('ctaText', value)}
          placeholder="Enter CTA text"
        />

        <FormField
          id="ctaLink"
          label="CTA Link"
          value={ctaLink}
          onChange={(value) => onUpdateFields('ctaLink', value)}
          type="url"
          placeholder="Enter CTA link"
        />
      </div>

      <FormField
        id="signature"
        label="Email Signature"
        value={signature}
        onChange={(value) => onUpdateFields('signature', value)}
        placeholder="Best regards,"
      />

      <FormField
        id="companyName"
        label="Company Name"
        value={companyName}
        onChange={(value) => onUpdateFields('companyName', value)}
        placeholder="Company, Inc."
      />

      <FormField
        id="companyAddress"
        label="Company Address"
        value={companyAddress}
        onChange={(value) => onUpdateFields('companyAddress', value)}
        type="textarea"
        placeholder="Enter company address"
      />

      <CopyButton onClick={onCopyHtml} />
    </div>
  );
}