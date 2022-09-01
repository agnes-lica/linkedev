import styled from "styled-components";

export const Container = styled.header`
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

    div{
        background-color: var(--gray-color-0);
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 1300px;
        margin: auto;
            
        img{
            height: 50px;
        }

        button{
            font-weight: 600;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    
`