import { Grid, Avatar, Typography } from '@mui/material'
import { WeatherData_I } from '../../types/weather.types'
import { iconUrl, tempTransform } from '../../utils/weather.utils'

interface props {
  weatherData: WeatherData_I
}
const WeatherData = ({ weatherData }: props): JSX.Element => {
  return (
    <Grid container alignItems="center" mt={2} gap={1}>
      <Avatar
        sx={{ width: 64, height: 64 }}
        src={iconUrl(weatherData.weather[0].icon)}
        alt="weather-icon"
      />
      <Typography variant="h6">
        {tempTransform(weatherData.main.temp)}
      </Typography>
      <Typography variant="h6">{weatherData.weather[0].description}</Typography>
    </Grid>
  )
}

export default WeatherData
