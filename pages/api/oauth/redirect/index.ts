import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import initCors from "../../../../lib/initCors"


const cors = initCors(
    Cors({
      methods:['POST','GET','OPTIONS'],  
      origin: "*",
      // preflightContinue: false,
      // optionsSuccessStatus: 204
    })
  )

async function fetchToken(_req: NextApiRequest, res: NextApiResponse) {
    const clientID = `5290d6a01e8cb6526397`
    const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:3000/api/oauth/redirect`
    res.redirect(
        `${redirectUrl}`
    )
}
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    await cors (_req, res)
    if (_req) {
        try {
            const url = _req.body
            // res.redirect(`${url}`)
            return res.status(200).json({code: '200', value:JSON.stringify(url)})
        } catch (err){
            return res.status(500).json({ statusCode: 500, message: err.message })
        }
    }

    return res.status(500).json({ code: '500', message: 'no query or req returned' })


}