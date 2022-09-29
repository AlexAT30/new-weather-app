import { Grid, Typography } from '@mui/material'
import { WeatherData_I } from '../../types/weather.types'
import moment from 'moment'
import WeatherData from './WeatherData'
import WeatherInfo from './WeatherInfo'

interface props {
  weatherData: WeatherData_I
}
const ForecastInfo = ({ weatherData }: props): JSX.Element => {
  const setDate = (): string => {
    if (moment.unix(weatherData.dt).fromNow().includes('day')) {
      return moment.unix(weatherData.dt).format('llll')
    }
    return moment.unix(weatherData.dt).fromNow()
  }

  return (
    <Grid container>
      <Typography variant="caption" color="GrayText" component={Grid} item xs={12}>
        {setDate()}
      </Typography>
      <Grid item xs={12} md={6}>
        <WeatherData weatherData={weatherData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeatherInfo weatherData={weatherData} />
      </Grid>
    </Grid>
  )
}

export default ForecastInfo
