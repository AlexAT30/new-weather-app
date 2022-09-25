import { Grid } from '@mui/material'
import { useState } from 'react'
import AddUser from '../components/AddUser'
import DeleteModal from '../components/DeleteModal'
import Title from '../components/Title'
import UserMin from '../components/UserMin'

const UsersView = (): JSX.Element => {
  const [deleteModal, setDeleteModal] = useState<number>(0)
  return (
    <Grid container spacing={2} marginY={2}>
      <Title text='Lista de usuarios' />
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} />
      <UserMin
        id={1}
        username="Nombre de usuario"
        lat="123"
        lon="123"
        setDeleteModal={setDeleteModal}
      />
      <AddUser />
    </Grid>
  )
}

export default UsersView
