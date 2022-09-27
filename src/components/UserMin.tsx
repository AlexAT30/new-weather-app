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
import { User_I } from '../types/users.types'

interface Props {
  user: User_I
  setDeleteModal: React.Dispatch<React.SetStateAction<number>>
  setEditModal: React.Dispatch<React.SetStateAction<number>>
}

const UserMin = ({
  user,
  setDeleteModal,
  setEditModal
}: Props): JSX.Element => {
  const handleEditModal = (): void => {
    setEditModal(user.id)
  }
  const handleDeleteModal = (): void => {
    setDeleteModal(user.id)
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: 225 }}>
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            Id: {user.id}
          </Typography>
          <Typography variant="h6">{user.username}</Typography>
          <Typography variant="subtitle1" color="GrayText">
            {user.city}, {user.state} - {user.country}
          </Typography>
          <Typography variant="body1">Latitud: {user.lat}</Typography>
          <Typography variant="body1">Longitud: {user.lon}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={DETAIL_PATH.replace(':id', `${user.id}`)}
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
