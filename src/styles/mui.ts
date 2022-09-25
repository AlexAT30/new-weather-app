import { createTheme } from '@mui/material/styles'
import { pink } from '@mui/material/colors'

export const primaryColorDark = pink[200]
export const primaryColorLight = pink[400]

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColorDark
    }
  }
})
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColorLight
    },
    background: {
      default: '#EEECEC'
    }
  }
})
