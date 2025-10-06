# Deployment Guide for VanTrangForRent

## Prerequisites
- Node.js 18.x or higher
- PM2 (installed globally: `npm install -g pm2`)
- Git

## Deployment Steps

### 1. Clone and Setup
```bash
# Clone the repository
git clone [your-repository-url]
cd WebVantrangforrent

# Install dependencies
npm install
```

### 2. Build the Application
```bash
# Build the production version
npm run build
```

### 3. Starting the Application

#### Using PM2 (Recommended for Production)
```bash
# Start using PM2 configuration
pm2 start ecosystem.config.js

# Other useful PM2 commands:
pm2 stop vantrangforrent    # Stop the application
pm2 restart vantrangforrent # Restart the application
pm2 logs vantrangforrent    # View logs
```

#### Manual Start (Alternative)
```bash
npm run start
```

### Environment Variables
Create a `.env` file in the root directory:
```env
NODE_ENV=production
PORT=3000
```

## Platform-Specific Notes

### Windows Server
- Ensure Node.js is installed from https://nodejs.org/
- Run commands in PowerShell or Command Prompt as Administrator
- If using IIS, set up URL Rewrite Module and configure reverse proxy

### Linux Server
- Install Node.js using package manager or NVM
- Set proper file permissions:
  ```bash
  chmod +x *.js
  chown -R [user]:[group] .
  ```
- Consider using systemd for auto-start on boot

## Monitoring and Maintenance
- Use `pm2 monit` for real-time monitoring
- Check logs: `pm2 logs`
- Monitor memory usage: `pm2 status`

## Troubleshooting
- If the application fails to start, check logs: `pm2 logs`
- Verify port availability: ensure port 3000 is not in use
- Check file permissions (especially on Linux)
- Ensure all environment variables are properly set
