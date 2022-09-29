import { useState, useEffect } from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import notFoundImage from '../assets/images/404.png'
import { DEFAULT_PATH } from '../router/paths'

const NotFoundView = (): JSX.Element => {
  const [seconds, setSeconds] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (seconds === 0) navigate(DEFAULT_PATH)
  }, [seconds])

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Box
          component="img"
          src={notFoundImage}
          alt="404_error"
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1" marginBottom={2}>
          you will be redirected in {seconds} seconds
        </Typography>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={DEFAULT_PATH}
        >
          click here to be redirected immediately
        </Button>
      </Grid>
    </Grid>
  )
}

export default NotFoundView
