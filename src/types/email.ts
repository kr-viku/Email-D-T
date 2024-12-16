export interface EmailData {
  recipientName: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  logo?: string;
  signature: string;
  companyName: string;
  companyAddress: string;
}

export interface EmailFormProps extends EmailData {
  onUpdateFields: (field: string, value: string) => void;
  onCopyHtml: () => void;
}

export interface EmailPreviewProps extends EmailData {
  html: string;
}