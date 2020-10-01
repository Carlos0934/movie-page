import { NextApiRequest, NextApiResponse } from "next";
import { PayService } from "../../src/pay";

const payService = new PayService()
export default async (req : NextApiRequest , res : NextApiResponse) => {
    if (req.method !== 'POST') {
       res.status(400)
       return
    }
    try {
        await payService.PayMovie(req.body)
        res.status(200).json({
            message : 'Movie Paid successfully'
        })
    } catch (error) {
        res.status(400).json({
            message : 'Invalid Movie'
        })
    }
   

    
}