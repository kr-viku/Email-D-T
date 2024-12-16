import React, { useState, useCallback } from 'react';
import { EmailForm } from './components/EmailForm';
import { EmailPreview } from './components/EmailPreview';
import { generateEmailHtml } from './utils/emailTemplate';
import { EmailData } from './types/email';

function App() {
  const [formData, setFormData] = useState<EmailData>({
    recipientName: 'John',
    message: '<p>Thank you for being a valued customer. We hope you are enjoying our services.</p>',
    ctaText: 'Get Started',
    ctaLink: 'https://example.com',
    logo: '',
    signature: 'Best regards,\nThe Team',
    companyName: 'Company, Inc.',
    companyAddress: '123 Street Name\nCity, State 12345\nCountry',
  });

  const handleUpdateFields = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleCopyHtml = useCallback(() => {
    const html = generateEmailHtml(formData);
    navigator.clipboard.writeText(html);
  }, [formData]);

  const generatedHtml = generateEmailHtml(formData);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Template Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EmailForm
            {...formData}
            onUpdateFields={handleUpdateFields}
            onCopyHtml={handleCopyHtml}
          />
          
          <EmailPreview
            {...formData}
            html={generatedHtml}
          />
        </div>
      </div>
    </div>
  );
}

export default App;