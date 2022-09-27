import { AppBar, Box, Toolbar, Switch, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../context/store'
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
