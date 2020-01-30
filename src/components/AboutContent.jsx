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
@media (max-width:800px){
padding:0;   
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

const AboutContent = () => {
    return ( 
        <main>

            <section className='about-section'>
                
                <DivContent>
                    <PaddingDiv>
                        <ImgStyle src={img1} alt='about me'></ImgStyle>
                    </PaddingDiv>       
                </DivContent> 
                <DivContent>
                    <PaddingDiv id='center-text'>
                        <AboutTitle FontSize='2rem' id='title-page'>About me</AboutTitle>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quis nihil laborum. Aut quia, laborum repudiandae molestiae delectus placeat ullam cumque sequi quisquam repellendus culpa autem dignissimos perferendis alias a!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem, libero officiis voluptas accusantium, atque ullam quia obcaecati numquam nisi incidunt, deleniti minus! Autem nemo error accusantium voluptatibus neque illum?</p>
                    </PaddingDiv>
       
                </DivContent>      
            </section>
            <section className='second-section'>
            
                   <DivWidth>
                       <PaddingDiv id='skill-text'>
                        <AboutTitle FontSize='1.8rem'>My Skills</AboutTitle>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam excepturi, esse doloribus reiciendis vel dolorem repellat repellendus.</p>
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
 
export default AboutContent;