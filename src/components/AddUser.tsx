import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
  Box
} from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { primaryColorDark, primaryColorLight } from '../styles/mui'
import { useSelector } from 'react-redux'
import { RootState } from '../context/store'
import { ThemeType } from '../types/config.types'

interface props {
  setCreateModal: React.Dispatch<React.SetStateAction<number>>
}
const AddUser = ({ setCreateModal }: props): JSX.Element => {
  const theme = useSelector((state: RootState) => state.config.theme)
  const handleCreateModal = (): void => {
    setCreateModal(1)
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: 225 }}>
        <CardActionArea sx={{ height: '100%' }} onClick={handleCreateModal}>
          <CardContent>
            <Typography variant="h6" align="center">
              Crear usuario
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
              <Avatar
                sx={{
                  bgcolor:
                    theme === ThemeType.light
                      ? primaryColorLight
                      : primaryColorDark
                }}
              >
                <PersonAddIcon />
              </Avatar>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default AddUser
