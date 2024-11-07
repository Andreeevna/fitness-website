import { Box } from '@mui/material'
import React from 'react'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

const Layout = ({ children }) => {
	return (
		<Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
			<Navbar />
			{children}
			<Footer />
		</Box>
	)
}

export default Layout
