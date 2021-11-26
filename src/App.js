
import './styles/App.scss';

import next from  './images/icon-next.svg'
import previous from './images/icon-previous.svg'
import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import menu from './images/icon-menu.svg'
import profile from './images/image-avatar.png'
import { useContext, useEffect, useState } from 'react';

import product_image1 from './images/image-product-1.jpg'
import product_image2 from './images/image-product-2.jpg'
import product_image3 from './images/image-product-3.jpg'
import product_image4 from './images/image-product-4.jpg'


import Button from './componentes/Button';
import Count from './componentes/Count';
import Price from './componentes/Price';
import Menu from './componentes/Menu';
import Cart from './componentes/Cart';
import ImagesConteiner from './componentes/ImagesConteiner'
import { CartContext } from './contexts/cart';
import { authContex } from './contexts/auth';
import { CheckOutForm } from './componentes/CheckoutForm';

function App() {
    const {user} =useContext(authContex)
    
    const product_images = [product_image1,product_image2,product_image3,product_image4]
    const [product_image , setProduct_image] = useState(product_images[0])
    const [count, setCount] = useState(0)

    const [menuState, setMenuState] = useState(false)

    const {openCloseCart,cartItens,cartOpen,addToCart}  = useContext(CartContext)
    
    let avatar = profile

    useEffect(()=>{
        setProduct_image(product_images[count])

        if (user){
            avatar = user.photoURL
        }
       
    },[count])

    function handleNextImage (i) {
       
        if(count < product_images.length - 1){
            setCount(count +1)
            
        }
    }

    
   
    const handlePreviousImage = (i) =>{
        if(i > 0){
            setCount(count - 1 )
           
        }
    }

    const handleOpenCloseMenu = () =>{
        setMenuState(!menuState)
        if (cartOpen){
            openCloseCart()
        }
            
        
        
    }
    const [formState, setFormState] = useState(true)
    
            
      
   
   
    return (
        <div className="App">
            <Menu closeMenu={handleOpenCloseMenu} menuState={menuState} />
            <CheckOutForm state={formState}/>
            <header >
                <div className='fist-header' >
                    <img className="menu" src={menu} alt="menu" onClick={handleOpenCloseMenu}/>
                    <img src={logo} alt="logo" />
                    <div >
                        <ul className="menu-desktop">
                            <li><a href="#">Collection</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                </div>
                <div className="second-header">
                    <div className="cart" onClick={openCloseCart}>
                        {cartItens.length > 0 ?  <strong className="amount">{cartItens.length}</strong> : ''}
                       
                        <img src={cart} alt="cart"/>
                    </div>
                    
                    
                    <img className='avatar' src={ user.photoURL ? user.photoURL : profile} alt={user ? user.displayName : 'profile'} />
                </div>
            </header>
            <main>
                <div className="productImage_conteiner">
                    <div className="product-image" style={{backgroundImage:`url(${product_image})`}}>
                        <Cart  /> 
                        
                        <div className="btns">
                            <div onClick={()=>{
                                
                                handlePreviousImage(count)
                            }} className='btnProduc_image'>
                                <img src={previous}  alt="previous"/>

                            </div>
                            
                            <div onClick={()=>{
                                handleNextImage(count)
                            }} className="btnProduc_image">
                                <img src={next}  alt="next" />
                            </div>
                        </div>
                        
                    </div>

                    <div className="select_products">
                        {
                            product_images.map((value)=>{
                               return <ImagesConteiner image={value} setProduct_image={setProduct_image}/>
                            })
                        }
                    </div>
                </div>
               
                
                <div className="info_conteiner">
                    <div className="info" >
                        <p className="company">SNAKE COMPANY</p>
                        <h1 className="title">Fall Limited Edition Sneakers</h1>
                        <strong className="description"> 
                            these low-profile snekers are your perfect
                            casual wear companion. Featuring a durable
                            rubber outer sole, they'll withstand everyting
                            the weather can offer
                        </strong>
                        <Price/>
                    </div>
                    <div className="count_button_div">
                        <Count/>
                        <Button functionality={()=>{
                            addToCart()
                        }} img={true}> Add to cart</Button>
                    </div>
                    
                </div>
                
            </main>


            
        
        </div>
    );
}

export default App;
