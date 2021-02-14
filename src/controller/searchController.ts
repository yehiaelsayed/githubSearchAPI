import { Request, Response } from 'express'
import { searchGitHub } from '../services/searchService'
import { clear } from '../services/clearCacheService'

import { createFailedResponse, createSuccessResponde } from '../utils/responseFormatter';

export async function search(req: Request, res: Response) {
  try {
    const data = await searchGitHub(req.body)
    return createSuccessResponde(res, data);
  } catch (err) {
    return createFailedResponse(res, "Failed to get data")
  }
}

export async function clearCache(req: Request, res: Response) {
  try {
    clear();
    return createSuccessResponde(res, "cache clear");
  } catch (err) {
    return createFailedResponse(res, "Failed to clear cache");
  }
}