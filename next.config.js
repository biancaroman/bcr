// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Outras configurações do Next.js...
    // ...
  
    // Configuração do Favicon
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Content-Type',
              value: 'image/x-icon',
            },
          ],
        },
        {
          source: '/favicon.png',
          headers: [
            {
              key: 'Content-Type',
              value: 'image/png',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  