module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/nextjs-app',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/www/nextjs-app/logs/error.log',
      out_file: '/var/www/nextjs-app/logs/out.log',
      log_file: '/var/www/nextjs-app/logs/combined.log',
      time: true,
    },
  ],
}