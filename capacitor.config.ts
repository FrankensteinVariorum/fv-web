import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fv.app',
  appName: 'FrankensteinVariorum',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url:'http://localhost:3000',
    cleartext: true
  }
};

export default config;
