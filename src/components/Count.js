import '../styles/count.scss'
import more from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import { useContext , useEffect, useState} from 'react'
import { CartContext } from '../contexts/cart'




const Count = () =>{
    const{setAmount} = useContext(CartContext)
    const [count,setCount] = useState(1)
    
    useEffect(()=>{
        setAmount(count)
    },[count])

    const handlePlus =()=>{
        setCount(count + 1)
    }
    const handleMinus = ()=>{
        
        if (count > 1){
            setCount(count - 1)
        }
    }
    return (
        <div className="count_conteiner">
            <div className="btn" onClick={handleMinus}>
                <img src={minus} alt="more"/>
                
            </div>
            <strong>{count}</strong>
            <div className="btn" onClick={handlePlus}>
                <img src={more} alt="minus"/>  
            </div>

                
        </div>
    )
}

export default Count