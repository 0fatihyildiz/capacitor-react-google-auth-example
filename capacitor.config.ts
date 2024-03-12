import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'react-capacitor-auth',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      clientId: process.env.GOOGLE_CLIENT_ID_IOS || '',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    },
  },
};

export default config;
