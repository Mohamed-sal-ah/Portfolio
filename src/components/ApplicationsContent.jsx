import React, { Component } from 'react';
import styled from 'styled-components'
import imgHead from './images/app-img.jpg';


const ImgHead = styled.img`
width:100%;
`;
const TtileText = styled.h3`
padding:1rem;
  margin:0;
  width:100%;
  text-align:center;
  font-size:2rem;
  text-transform: uppercase;
`;
const H2text = styled.h2`
text-transform: uppercase;
`

class ApplicationsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<main>
            <ImgHead src={imgHead} alt="header img" />
            <section>
                <TtileText id='title-text'>Applications</TtileText>
            </section>
            <section id='api-section'>
                <div className='api-box'>
                    <div>
                        <H2text id='api-title'>api</H2text>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem, architecto perferendis a doloribus modi quaerat quos voluptate quae ducimus repudiandae! Nemo beatae minus</p>
                    </div>
                </div>
                <div className='api-box'>
                    <div className='box'></div>
                </div>
            </section>
        </main>  );
    }
}
 
export default ApplicationsContent;

/*
const ApplicationsContent = () => {
    return ( <main> 
        <ImgHead src={imgHead} alt="header img"/>
        <section>
               <h3 id='title-text'>Applications</h3> 
        </section>
       <section id='api-section'>
           <div className='api-box'>
               <div>
               <h2>weather api</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem, architecto perferendis a doloribus modi quaerat quos voluptate quae ducimus repudiandae! Nemo beatae minus</p>    
               </div>
            
           </div>
            <div className='api-box'> 
            <div className='box'></div>
           </div>
       </section>
    </main> );
}
 
export default ApplicationsContent;
*/