import React, { Component } from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import NavBar from '../Navbar'
class ApplicationPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    ConvertToMetric(speed) {
        const MetricWind = speed * 1.609344;
        const MeterWind = MetricWind / 3.6
        return Math.floor(MeterWind);
    }
    render() {
        let weatherData;
        if (this.props.weatherdata) {
            const data = this.props.weatherdata
            const imgsrc = 'https://www.metaweather.com/static/img/weather/' + data.weather_state_abbr + '.svg';
            weatherData = <div>
                <STYLED.WeatherDiv>
                    <STYLED.WeatherImg src={imgsrc} alt='weather-symbol' />
                    <STYLED.WeatherText>{Math.floor(data.the_temp)}°C</STYLED.WeatherText>
                </STYLED.WeatherDiv>
                <STYLED.WeatherData>Max : {Math.floor(data.max_temp)}°C</STYLED.WeatherData>
                <STYLED.WeatherData>Min : {Math.floor(data.min_temp)}°C</STYLED.WeatherData>
                <STYLED.WeatherData>Wind speed: {this.ConvertToMetric(data.wind_speed)}m/s in {data.wind_direction_compass} direction</STYLED.WeatherData>
            </div>;
        }
        else {
            weatherData = <div><STYLED.ArticleText>Loading...</STYLED.ArticleText></div>
        }
        let font;
        let color;
        let title;
        let shadow;
        if (this.props.pageTheme === 'dark') {
            font = 'CDCDCB'
            title = 'ffffff'
            color = '000000'
            shadow = '6C6C6C'
        } else {
            font = '6C6C6C'
            title = '000000'
            color = 'FFFFFF'
            shadow = 'CDCDCB'
        }
        const theme = {
            fontColor: `#${font}`,
            backGround: `#${color}`,
            titleColor: `#${title}`,
            shadowColor : `#${shadow}`
        }
        return (
            <>
                <NavBar changeTheme={this.props.onForward} pageTheme={this.props.pageTheme} />
                <ThemeProvider theme={theme}>
                    <STYLED.FullPage>
                        <STYLED.FlexBox>
                            <STYLED.ArticleBox>
                                <STYLED.ArticleTitle>Projects</STYLED.ArticleTitle>
                                <STYLED.ArticleText>I have worked on a project to develop this page.
                                Click about me if you want to know more about me and click on project to see the API weather application.
                                I have developed todays weather in Stockholm from metaweather API.
                            </STYLED.ArticleText>
                            </STYLED.ArticleBox>
                            <STYLED.ArticleBox>
                                <STYLED.BoxShadowDiv>
                                <STYLED.WeatherTitle>Weather API</STYLED.WeatherTitle>
                                {weatherData}
                                </STYLED.BoxShadowDiv>
                            </STYLED.ArticleBox>
                        </STYLED.FlexBox>
                    </STYLED.FullPage>
                </ThemeProvider>
            </>

        )
    }

}

export default ApplicationPage
