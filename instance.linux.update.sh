# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18 ----> 20
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Create application directory
sudo mkdir -p /var/www/nextjs-app
sudo chown -R ubuntu:ubuntu /var/www/nextjs-app

# Setup PM2 to start on boot
pm2 startup
# Copy and run the command it outputs