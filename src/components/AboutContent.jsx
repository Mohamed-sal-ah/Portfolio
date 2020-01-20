import React from 'react';
import styled from 'styled-components';
import img1 from './images/aboutImg.jpg'




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
            
                   <div>
                       <PaddingDiv id='skill-text'>
                        <AboutTitle FontSize='1.8rem'>My Skills</AboutTitle>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam excepturi, esse doloribus reiciendis vel dolorem repellat repellendus.</p>
                       </PaddingDiv> 
                      
                        
                </div> 
                 <div className='row-div'>
                         <div className='icon-div'>
                        <h2>HTML5</h2>
                           </div>
                        <div className='icon-div'>                      
                            <h2>CSS3</h2>  
                           </div>
                        <div className='icon-div'>
                            <h2>JavaScript</h2>
                            </div>    
                           </div>  
            </section>
         
        </main>

     );
}
 
export default AboutContent;