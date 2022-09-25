import { Grid, Typography } from '@mui/material'

interface props {
  text: string
}
const Title = ({ text }: props): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5">{text}</Typography>
    </Grid>
  )
}

export default Title
