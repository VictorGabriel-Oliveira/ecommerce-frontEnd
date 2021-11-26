import "../styles/Cart.scss"
import { useContext, useState } from "react"
import CartItem from "./CartItem"
import Button from "./Button"
import { useEffect } from "react"
import { CartContext } from "../contexts/cart"
import { authContex } from "../contexts/auth"
import {  redirectForMercadoPago } from "./CheckoutForm"

const Cart = () =>{
   
    const {cartOpen,cartItens} = useContext(CartContext)
    const {singWithGoogle} = useContext(authContex)

  
    console.log(singWithGoogle)
    const cartState = {
        itens: cartItens
    }
    useEffect(()=>{
        cartState.itens = cartItens
    },[cartItens])
    
    return (
        
        <div  className="cart_conteiner" style={{display:`${ cartOpen ? 'flex':'none'}`}}>
            <div className="cart_title">
                <p>Cart</p>
            </div>
            <div className="cart_content">
                {
                    cartState.itens.length > 0 ? cartState.itens.map((item,index)=>{
                        
                        return <CartItem id={item.id} name={item.name} preço={item.preço} amount={item.amount} /> 
                    }):
                    <p>Your cart is empty</p>
                }

            </div>
            <Button functionality={()=>{
                if( cartState.itens.length >0){
                    redirectForMercadoPago()
                }
                
            }} >Checkout</Button>
        </div>
        
    )
}

export default Cart