import styled from "styled-components";

export const Container = styled.header`
    box-shadow: var(--box-shadow);

    .container{
        background-color: var(--gray-color-0);
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        margin: auto;
            
        img{
            height: 50px;
            width: 205px;
            margin-top: 8px;
        }

        .button{
            display: none;
        }
        
    }


    @media screen and (min-width: 768px) {
        > div{
            width: 80%;
            max-width: 1300px;

            > div{
            width: max-content;
            margin: 0;
            
                > button{
                    font-weight: 600;
                }
            }
        
        }

        nav{
            display: none;
        } 

        .container .button{
            display: block;
        }

    }
    
`