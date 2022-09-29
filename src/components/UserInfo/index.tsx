import { Grid, Card, CardContent, CircularProgress, IconButton, Typography } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update'

import { useGetWeatherDataCurrentQuery } from '../../context/api'
import UserData from './UserData'
import WeatherData from './WeatherData'
import WeatherInfo from './WeatherInfo'

import moment from 'moment'
import { User_I } from '../../types/users.types'

interface props {
  user: User_I
}
const UserInfo = ({ user }: props): JSX.Element => {
  const { data, isLoading, refetch } = useGetWeatherDataCurrentQuery({
    lat: user.lat,
    lon: user.lon
  })

  if (isLoading || data === undefined) {
    return (
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <CircularProgress sx={{ margin: '32px 32px' }} />
      </Grid>
    )
  }

  return (
    <Grid item xs={12} sm={6} md={5} lg={4}>
      <Card>
        <CardContent>
          <UserData user={user} />
          <WeatherData weatherData={data} />
          <IconButton onClick={() => refetch()}>
            <UpdateIcon />
            <Typography variant="caption" marginLeft={1} color="GrayText">
              Weather updated {moment.unix(data.dt).fromNow()}
            </Typography>
          </IconButton>
          <WeatherInfo weatherData={data} />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserInfo
