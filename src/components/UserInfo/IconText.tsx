import { Grid, Typography } from '@mui/material'

interface props {
  children: React.ReactNode
}
const IconText = ({ children }: props): JSX.Element => {
  return (
    <Grid item xs={6}>
      <Typography variant="body1" mt={2} sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {children}
      </Typography>
    </Grid>
  )
}

export default IconText
