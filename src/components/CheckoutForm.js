import {useMercadopago} from 'react-sdk-mercadopago'
import '../styles/checkoutForm.scss'
import dotenv from 'dotenv'

import axios from 'axios'
dotenv.config()
export const redirectForMercadoPago = ()=>{
 
    axios.post('https://localhost:4000/process_payment').then(response => {
       window.location.assign(`${response.data.redirect_url}`) 
    })
}
export const CheckOutForm = ({state}) =>{
    const PUBLIC_KEY = process.env.PRODUCTION_KEY //your production key
    
    const mercadopago = useMercadopago.v2(PUBLIC_KEY,{
      locale:'pt-BR'
    })   
    return (
      <div className="checkout_conteiner">

      </div>
    )
}