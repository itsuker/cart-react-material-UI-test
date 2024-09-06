import { Box, Grid } from '@mui/material'
import React from 'react'

interface ProductsLayoutProps {
    children: React.ReactNode
    }


export const ProductsLayout = ({children}:ProductsLayoutProps) => {
  return (
    <Box sx={{ width: 'auto', padding: 1 }}>
     
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={1}>
          
        </Grid>
        <Grid item xs={12} md={6} lg={
          10
        }>
          <Box sx={{ padding: 2 }}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
