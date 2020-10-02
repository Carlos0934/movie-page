import { NextApiRequest, NextApiResponse } from "next";
import { PayService } from "../../src/pay";


const payService = new PayService()
export default async (req : NextApiRequest , res : NextApiResponse) => {
    
    if (req.method !== 'POST') {
       res.status(400)
       return
    }
    
    try {
        const link = await payService.createMoviePayment(JSON.parse(req.body))
        
       
        res.status(200).json({
            link : link
        })
    } catch (error) {
       console.log(error)
        res.status(500).json({
            message : 'Invalid Movie'
        })
    }
   

    
}