import { encode, decode, } from 'js-base64'
import redis from 'redis'
import { promisify } from 'bluebird'
import config from '../../config/config'
import * as logger from '../logger'
const redisPort = config.redisPort;
const client = redis.createClient(redisPort);

client.on("error", (err) => {
  logger.error(err.message, err);
});

const setAsync = promisify(client.set).bind(client)
const getAsync = promisify(client.get).bind(client)
const flushallAsync = promisify(client.flushall).bind(client);

function createKey(keys: string[]) {
  return encode(keys.sort().join(''))
}


export async function cacheSet(keys: string[], data: any) {
  try {
    const key = createKey(keys);
    const result = await setAsync(key, JSON.stringify(data));
  } catch (err) {
    logger.error(err.messsage, err);
  }
}


export async function cacheGet(keys: string[]) {
  try {
    const key = createKey(keys);
    const dataStr = await getAsync(key);
    const data = dataStr ? JSON.parse(dataStr) : null;
    return data;
  } catch (err) {
    logger.error(err.messsage, err);

  }
}

export async function cacheFlush() {
  try {
    await flushallAsync();
  } catch (err) {
    logger.error(err.messsage, err);
  }
}
