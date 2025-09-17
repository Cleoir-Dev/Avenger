import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ebony',
  webDir: '../../dist/apps/ebony',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
