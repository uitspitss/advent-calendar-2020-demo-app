import fetchMock from 'fetch-mock';
// eslint-disable-next-line
import next from 'next'; // use polyfill of Next.js

import { jsonFetcher } from './jsonFetcher';

describe('jsonFetcher', () => {
  const content = {
    id: 1,
    text: 'test',
  };
  fetchMock.get('/mock/api/get', { data: content });

  test('fetch', async () => {
    await expect(jsonFetcher('/mock/api/get')).resolves.toStrictEqual({
      data: content,
    });
  });
});
