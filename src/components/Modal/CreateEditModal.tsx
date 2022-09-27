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
import { getGeoDataByCity } from '../../utils/geo.utils'
import useError from '../../hooks/useError'
import { GeoData_I, User_I } from '../../types/users.types'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, editUser } from '../../context/slices/appSlice'
import { RootState } from '../../context/store'

interface props {
  edit?: boolean
  open: number
  setOpen: React.Dispatch<React.SetStateAction<number>>
}
const CreateEditModal = ({
  edit = false,
  open,
  setOpen
}: props): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const cityError = useError()
  const usernameError = useError()

  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.app_state.users)

  const checkNotEmpty = (): boolean => {
    if (username === '') {
      usernameError.setError('No puedes dejar el campo vacío')
      return false
    }
    if (city === '') {
      cityError.setError('No puedes dejar el campo vacío')
      return false
    }
    return true
  }

  const searchCity = async (): Promise<GeoData_I | null> => {
    const geoData = await getGeoDataByCity(city)
    if (geoData === null) {
      setCity('')
      cityError.setError('No se puede encontrar la ciudad')
      return null
    }
    return geoData
  }

  const handleEditUser = async (): Promise<void> => {
    const geoData = await searchCity()
    if (geoData === null) return

    const editedUser: User_I = {
      id: open,
      username,
      city: geoData.name,
      state: geoData.state,
      country: geoData.country,
      lat: geoData.lat,
      lon: geoData.lon
    }

    dispatch(editUser(editedUser))
    setUsername('')
    setCity('')
    setOpen(0)
  }
  const handleCreateUser = async (): Promise<void> => {
    const geoData = await searchCity()
    if (geoData === null) return
    console.log(geoData)
    const newUser: User_I = {
      id: users.length > 0 ? users.length + 1 : 1,
      username,
      city: geoData.name,
      state: geoData.state,
      country: geoData.country,
      lat: geoData.lat,
      lon: geoData.lon
    }
    dispatch(createUser(newUser))
    setUsername('')
    setCity('')
    setOpen(0)
  }

  const handleCreateEditUser = (): void => {
    const notEmpty = checkNotEmpty()
    if (!notEmpty) return
    edit && handleEditUser()
    !edit && handleCreateUser()
  }
  const handleCloseModal = (): void => {
    setOpen(0)
  }
  return (
    <ModalLayout open={open}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          {edit
            ? `Escriba los nuevos datos del usuario ${open}`
            : 'Rellena los campos para crear un nuevo usuario'}
        </Typography>
        <Grid container gap={2} flexDirection="column">
          <TextField
            label="Nombre de usuario"
            size="small"
            value={username}
            error={usernameError.error}
            helperText={usernameError.error && usernameError.msg}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Ciudad"
            size="small"
            value={city}
            error={cityError.error}
            helperText={cityError.error && cityError.msg}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="text" color="primary" onClick={handleCreateEditUser}>
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
