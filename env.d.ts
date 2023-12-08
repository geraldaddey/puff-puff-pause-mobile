declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_API_URL?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
