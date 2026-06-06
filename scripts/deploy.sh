#!/bin/bash
set -e

echo "🚀 Starting deployment..."
cd /var/www/nextjs-app

# Install dependencies
echo "📦 Installing dependencies..."
npm ci 
 
# Build application
echo "🔨 Building application..."
npm run build


# Restart PM2 process
echo "♻️  Restarting application..."
if pm2 describe nextjs-app > /dev/null 2>&1; then
    pm2 restart nextjs-app
else
    pm2 start npm --name "nextjs-app" -- start
fi

# Save PM2 configuration
pm2 save

echo "✅ Deployment completed successfully!"


