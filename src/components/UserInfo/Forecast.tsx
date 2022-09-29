import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Divider,
  Button,
  Pagination
} from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update'
import { useState, useEffect } from 'react'
import { useGetWeatherDataForecastQuery } from '../../context/api'
import { User_I } from '../../types/users.types'
import ForecastInfo from './ForecastInfo'

interface props {
  user: User_I
}
const Forecast = ({ user }: props): JSX.Element => {
  const [page, setPage] = useState(1)
  const [showingForecast, setShowingForecast] = useState<JSX.Element>(<></>)
  const { data, isLoading, refetch } = useGetWeatherDataForecastQuery({
    lat: user.lat,
    lon: user.lon
  })

  useEffect(() => {
    if (data !== undefined) {
      const forecast = data.list
      const currentForecastPage = (
        <>
          <ForecastInfo weatherData={forecast[(page - 1) * 3]} />
          <Divider sx={{ margin: '16px 0' }} />
          <ForecastInfo weatherData={forecast[(page - 1) * 3 + 1]} />
          <Divider sx={{ margin: '16px 0' }} />
          <ForecastInfo weatherData={forecast[(page - 1) * 3 + 2]} />
        </>
      )
      setShowingForecast(currentForecastPage)
    }
  }, [page, data])

  if (isLoading || data === undefined) {
    return (
      <Grid item xs={12} sm={6} md={7} lg={8}>
        <CircularProgress sx={{ margin: '32px 32px' }} />
      </Grid>
    )
  }

  return (
    <Grid item xs={12} sm={6} md={7} lg={8}>
      <Grid container flexDirection="column" gap={2} alignItems="center">
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button variant="contained" startIcon={<UpdateIcon />} onClick={() => refetch()}>
                Update forecast
              </Button>
            </CardActions>
            {showingForecast}
          </CardContent>
        </Card>
        <Pagination
          size='small'
          count={13}
          color="primary"
          page={page}
          onChange={(_e, value) => setPage(value)}
        />
      </Grid>
    </Grid>
  )
}

export default Forecast
