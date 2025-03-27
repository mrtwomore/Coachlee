# Coach Lee Website

A Next.js website for Coach Lee's strength coaching business.

## Security Features

This project implements several security best practices:

- Environment variables for sensitive information
- Content Security Policy (CSP) headers
- Input validation and sanitization with Zod
- Rate limiting protection
- Secure HTTP headers
- Regular dependency scanning

For more details, see the [SECURITY.md](./SECURITY.md) document.

## Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Bananabyte
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Edit the `.env` file and add your actual environment variables.

## Running the Application

### Windows (PowerShell)

Use the provided PowerShell script:

```
.\start.ps1
```

### Manual Start

```
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Security Checks

Run security audit:

```
npm run audit
```

Fix security issues:

```
npm run audit:fix
```

## Building for Production

```
npm run build
npm start
```

## Best Practices

- Keep dependencies up to date
- Regularly run security scans
- Never commit `.env` files to the repository
- Review code for security concerns before deployment

## License

ISC 