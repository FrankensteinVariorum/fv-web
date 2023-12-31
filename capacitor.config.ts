import {type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fv.app',
  appName: 'FrankensteinVariorum',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
