import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BASE_PATH, DEFAULT_PATH, DETAIL_PATH, NOTFOUND_PATH } from './paths'
// Views
import DetailView from '../pages/Detail.view'
import NotFoundView from '../pages/NotFound.view'
import UsersView from '../pages/Users.view'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<Navigate to={DEFAULT_PATH} />} />
        <Route path={DEFAULT_PATH} element={<UsersView />} />
        <Route path={DETAIL_PATH} element={<DetailView />} />
        <Route path={NOTFOUND_PATH} element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
