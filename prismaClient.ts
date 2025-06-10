import { PrismaClient } from '@prisma/client';
import { config } from './src/config/database';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.databaseUrl,
    },
  },
});