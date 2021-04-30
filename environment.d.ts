declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ANALYTICS_ID: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
      NEXT_PUBLIC_URI_SERVER: string;
      WS_GRAPHQL_SERVER: string;
    }
  }
}

export {};
