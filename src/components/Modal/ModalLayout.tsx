import { Grid, Modal, Card } from '@mui/material'

interface props {
  children: React.ReactNode
  open: number
}

const ModalLayout = ({ children, open }: props): JSX.Element => {
  return (
    <Modal
      open={open !== 0}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid item xs='auto'>
          <Card>{children}</Card>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalLayout
