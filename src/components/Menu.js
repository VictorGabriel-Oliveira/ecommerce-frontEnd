import '../styles/menu.scss'
import close from'../images/icon-close.svg'

const Menu = ({closeMenu, menuState,setMenuState}) =>{
    console.log(menuState)
    return (
        <div className="conteiner" style={{display:`${ menuState ?  'flex': 'none'}`}}>
             <div className="menu_conteiner">
            
                <ul className="menu">
                <img onClick={closeMenu} src={close} alt="close menu" />
                    <li><a href="#">Collection</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
       
    )
}
export default Menu