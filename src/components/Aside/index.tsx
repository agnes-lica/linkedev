import { Container } from "./style";
import { MdWorkOutline, MdPlace, MdOutlineMail } from "react-icons/md"
import { BiEditAlt } from "react-icons/bi"

function Aside(){
    const style = { fontSize: "22px", color:"#BF90DC"}
    
    return(
        <Container>
            <header>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="Foto de perfil do usuário" />
                <span>Cargo</span>
                <h1>Nome e Sobrenome</h1>
            </header>

            <div>
                <p><MdWorkOutline style={style} /> Cargo at Empresa</p>
                <p><MdPlace style={style}  /> Localização</p>
                <p><MdOutlineMail style={style} /> Email/Contato</p>
            </div>

            <button onClick={() => console.log("editar perfil")}><BiEditAlt size={22}/> Editar Perfil</button>
        </Container>
    )
}

export default Aside;