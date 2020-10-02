import paypal  from 'paypal-rest-sdk'
import { Movie } from '../components/Card'
paypal.configure({
    mode : 'sandbox',
    client_id : process.env.CLIENT_ID,
    client_secret : process.env.CLIENT_PAYPAL_SECRET
})


export class PayService {
    
    constructor() {
        
    }

    async payMovie ( paymentID : string , payerID : string) : Promise<paypal.PaymentResponse> {
        const paymentData : paypal.payment.ExecuteRequest = {
            payer_id : payerID,
            
            
        }
        return new Promise((resolve , reject) => {
            paypal.payment.execute(paymentID , paymentData , (err , payment) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(payment)
                }
               
            })
        })
    }
    async createMoviePayment(movie : Movie) : Promise<string> {
      
        const payment = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": 'http://localhost:3000/api/success',
                "cancel_url": 'http://localhost:3000/'
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": movie.title,
                        "sku": (Math.random() * 10000  ).toString(),
                        "price":  movie.price.toString(),
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": movie.price.toString()
                },
                "description": movie.description
            }]
        } 
        return new Promise((resolve , reject) => {
            paypal.payment.create( payment , (err , response) => {
                
                if(err) {
                    reject(err)
                    return
                }
                for(const link of response.links) {
                    if(link.rel === 'approval_url' ) {
                        resolve(link.href)
                    }
                }
            })
        })
               
    }
}