import React, { Component } from 'react';
import styled from 'styled-components'
import imgHead from './images/app-img.jpg';
import './style/app.scss';

//metaweather

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

//www.metaweather.com
const API = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/906057'


class Applications extends Component {
    constructor(props) {
        super(props);
        this.ConvertToMetric=this.ConvertToMetric.bind(this);
        this.state = { weatherdata : '' }
    }
    ConvertToMetric (speed) {
        const MetricWind = speed*1.609344;
        const MeterWind = MetricWind/3.6
        return Math.floor(MeterWind);
    }
    componentDidMount () {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({weatherdata:data.consolidated_weather[0]}))
    }
    render() { 
        let weatherData;
        //const divData = <div className='api-box'><div className='box'></div> </div>;
        
        if (this.state.weatherdata) {
            const data = this.state.weatherdata
            const imgsrc = 'https://www.metaweather.com/static/img/weather/'+data.weather_state_abbr+'.svg';
        weatherData = <div className='weather'>
            <div className='weather-main'>
            <img id='weather-img' src={imgsrc} alt='weather-symbol'/>
            <p id='weather-text'>{Math.floor(data.the_temp)}°C</p>
            </div>
        <p>Max : {Math.floor(data.max_temp)}°C</p>
        <p>Min : {Math.floor(data.min_temp)}°C</p>
        <p>Wind speed: {this.ConvertToMetric(data.wind_speed)}m/s in {data.wind_direction_compass} direction</p>
            </div>;
        }
        else {
            weatherData= <div><p>Loading...</p></div>
        }
        
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
                    {weatherData} 
                </div>
               
            </section>
        </main>  );
    }
}
 
export default Applications;
