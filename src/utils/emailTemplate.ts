import { baseTemplate } from './templates/baseTemplate';
import { contentTemplate } from './templates/contentTemplate';
import { EmailData } from '../types/email';

function replaceTemplateVariables(template: string, variables: Record<string, any>): string {
  let result = template;
  
  // Handle conditional blocks first
  result = result.replace(/{{#if ([^}]+)}}([\s\S]*?){{\/if}}/g, (_, condition, content) => {
    return variables[condition] ? content : '';
  });

  // Replace variables
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value || '');
  });

  return result;
}

export function generateEmailHtml(data: EmailData): string {
  const content = replaceTemplateVariables(contentTemplate, {
    ...data,
  });

  return replaceTemplateVariables(baseTemplate, {
    content,
  });
}