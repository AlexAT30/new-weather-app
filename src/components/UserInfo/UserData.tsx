import { Typography } from '@mui/material'
import { User_I } from '../../types/users.types'

interface props {
  user: User_I
}
const UserData = ({ user }: props): JSX.Element => {
  return (
    <>
      <Typography variant="caption" color="text.secondary">
        Id: {user.id}
      </Typography>
      <Typography variant="h6">{user.username}</Typography>
      <Typography variant="subtitle1" color="GrayText">
        {user.city}, {user.state} - {user.country}
      </Typography>
      <Typography variant="caption" color="GrayText">
        Lat: {user.lat}, Lon: {user.lon}
      </Typography>
    </>
  )
}

export default UserData
