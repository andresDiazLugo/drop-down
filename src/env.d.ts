/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APIKEY : string;
    readonly VITE_AUTHDOAIN: string;
    readonly VITE_PROJECTID: string;
    readonly VITE_STORAGE: string;
    readonly VITE_MESSAGING: string;
    readonly VITE_APPID: string;
    readonly VITE_MEASUREMENTID: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }