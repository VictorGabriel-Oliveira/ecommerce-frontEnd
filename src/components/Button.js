import '../styles/button.scss'
import cart from '../images/icon-cart.svg'
const Button = ({children,functionality,img})=>{
   
    return(
        <div className="button" onClick={functionality}>
           <div className="btn">
               {img === true ? <img id="cart" style={{fill:"white"}} src={cart} alt="cart" /> : ''}
                
                <p>{children}</p>
           </div>
        </div>
    )
}
export default Button