import React from "react";
import "../src/css/globals.css";
import Router from "next/router";

import type { AppProps } from "next/app";

// Redux
import { Provider } from "react-redux";
import { useStore } from "@/store";

// Bar-Progress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Swiper
import "swiper/swiper-bundle.css";
import "swiper/components/pagination/pagination.scss";

// Apollo
import { ApolloProvider } from "@apollo/client/react";
import { client as apolloClient } from "@/graphql";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { store } = useStore();
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
