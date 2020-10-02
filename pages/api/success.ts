import { NextApiRequest, NextApiResponse } from "next";
import { PayService } from "../../src/pay";


const payService = new PayService()
export default async (req : NextApiRequest , res : NextApiResponse) => {
    
    const payerID = req.query.PayerID
    const paymentID = req.query.paymentId
    if( Array.isArray(paymentID) ||  Array.isArray(payerID)) {
      
       res.status(403).json({message : 'Back to carry out payment'})
       return
    }

    try {
        await payService.payMovie( paymentID , payerID)
        res.redirect('/success')
    } catch (error) {
        res.status(500).json(error)
    }
    
}
   