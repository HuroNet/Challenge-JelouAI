import { PrismaClient } from '@prisma/client';
import { config } from './database';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.databaseUrl,
    },
  },
});