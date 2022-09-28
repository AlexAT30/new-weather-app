import Grid from '@mui/material/Grid'
import Title from '../components/Title'
import UserInfo from '../components/UserInfo'
const DetailView = (): JSX.Element => {
  return (
    <Grid container spacing={2} marginY={2}>
      <Title text={'Detail view'} />
      <UserInfo />
    </Grid>
  )
}

export default DetailView
