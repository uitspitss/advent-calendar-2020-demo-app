import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import { DefaultSeo } from 'next-seo';

import * as gtag from 'lib/gtag';
import SEO from '../next-seo.config';
import 'styles/globals.css';

const isProd = process.env.NODE_ENV === 'production';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
  Sentry.init({
    enabled: isProd,
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          // eslint-disable-next-line
          // @ts-ignore
          // eslint-disable-next-line
          frame.filename = frame.filename.replace(distDir, 'app:///_next');

          return frame;
        },
      }),
    ],
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
