import { Container } from "./styles";
import userImg from "../../assets/user.png"
import { BsStackOverflow } from "react-icons/bs"
import { MdPlace, MdAlternateEmail } from "react-icons/md"
import { GrClose } from "react-icons/gr"

function DevProfile(){

    const style = { fontSize: "22px", color:"#5B2E76"}

    const stacks = ["html", "css", "javascript", "git", "react", "typescript", "sql"]

    return(
        <Container>
            <div className="devProfile">
                
                <header> 
                    <button className="buttonClose"><GrClose /></button>    
                    <img src={userImg} alt="Avatar do usuário" />                
                    <h1>Nome do Dev</h1>                              
                </header>


                <div className="devDetails">
                    <section >
                        <span>Nome é um.. </span>                        
                        <h2>Front-End Engineer</h2>

                        <div className="devStacks">
                            <p><BsStackOverflow style={style}/></p> 
                            {stacks.map((stack, index) => <span key={index} className="stack">{stack}</span>)} 

                        </div>

                        <div>
                            <p><MdPlace style={style} /> </p>
                            <p><MdAlternateEmail style={style} /> </p>
                        </div>
                    </section>

                    <section>
                        <h2>Descrição</h2>
                        <p>Bio</p>
                    
                    </section>

                </div>

                <div className="emailButton">
                    <a className="emailButton" href="mailto:emaildodev@email.com">Enviar Email</a>
                </div>

            </div>
        </Container>
    )
}

export default DevProfile;