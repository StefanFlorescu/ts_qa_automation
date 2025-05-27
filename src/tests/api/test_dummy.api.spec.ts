import { expect, request } from '@playwright/test';
import { test } from './fixtures';


test('GET /users returns 200', async ({ apiContext }) => {
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status()).toBe(200);
  const users = await response.json();
  expect(users).toBeInstanceOf(Array);
  expect(users.length).toBeGreaterThan(0);
});


test('GET /todos/{item} returns 200', async ({apiContext}) => {
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/todos/1');
  const todos = await response.json();
  expect(todos).toBeInstanceOf(Object);
expect(Object.keys(todos).length).toBeGreaterThan(0);
  expect(response.status()).toBe(200);
});

test('GET /todos returns 200', async ({apiContext}) => {
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  expect(todos).toBeInstanceOf(Array<Object>);
  expect(todos.length).toBeGreaterThan(0);
  expect(response.status()).toBe(200);
});


test('GET /posts returns 200', async ({apiContext}) => {
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts');
  const todos = await response.json();
  expect(todos).toBeInstanceOf(Array<Object>);
  expect(todos.length).toBeGreaterThan(0);
  expect(response.status()).toBe(200);
});

test('GET /posts/{item} returns 200', async ({apiContext}) => {
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  const todos = await response.json();
  expect(todos).toBeInstanceOf(Object);
  expect(Object.keys(todos).length).toBeGreaterThan(0);
  expect(response.status()).toBe(200);
});