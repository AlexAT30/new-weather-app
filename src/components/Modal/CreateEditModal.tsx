import ModalLayout from './ModalLayout'
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid,
  Typography
} from '@mui/material'

interface props {
  title: string
  open: number
  setOpen: React.Dispatch<React.SetStateAction<number>>
}
const CreateEditModal = ({ title, open, setOpen }: props): JSX.Element => {
  const handleEditUser = (): void => {
    // Eliminar usuario
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
          <TextField label="Nombre de usuario" size="small" />
          <TextField label="Ciudad" size="small" />
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
