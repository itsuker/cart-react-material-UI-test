import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { blackTheme } from './blackTheme'
//import React from 'react'

interface AppThemeProps {
    children: JSX.Element | JSX.Element[]
}


export const AppTheme = ({children}:AppThemeProps) => {
  return (
    <ThemeProvider  theme={blackTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
