import { Grid } from '@mui/material'
import { useState } from 'react'
import AddUser from '../components/AddUser'
import DeleteModal from '../components/Modal/DeleteModal'
import CreateEditModal from '../components/Modal/CreateEditModal'
import Title from '../components/Title'
import UserMin from '../components/UserMin'
import { useSelector } from 'react-redux'
import { RootState } from '../context/store'

const UsersView = (): JSX.Element => {
  const [deleteModal, setDeleteModal] = useState<number>(0)
  const [editModal, setEditModal] = useState<number>(0)
  const [createModal, setCreateModal] = useState<number>(0)

  const users = useSelector((state: RootState) => state.app_state.users)
  return (
    <Grid container spacing={2} marginY={2}>
      <Title text="Lista de usuarios" />
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} />
      <CreateEditModal
        title="Escriba los nuevos datos del usuario"
        open={editModal}
        setOpen={setEditModal}
      />
      <CreateEditModal
        title="Rellena los campos para crear un nuevo usuario"
        open={createModal}
        setOpen={setCreateModal}
      />
      {users.map((user) => (
        <UserMin
          key={`${user.username}`}
          id={user.id}
          username={user.username}
          city={user.city}
          lat={user.lat}
          lon={user.lon}
          setDeleteModal={setDeleteModal}
          setEditModal={setEditModal}
        />
      ))}
      <AddUser setCreateModal={setCreateModal} />
    </Grid>
  )
}

export default UsersView
