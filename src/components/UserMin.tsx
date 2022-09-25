import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { DETAIL_PATH } from '../router/paths'

interface Props {
  id: number
  username: string
  lat: string
  lon: string
  setDeleteModal: React.Dispatch<React.SetStateAction<number>>
}

const UserMin = ({
  id,
  username,
  lat,
  lon,
  setDeleteModal
}: Props): JSX.Element => {
  return (
    <Grid item xs={4}>
      <Card sx={{ height: 200 }}>
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            Id: {id}
          </Typography>
          <Typography variant="h6">{username}</Typography>
          <Typography variant="body1">Latitud: {lat}</Typography>
          <Typography variant="body1">Longitud: {lon}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={DETAIL_PATH.replace(':id', `${id}`)}
          >
            Ver
          </Button>
          <Button size="small">Editar</Button>
          <Button
            size="small"
            onClick={() => {
              setDeleteModal(id)
            }}
          >
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default UserMin
