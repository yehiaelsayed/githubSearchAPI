import { Response } from 'express'

export function createSuccessResponde(res: Response, data: any) {
  res.status(200).json({ isSuccess: true, data, error: "" })
}

export function createFailedResponse(res: Response, errorMsg: string) {

  res.status(500).json({ isSuccess: true, data: null, error: errorMsg })
}