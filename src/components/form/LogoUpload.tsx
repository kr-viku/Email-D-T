import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface LogoUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function LogoUpload({ value, onChange }: LogoUploadProps) {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Company Logo</label>
      <div className="flex items-center space-x-4">
        {value && (
          <img src={value} alt="Logo Preview" className="h-12 w-auto object-contain" />
        )}
        <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Upload className="w-4 h-4 mr-2" />
          Upload Logo
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}