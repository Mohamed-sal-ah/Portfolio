import styled from 'styled-components'

export const Image = styled.img`
height:420px;
width: 300px;
@media (max-width: 750px) { 
    height:100%;
}
@media (max-width: 550px){
    width:80%;
    border-radius:0;
}
`