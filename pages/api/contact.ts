import { NextApiRequest, NextApiResponse } from "next";


const messages  = [] 
export default (req :  NextApiRequest , res : NextApiResponse ) => {
    messages.push(req.body)
    messages.length < 5 ? 
    res.status(200).json({
        message : 'Message sent successfully 😃'
    }) :
    res.status(404).json({
        message : 'Message limit reached 😓',
        error : true
    })
  
}