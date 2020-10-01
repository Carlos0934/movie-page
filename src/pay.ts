import paypal from 'paypal-rest-sdk'
import { Movie } from '../components/Card'
export class PayService {
    
    constructor() {
        paypal.configure({
            mode : 'sanbox',
            client_id : process.env.CLIENT_ID,
            client_secret : process.env.CLINET_SECRET
        })
    }

    async PayMovie(movie : Movie) {
        //paypal.payment.create()
    }
}