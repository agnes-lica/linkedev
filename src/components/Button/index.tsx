import { Container } from "./style";

interface ButtonProps{
    content: any;
    buttonFunction: () => void;
}

function Button({content, buttonFunction}: ButtonProps){

    return( 
        <Container onClick={buttonFunction}>
            {content}
        </Container>
    )

}

export default Button;