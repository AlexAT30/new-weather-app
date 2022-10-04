import { AppBar, Box, Toolbar, Switch, Typography, Button } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { REDUX_KEY, RootState } from '../context/store'
import { ThemeType } from '../types/config.types'
import { changeTheme } from '../context/slices/configSlice'
import { Link } from 'react-router-dom'
import { DEFAULT_PATH } from '../router/paths'

const NavBar = (): JSX.Element => {
  const theme = useSelector((state: RootState) => state.config.theme)
  const dispatch = useDispatch()

  const handleChangeTheme = (): void => {
    if (theme === ThemeType.light) {
      dispatch(changeTheme(ThemeType.dark))
      return
    }
    dispatch(changeTheme(ThemeType.light))
  }

  const handleDeleteCache = (): void => {
    window.localStorage.removeItem(`persist:${REDUX_KEY}`)
    window.location.reload()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            sx={{ flexGrow: 1, textDecoration: 'none' }}
            component={Link}
            to={DEFAULT_PATH}
          >
            Weather APP
          </Typography>
          {theme === ThemeType.light ? <DarkModeIcon /> : <LightModeIcon />}
          <Switch
            checked={theme !== ThemeType.light}
            onClick={handleChangeTheme}
          />
          <Button variant='text' color='inherit' startIcon={<DeleteIcon />} onClick={handleDeleteCache}>
            Delete data
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
