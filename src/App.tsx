import { useSelector } from 'react-redux'
import { RootState } from './context/store'
// Components
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './styles/mui'
import Router from './router'
import { CssBaseline } from '@mui/material'
import { ThemeType } from './types/config.types'

const App = (): JSX.Element => {
  const theme = useSelector((state: RootState) => state.config.theme)
  return (
    <ThemeProvider theme={theme === ThemeType.light ? lightTheme : darkTheme}>
      <CssBaseline>
        <Router />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
