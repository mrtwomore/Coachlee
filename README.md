# Coach Lee Website

A professional website for Coach Lee, an elite strength and conditioning coach specializing in athlete development.

## Project Structure

The main application is contained within the `Bananabyte` directory. The root directory contains helper scripts for easier project management.

## Requirements

- Node.js v16.0 or higher
- npm v7.0 or higher

## Setup Instructions

### Option 1: Using Root Scripts (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/lee-website.git
cd lee-website

# Install dependencies
npm run setup

# Start development server
npm run dev
```

### Option 2: Direct Navigation

```bash
# Clone the repository
git clone https://github.com/yourusername/lee-website.git
cd lee-website

# Navigate to project directory
cd Bananabyte

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

From the root directory:

- `npm run setup` - Install all dependencies
- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run the linter

## Accessing the Website

After starting the development server, the website will be available at:

- [http://localhost:3000](http://localhost:3000)

## Deployment

This project can be deployed to platforms like Vercel, Netlify, or any hosting service that supports Next.js applications.

## Tech Stack

- Next.js
- React
- CSS Modules
- next-themes for dark/light mode
- Framer Motion for animations

## License

ISC 