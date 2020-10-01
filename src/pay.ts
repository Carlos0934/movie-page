import paypal  from 'paypal-rest-sdk'
import { Movie } from '../components/Card'
export class PayService {
    
    constructor(private url) {
        paypal.configure({
            mode : 'sanbox',
            client_id : process.env.CLIENT_ID,
            client_secret : process.env.CLINET_SECRET
        })
    }

    async PayMovie(movie : Movie) {
        const payment = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": this.url,
                "cancel_url": this.url
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": movie.title,
                        "sku": "item",
                        "price":  movie.price,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": movie.price
                },
                "description": movie.description
            }]
        } 
        paypal.payment.create( payment , (response) => {
            
        })
               
    }
}