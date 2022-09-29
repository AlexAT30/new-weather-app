import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Title from '../components/Title'
import UserInfo from '../components/UserInfo'
import Forecast from '../components/UserInfo/Forecast'
import { RootState } from '../context/store'
import { NOTFOUND_PATH } from '../router/paths'

const DetailView = (): JSX.Element => {
  const params = useParams()
  const SEARCH_USER: number = parseInt(params.id as string) ?? 0
  const user = useSelector((state: RootState) =>
    state.app_state.users.find((user) => user.id === SEARCH_USER)
  )

  if (user === undefined) {
    return <Navigate to={NOTFOUND_PATH} />
  }
  return (
    <Grid container spacing={2} marginY={2}>
      <Title text={'Detail view'} />
      <UserInfo user={user} />
      <Forecast user={user} />
    </Grid>
  )
}

export default DetailView
