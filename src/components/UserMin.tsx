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
  city: string
  lat: string
  lon: string
  setDeleteModal: React.Dispatch<React.SetStateAction<number>>
  setEditModal: React.Dispatch<React.SetStateAction<number>>
}

const UserMin = ({
  id,
  username,
  city,
  lat,
  lon,
  setDeleteModal,
  setEditModal
}: Props): JSX.Element => {
  const handleEditModal = (): void => {
    setEditModal(id)
  }
  const handleDeleteModal = (): void => {
    setDeleteModal(id)
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: 225 }}>
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            Id: {id}
          </Typography>
          <Typography variant="h6">{username}</Typography>
          <Typography variant="subtitle1" color="GrayText">
            {city}
          </Typography>
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
          <Button size="small" onClick={handleEditModal}>
            Editar
          </Button>
          <Button size="small" onClick={handleDeleteModal}>
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default UserMin
