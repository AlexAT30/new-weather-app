import ModalLayout from './ModalLayout'
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@mui/material'
import { useState } from 'react'
import { getGeoData } from '../../utils/geo.utils'
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
  const [useCurrent, setUseCurrent] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const cityError = useError()
  const usernameError = useError()

  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.app_state.users)

  const checkNotEmpty = (): boolean => {
    if (username === '') {
      usernameError.setError('No puedes dejar el campo vacío')
      return false
    }
    if (city === '' && !useCurrent) {
      cityError.setError('No puedes dejar el campo vacío')
      return false
    }
    return true
  }

  interface coords {
    lon: number
    lat: number
  }

  const getCoords = async (): Promise<coords> => {
    const pos: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    return {
      lon: pos.coords.longitude,
      lat: pos.coords.latitude
    }
  }

  const searchCity = async (): Promise<GeoData_I | null> => {
    let coords: coords = {
      lat: 0,
      lon: 0
    }
    if (useCurrent) {
      coords = await getCoords()
    }
    const geoData = await getGeoData(
      useCurrent ? `${coords.lat},${coords.lon}` : city
    )
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
      state: geoData.region,
      country: geoData.country,
      lat: geoData.lat,
      lon: geoData.lon
    }

    dispatch(editUser(editedUser))
    setUsername('')
    setCity('')
    setOpen(0)
    setIsLoading(false)
  }
  const handleCreateUser = async (): Promise<void> => {
    const geoData = await searchCity()
    if (geoData === null) return
    const newUser: User_I = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      username,
      city: geoData.name,
      state: geoData.region,
      country: geoData.country,
      lat: geoData.lat,
      lon: geoData.lon
    }
    dispatch(createUser(newUser))
    setUsername('')
    setCity('')
    setOpen(0)
    setIsLoading(false)
  }

  const handleCreateEditUser = (): void => {
    setIsLoading(true)
    const notEmpty = checkNotEmpty()
    if (!notEmpty) return
    edit && handleEditUser()
    !edit && handleCreateUser()
    // setIsLoading(false)
  }
  const handleCloseModal = (): void => {
    setOpen(0)
  }
  return (
    <ModalLayout open={open}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          {edit
            ? `Write the new data for user ${open}`
            : 'Fill in the fields to create a user'}
        </Typography>
        <Grid container gap={2} flexDirection="column">
          <TextField
            label="Username"
            size="small"
            value={username}
            error={usernameError.error}
            helperText={usernameError.error && usernameError.msg}
            onChange={(e) => setUsername(e.target.value)}
          />
          {!useCurrent && (
            <TextField
              label="City"
              size="small"
              value={city}
              error={cityError.error}
              helperText={cityError.error && cityError.msg}
              onChange={(e) => setCity(e.target.value)}
            />
          )}
          <FormControlLabel
            label="Use current location"
            control={
              <Checkbox
                checked={useCurrent}
                onChange={(e) => setUseCurrent(e.target.checked)}
              />
            }
          />
        </Grid>
      </CardContent>
      <CardActions>
        {!isLoading && (
          <>
            <Button
              variant="text"
              color="primary"
              onClick={handleCreateEditUser}
            >
              Confirm
            </Button>
            <Button variant="text" color="primary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </>
        )}
        {isLoading && (
          <CircularProgress sx={{ margin: 'auto', marginBottom: '12px' }} />
        )}
      </CardActions>
    </ModalLayout>
  )
}

export default CreateEditModal
