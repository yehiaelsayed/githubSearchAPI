import { httpGet } from '../utils/httpClient/index';
import { cacheGet, cacheSet } from '../utils/cache/redisClient';
import { SerachInput, SearchResult } from '../models/index';
import config from '../config/config'
import * as  logger from '../utils/logger'



export async function searchGitHub(input: SerachInput) {

  try {
    const searchApi = config.gitHubSearchApi;
    const serarchUrl = `${searchApi}${input.type}?q=${input.query}`

    const cacheResult = await cacheGet([input.type, input.query])
    if (cacheResult) {
      return cacheResult
    }

    const data = await httpGet(serarchUrl);

    if (data) {
      const items = data.items as Array<any>
      const result: SearchResult[] = [];
      items.map((item, key) => {
        let resultItem: SearchResult = {
          id: item.id,
          pageUrl: item.html_url,
          stars: item.score
        }

        if (input.type === "users") {
          resultItem.name = item.login
          resultItem.avatar_url = item.avatar_url;

        } else {
          resultItem.name = item.name;
        }
        result.push(resultItem)
      });
      await cacheSet([input.type, input.query], result);
      return result;
    }

  } catch (err) {
    logger.error(err.message)
    throw err;
  }

}