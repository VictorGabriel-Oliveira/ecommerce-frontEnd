import "../styles/cartItem.scss"
import itemImage from "../images/image-product-1-thumbnail.jpg"
import deleteIcon from "../images/icon-delete.svg"
import { useContext } from "react"
import { CartContext } from "../contexts/cart"


const CartItem = ({name,preço,amount,id}) => {
    function caulculateLastPrice (){
        return preço * amount 
    }
    const {removeToCart} = useContext(CartContext)
    
    return(
        <div id={id} key={id}className="cartItem_conteiner">
                
            <div className="cartItem_content">
                <img className="tumb" src={itemImage} alt="item image"/>
                <div className="info">
                    <div className="title">{name}</div>
                    <div className="precos">
                        <strong> $ {preço?.toFixed(2).replace('.',',')} x {amount} </strong>
                        <strong className="last_price">$ {caulculateLastPrice().toFixed(2).replace('.',',')}</strong>
                    </div>
                </div>
                <img onClick={removeToCart} className="delete" src={deleteIcon} alt="delete"/>
            </div>
           
        </div>

    
    )
}

export default CartItem