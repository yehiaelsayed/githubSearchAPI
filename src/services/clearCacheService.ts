import { cacheFlush } from '../utils/cache/redisClient';
import * as  logger from '../utils/logger'


export async function clear() {
  try {
    return await cacheFlush();
  } catch (err) {
    logger.error(err.message, err)
    throw err;
  }
}