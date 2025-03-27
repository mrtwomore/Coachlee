# Security Policy and Implementations

This document outlines the security measures implemented in this Next.js project to protect against common web vulnerabilities.

## Security Features Implemented

### 1. Environment Variables
- Sensitive information like API keys are stored in `.env` files
- `.env` files are included in `.gitignore` to prevent committing secrets
- Example template provided in `.env.example`

### 2. Content Security Policy (CSP)
- CSP headers configured in `next.config.js`
- Restricts content sources to prevent XSS attacks
- Controls which domains can load scripts, styles, and other resources

### 3. HTTP Security Headers
- Strict Transport Security (HSTS) to enforce HTTPS
- X-XSS-Protection to prevent cross-site scripting attacks
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options to prevent MIME-type sniffing
- Referrer-Policy to control information passed in HTTP Referrer header
- Permissions-Policy to control browser features

### 4. Input Validation
- Client and server-side validation with Zod
- Schema-based form validation
- Input sanitization to prevent XSS attacks

### 5. Rate Limiting
- Protection against brute force attacks
- Implemented in Next.js middleware
- Configurable limit of requests per time period

### 6. Dependency Management
- Regular security scans with `npm audit`
- GitHub workflow for automated security scanning
- Monitors for vulnerabilities in dependencies

## Security Best Practices for Development

1. **Regular Updates**
   - Keep dependencies up to date
   - Run `npm audit` regularly
   - Address vulnerabilities as they are discovered

2. **Code Reviews**
   - Always review code for security concerns
   - Use ESLint with security plugins
   - Follow the principle of least privilege

3. **Authentication & Authorization**
   - Implement proper authentication if adding user accounts
   - Use JWT or session-based auth with secure settings
   - Apply proper authorization checks

4. **Data Protection**
   - Sanitize all user-generated content
   - Validate and sanitize inputs on both client and server
   - Always escape output to prevent XSS

5. **HTTPS**
   - Always use HTTPS in production
   - Configure HSTS headers
   - Secure cookie settings

## Reporting Security Issues

If you discover a security vulnerability, please contact [coach@lee-strengthcoach.com](mailto:coach@lee-strengthcoach.com). 

Do NOT create public GitHub issues for security vulnerabilities. 