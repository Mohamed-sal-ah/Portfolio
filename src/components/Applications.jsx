import React, { Component } from 'react';
import styled from 'styled-components'
import imgHead from './images/weather-img.jpg';
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
const ContentTilte = styled.h2`
text-transform: uppercase;
`;

const WeatherImg = styled.img`
    height: 7rem;
    width: 7rem;
`;

const Temptext = styled.p`
font-size: 2.5rem;
padding-left: 0.5rem;
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
        if (this.state.weatherdata) {
            const data = this.state.weatherdata
            const imgsrc = 'https://www.metaweather.com/static/img/weather/'+data.weather_state_abbr+'.svg';
        weatherData = <div className='weather'>
            <div className='weather-main'>
            <WeatherImg id='weather-img' src={imgsrc} alt='weather-symbol'/>
            <Temptext id='weather-text'>{Math.floor(data.the_temp)}°C</Temptext>
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
                        <ContentTilte id='api-title'>api</ContentTilte>
                        <p>This Api application is the todays weather with temperature and wind speed and direction.</p>
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
