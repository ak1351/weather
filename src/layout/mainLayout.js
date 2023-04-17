import React from 'react'
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function MainLayout({ children }) {
  return (
    <Box>

      <Box><Header /></Box>
      <Box>{children}</Box>
      <Box><Footer /></Box>
    </Box>
  )
}
