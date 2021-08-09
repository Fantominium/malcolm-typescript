import { NextApiRequest, NextApiResponse } from 'next'

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default function initCors (middleware: (arg0: NextApiRequest, arg1: NextApiResponse<any>, arg2: (result: any) => void) => void) {
    return (_req: NextApiRequest, res: NextApiResponse) =>
      new Promise((resolve, reject) => {
        middleware(_req, res, (result: unknown) => {
          if (result instanceof Error) {
            return reject(result)
          }
          return resolve(result)
        })
      })
  }