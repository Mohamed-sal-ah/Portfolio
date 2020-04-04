import React from 'react';
import styled from 'styled-components';
import img1 from './images/aboutImg.jpg';
import './style/about.scss'


const AboutTitle = styled.h3`
font-size:${props => props.FontSize};
font-family:'Montserrat', sans-serif;
text-transform:uppercase;
`;
const DivContent = styled.div`
   width:50%;
   padding:0 2rem;  
   text-align:center;
    @media (max-width:800px){
     width:100%;
     padding:0;
 }
`;
const ImgStyle = styled.img`
width:100%;
@media (max-width:800px){
    margin-top: -40vw;
}
`;

const PaddingDiv = styled.div`
text-align: center;
padding:${props => props.Padding};
@media (max-width:800px){
padding:${props => props.MobilePadding};  
}
`;
const IconDiv = styled.div`
justify-content: space-between;
  width: 100%;
  text-align: center;
  align-items: center;
  @media (max-width:800px){
    justify-content: space-between;
  }
`;
const DivWidth = styled.div`
width:50%;
padding:1rem;
@media (max-width:800px){
    width:100%;
    padding:0;
}
`;

const DivBar = styled.div`
width:${props => props.BarWidth};
background-color:${props => props.BarColor};
`

const About = () => {
    return ( 
        <main>

            <section className='about-section'>              
                <DivContent>
                    <PaddingDiv Padding='0' MobilePadding='0'>
                        <ImgStyle src={img1} alt='about me'></ImgStyle>
                    </PaddingDiv>       
                </DivContent> 
                <DivContent>
                    <PaddingDiv Padding='25% 0' MobilePadding='0' id='center-text'>
                        <AboutTitle FontSize='2rem' id='title-page'>About me</AboutTitle>
                <p> Hello my name is Mohamed Salah Ahmed and i have been interested in programming and also tried other languages and is not so fun as experience as developing website. I have typically worked on an individual and teamwork project and these have evolved my experience with programming.</p>
                    </PaddingDiv>
       
                </DivContent>      
            </section>
            <section className='second-section'>
            
                   <DivWidth>
                       <PaddingDiv Padding='0 1rem' MobilePadding='0 1rem'>
                        <AboutTitle FontSize='1.8rem'>My Skills</AboutTitle>
                   <p>I Have good skills on the three languages for web development these are HTML, CSS and JavaScript.</p>
                       </PaddingDiv> 
                      
                        
                </DivWidth> 
                 <DivWidth className='row-div'>
                         <IconDiv className='icon-div'>
                        <h2>HTML5</h2>
                        <div className='progress'>
                            <DivBar BarColor='#f26524' BarWidth='95%' className='pr-bar'></DivBar>
                        </div>
                           </IconDiv>
                        <IconDiv className='icon-div'>                      
                            <h2>CSS3</h2>
                            <div className='progress'>
                            <DivBar BarColor='#2465f1' BarWidth='95%' className='pr-bar'></DivBar>
                        </div>  
                           </IconDiv>
                        <IconDiv className='icon-div'>
                            <h2>JavaScript</h2>
                            <div className='progress'>
                            <DivBar BarColor='#f7e018' BarWidth='85%' className='pr-bar'></DivBar>
                        </div>
                            </IconDiv>    
                           </DivWidth>  
            </section>
         
        </main>

     );
}
 
export default About;