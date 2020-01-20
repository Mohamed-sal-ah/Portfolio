import React, { Component } from 'react';
import styled from 'styled-components'
import image from './images/mainImg.jpg';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import { Link } from 'react-router-dom'


const WelcomeSection = styled.section`
display block;
z-index:-1;

`;
const WelcomeText = styled.h2`
font-size:3rem;
text-align center;
font-family: 'Montserrat', sans-serif;
margin 0;

text-transform:uppercase;
@media (max-width: 800px) {

font-size:2rem;
}
`;
const StartImg = styled.img`
width: 100%;
`

const TransperentDiv = styled.div`
    width: 80%;
    top: 50%;
    left: 50%;
    border-radius:1rem;
    position: absolute;
    transform: translate(-50%, -50%);

    padding: 1rem;
    opacity: 0.8;
    @media (max-width: 800px) {
        width:100%;
        padding:1rem 0;
        border-bottom: 5px solid #333333;
        
        top: 0;
        left:0 ;
        transform: translate(0%, 0%);
        margin-top: -4px;
        border-radius: 0;
        position: inherit;
        opacity:1;
  }
`;


class Content extends Component {
    state = {  }
    render() { 
        return (<main>
            <WelcomeSection>
                
                <StartImg src={image} alt='Taken by Jessica Lewis from Pexels'></StartImg>
                <TransperentDiv className='div-text'>
                  <WelcomeText className='wel-text'>Welcome to My Portfolio</WelcomeText>  
                </TransperentDiv>
            </WelcomeSection>
            <section className='section-content'>
                
                <div className='div-content'>
                
                <p className='main-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum dolorem ipsum necessitatibus velit placeat vero sequi, et culpa tempore iusto ratione quam, inventore, architecto deserunt laudantium amet accusantium modi?</p>   
                </div>
                
            </section>
            <div className='color-div'>
                <h3>Projects</h3>
            <p id='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ut eveniet eligendi et, tempore tenetur laboriosam.</p>
            <section className='section-img'>
                <div>
                    <Link className='img-link' to='/applications'>
                            <img src={img1} alt="link to api" />
                            <h5 className='link-title'>Projects</h5>
                    </Link>
                    
                </div>
                <div>
                        <Link className='img-link' to='/about'>
                            <img src={img2} alt="link to about"/>
                            <h5 className='link-title'>About me</h5>
                        </Link>
                    
                </div>
            </section>
            </div>
            
        </main>  );
    }
}
 
export default Content;