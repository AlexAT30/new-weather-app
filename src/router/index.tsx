import { Container } from '@mui/material'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BASE_PATH, DEFAULT_PATH, DETAIL_PATH, NOTFOUND_PATH } from './paths'
// Views
import DetailView from '../pages/Detail.view'
import NotFoundView from '../pages/NotFound.view'
import UsersView from '../pages/Users.view'
import NavBar from '../components/NavBar'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path={BASE_PATH} element={<Navigate to={DEFAULT_PATH} />} />
          <Route path={DEFAULT_PATH} element={<UsersView />} />
          <Route path={DETAIL_PATH} element={<DetailView />} />
          <Route path={NOTFOUND_PATH} element={<NotFoundView />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Router
