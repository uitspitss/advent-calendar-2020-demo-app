import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as nextRouter from 'next/router';

import 'styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// Storybook tips, SEE https://panda-program.com/posts/nextjs-storybook-typescript-errors
// ダミーデータは適宜変更する
nextRouter.useRouter = () => ({
  route: '/',
  pathname: '/about',
  query: { query: 'Next.js Storybook' },
  asPath: '',
  basePath: '',
});

// GA mock
window.gtag = () => {};
