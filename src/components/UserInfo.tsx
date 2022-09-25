import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material'
const UserInfo = (): JSX.Element => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            Id: 1
          </Typography>
          <Typography variant="h6">Nombre del usuario</Typography>
          <Typography variant="subtitle1" color="GrayText">
            Ciudad
          </Typography>
          <Typography variant="caption" color="GrayText">
            Lat: 123 Lon: 123
          </Typography>
          <Grid container alignItems="center" mt={2} gap={1}>
            <Avatar>I</Avatar>
            <Typography variant="h6">25°</Typography>
          </Grid>
          <Typography variant="body1" mt={2}>
            Velocidad del viento
          </Typography>
          <Typography variant="body1">Humedad</Typography>
          <Grid container></Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserInfo
