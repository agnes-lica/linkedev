import { useContext, useState, useEffect } from "react";
import { Container } from "./style";
import { MdMenu, MdOutlineKeyboardArrowDown} from "react-icons/md"
import {BiEditAlt} from "react-icons/bi"
import { MdOutlineLogout } from "react-icons/md"
import { GlobalContext } from "../../providers/Global/GlobalContext";



function Dropdown(){

    const [open, setOpen] = useState<boolean>(false)
    const {logout} = useContext(GlobalContext)

    useEffect(() => {
        open && 
            setTimeout(() => {
                console.log('oi')
                setOpen(false)
            }, 10000)
        
    }, [open])

    return(
        <Container >
            <div onClick={() => setOpen(!open)}>
            {open? 
            <MdOutlineKeyboardArrowDown size={35}/>
            :
            <MdMenu size={45} />
            }
            </div>
                
            {open && 
                <div className="dropdown">
                    <button onClick={() => console.log("editar perfil")}> <BiEditAlt /> Editar Perfil</button>
                    <button onClick={logout}> <MdOutlineLogout /> Logout</button>
                </div>
            }        
                     
        </Container>
    )
}


export default Dropdown;