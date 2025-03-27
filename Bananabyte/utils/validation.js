import { z } from 'zod';

/**
 * Validation schemas for forms and API inputs
 */

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }).max(100),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }).max(1000),
});

// Generic validation function
export function validateInput(schema, data) {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData, error: null };
  } catch (error) {
    // Format Zod errors into a more user-friendly format
    const formattedErrors = error.errors?.reduce((acc, err) => {
      const path = err.path.join('.');
      acc[path] = err.message;
      return acc;
    }, {});
    
    return { 
      success: false, 
      data: null, 
      error: formattedErrors || 'Invalid input' 
    };
  }
}

// Helper to sanitize user input (basic XSS protection)
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Helper to sanitize an object's string properties
export function sanitizeObject(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  const sanitized = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      sanitized[key] = typeof obj[key] === 'string' 
        ? sanitizeInput(obj[key]) 
        : obj[key];
    }
  }
  
  return sanitized;
} 