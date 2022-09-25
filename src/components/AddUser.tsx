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

const AddUser = (): JSX.Element => {
  const theme = useSelector((state: RootState) => state.config.theme)
  return (
    <Grid item xs={4}>
      <Card sx={{ height: 200 }}>
        <CardActionArea sx={{ height: '100%' }}>
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
