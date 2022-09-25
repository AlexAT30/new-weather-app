import { Grid } from '@mui/material'
import { useState } from 'react'
import AddUser from '../components/AddUser'
import DeleteModal from '../components/Modal/DeleteModal'
import CreateEditModal from '../components/Modal/CreateEditModal'
import Title from '../components/Title'
import UserMin from '../components/UserMin'

const UsersView = (): JSX.Element => {
  const [deleteModal, setDeleteModal] = useState<number>(0)
  const [editModal, setEditModal] = useState<number>(0)
  const [createModal, setCreateModal] = useState<number>(0)
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
      <UserMin
        id={1}
        username="Nombre de usuario"
        lat="123"
        lon="123"
        setDeleteModal={setDeleteModal}
        setEditModal={setEditModal}
      />
      <AddUser setCreateModal={setCreateModal} />
    </Grid>
  )
}

export default UsersView
