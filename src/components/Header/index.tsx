import { Container } from "./style";
import logo from "../../assets/Logolight.svg"
import Button from "../Button";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import Dropdown from "../Dropdown";


function Header(){

    const { logout } = useContext(GlobalContext)
    
    return(
        <Container>
            <div className="container">
                <img src={logo} alt="Logotipo linkedev" />
                
                <Dropdown />
                
                <div className="button">                  
                    <Button content={"Logout"} buttonFunction={logout} />
                </div>
            </div>
        </Container>
    )
}

export default Header;