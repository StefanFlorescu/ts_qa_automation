import { test, expect, request } from '@playwright/test';

test('GET /users returns 200', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status()).toBe(200);
});
