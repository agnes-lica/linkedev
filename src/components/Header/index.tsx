import { Container } from "./style";
import logo from "../../assets/Logolight.svg"
import Button from "../Button";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";


function Header(){

    const { logout } = useContext(GlobalContext)
    
    return(
        <Container>
            <div>
                <img src={logo} alt="Logotipo linkedev" />

                <Button content={"Logout"} buttonFunction={logout} />
            </div>
        </Container>
    )
}

export default Header;