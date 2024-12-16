import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'url' | 'textarea';
  placeholder?: string;
}

export function FormField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}: FormFieldProps) {
  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500";
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}