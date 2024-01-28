import {type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fv.app',
  appName: 'FrankensteinVariorum',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // url: "http://localhost:4321", // could not be loaded because: net::ERR_CONNECTION_REFUSED
    // cleartext: true
  },
};

export default config;
