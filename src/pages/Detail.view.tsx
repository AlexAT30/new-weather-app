import Grid from '@mui/material/Grid'
import UserInfo from '../components/UserInfo'
const DetailView = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <UserInfo />
    </Grid>
  )
}

export default DetailView
