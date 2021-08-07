import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = _req.body
        res.status(200).json({code: '200', value:url})
    } catch (err){
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}