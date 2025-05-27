import { test as base, request, APIRequestContext } from '@playwright/test';
import { logger } from '../../utils/logger';

type MyFixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<MyFixtures>({
  apiContext: async ({}, use) => {
    const apiContext = await request.newContext();
    logger.debug('Creating new API request context');
    await use(apiContext);
    logger.debug('Disposing API request context');
    await apiContext.dispose();
  },
});