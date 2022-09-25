import ModalLayout from './ModalLayout'
import { CardContent, CardActions, Typography, Button } from '@mui/material'

interface props {
  open: number
  setOpen: React.Dispatch<React.SetStateAction<number>>
}
const DeleteModal = ({ open, setOpen }: props): JSX.Element => {
  const handleDeleteUser = (): void => {
    // Eliminar usuario
    setOpen(0)
  }
  const handleCloseModal = (): void => {
    setOpen(0)
  }
  return (
    <ModalLayout open={open}>
      <CardContent>
        <Typography variant="h6" color="initial" align="center">
          ¿Realmente deseas eliminar a Nombre de usuario?
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
