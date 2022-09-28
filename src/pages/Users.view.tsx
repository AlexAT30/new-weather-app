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
      <Title text="User list" />
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} />
      <CreateEditModal edit open={editModal} setOpen={setEditModal} />
      <CreateEditModal open={createModal} setOpen={setCreateModal} />
      {users.map((user) => (
        <UserMin
          key={`user_min_${user.username}_${user.id}`}
          user={user}
          setDeleteModal={setDeleteModal}
          setEditModal={setEditModal}
        />
      ))}
      <AddUser setCreateModal={setCreateModal} />
    </Grid>
  )
}

export default UsersView
