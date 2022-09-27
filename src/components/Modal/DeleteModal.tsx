import ModalLayout from './ModalLayout'
import { CardContent, CardActions, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../context/slices/appSlice'

interface props {
  open: number
  setOpen: React.Dispatch<React.SetStateAction<number>>
}
const DeleteModal = ({ open, setOpen }: props): JSX.Element => {
  const dispatch = useDispatch()
  const handleDeleteUser = (): void => {
    dispatch(deleteUser(open))
    setOpen(0)
  }
  const handleCloseModal = (): void => {
    setOpen(0)
  }
  return (
    <ModalLayout open={open}>
      <CardContent>
        <Typography variant="h6" color="initial" align="center">
          ¿Realmente deseas eliminar al usuario {open}?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" color="primary" onClick={handleDeleteUser}>
          Confirmar
        </Button>
        <Button variant="text" color="primary" onClick={handleCloseModal}>
          Cancelar
        </Button>
      </CardActions>
    </ModalLayout>
  )
}

export default DeleteModal
