import { Navigate, useParams } from 'react-router-dom'
import { Grid, Card, CardContent, CircularProgress } from '@mui/material'

import { WeatherData_I } from '../../types/weather.types'
import { useGetWeatherDataCurrentQuery } from '../../context/api'
import { useSelector } from 'react-redux'
import { RootState } from '../../context/store'

import UserData from './UserData'
import WeatherData from './WeatherData'
import WeatherInfo from './WeatherInfo'

import { NOTFOUND_PATH } from '../../router/paths'

const UserInfo = (): JSX.Element => {
  const params = useParams()
  const SEARCH_USER: number = parseInt(params.id as string) ?? 0
  const user = useSelector((state: RootState) =>
    state.app_state.users.find((user) => user.id === SEARCH_USER)
  )

  if (user === undefined) {
    return <Navigate to={NOTFOUND_PATH} />
  }

  const { data, isLoading } = useGetWeatherDataCurrentQuery({
    lat: user.lat,
    lon: user.lon
  })

  if (isLoading) {
    return (
      <Grid item xs={11} sm={7} md={5} lg={4}>
        <CircularProgress sx={{ margin: '32px 32px' }} />
      </Grid>
    )
  }

  return (
    <Grid item xs={11} sm={7} md={6} lg={4}>
      <Card>
        <CardContent>
          <UserData user={user} />
          <WeatherData weatherData={data as WeatherData_I} />
          <WeatherInfo weatherData={data as WeatherData_I} />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserInfo
