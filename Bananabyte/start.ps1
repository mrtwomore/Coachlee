# PowerShell script to start the Next.js development server
# Run this script instead of using 'npm run dev' directly
# This ensures the environment is set up correctly

Write-Output "Starting Next.js development server..."

# Change to the project directory (if needed)
# Set-Location -Path .

# Check for Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed or not in PATH. Please install Node.js."
    exit 1
}

# Check for npm
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm is not installed or not in PATH. Please install npm."
    exit 1
}

# Check if .env file exists, if not, create from example
if (-not (Test-Path -Path ".env")) {
    if (Test-Path -Path ".env.example") {
        Write-Output "Creating .env file from .env.example..."
        Copy-Item -Path ".env.example" -Destination ".env"
    } else {
        Write-Output "Creating empty .env file..."
        New-Item -Path ".env" -ItemType File | Out-Null
        Add-Content -Path ".env" -Value "# Environment Variables"
    }
}

# Install dependencies if needed
if (-not (Test-Path -Path "node_modules")) {
    Write-Output "Installing dependencies..."
    npm install
}

# Run security audit
Write-Output "Running security audit..."
npm audit

# Start the development server
Write-Output "Starting development server..."
npm run dev

# This line won't be reached while the dev server is running
# It will only execute if the dev server is stopped
Write-Output "Development server stopped." 