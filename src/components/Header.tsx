import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    <AppBar
      elevation={1}
      sx={{
        position: 'relative'
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Cynax Labs
        </Typography>
      </Toolbar>
    </AppBar>  )
}
