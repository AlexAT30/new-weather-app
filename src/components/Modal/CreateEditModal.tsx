import ModalLayout from './ModalLayout'
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../../context/slices/appSlice'

interface props {
  title: string
  open: number
  setOpen: React.Dispatch<React.SetStateAction<number>>
}
const CreateEditModal = ({ title, open, setOpen }: props): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const dispatch = useDispatch()
  const handleEditUser = (): void => {
    dispatch(
      editUser({
        id: open,
        username,
        city,
        lat: '123',
        lon: '123'
      })
    )
    setOpen(0)
  }
  const handleCloseModal = (): void => {
    setOpen(0)
  }
  return (
    <ModalLayout open={open}>
      <CardContent>
        <Typography variant="h6" color="initial" mb={2}>
          {title}
        </Typography>
        <Grid container gap={2} flexDirection="column">
          <TextField label="Nombre de usuario" size="small" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Ciudad" size="small" value={city} onChange={(e) => setCity(e.target.value)} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="text" color="primary" onClick={handleEditUser}>
          Confirmar
        </Button>
        <Button variant="text" color="primary" onClick={handleCloseModal}>
          Cancelar
        </Button>
      </CardActions>
    </ModalLayout>
  )
}

export default CreateEditModal
