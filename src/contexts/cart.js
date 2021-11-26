import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export const CartContext = createContext({})

export const CartProvider = ({children}) =>{
    const [cartOpen, setCartOpen] = useState(false)
    const [amount,setAmount] = useState(0)
   
    const [cartItens, setCartItems] = useState([])

    
    
    function openCloseCart(){
        setCartOpen(!cartOpen)
    }
    function addToCart(item ){
        if (amount > 0 ){
            setCartItems(previus=>[   
                ...previus, 
                {
                    name:'Fall Limited Edition Sneakers',
                    preço:125.00,
                    desconto:0.2,
                    product_images:[],
                    amount:amount,
                    id:uuidv4()
                }
            ].filter(Boolean))
        }
        
        
        
    }
    
    function removeToCart(event){
        function cartfilter(obj){
            if (obj.id !== event.target.parentElement.parentElement.id ){
                return obj
            }
        }
        var cartFiltered = cartItens.filter(cartfilter)
        setCartItems(cartFiltered)
    }
    return(
        <CartContext.Provider value={{cartOpen, openCloseCart,cartItens,addToCart,removeToCart,setAmount}}>
            {children}
        </CartContext.Provider>
    )


}