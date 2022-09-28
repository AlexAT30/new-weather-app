import { WeatherData_I } from '../../types/weather.types'
import { Grid } from '@mui/material'
import WindPowerIcon from '@mui/icons-material/WindPower'
import WaterIcon from '@mui/icons-material/Water'
import CloudIcon from '@mui/icons-material/Cloud'
import CompressIcon from '@mui/icons-material/Compress'
import IconText from './IconText'

interface props {
  weatherData: WeatherData_I
}
const WeatherInfo = ({ weatherData }: props): JSX.Element => {
  return (
    <Grid container justifyContent="center">
      <IconText>
        <WindPowerIcon fontSize="small" /> {weatherData.wind.speed} m/s
      </IconText>
      <IconText>
        <WaterIcon fontSize="small" /> {weatherData.main.humidity}%
      </IconText>
      <IconText>
        <CloudIcon fontSize="small" /> {weatherData.clouds.all}%
      </IconText>
      <IconText>
        <CompressIcon fontSize="small" /> {weatherData.main.pressure} hPa
      </IconText>
    </Grid>
  )
}

export default WeatherInfo
