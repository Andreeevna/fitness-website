import React from 'react'

import { Box } from '@mui/material'
import Exercises from '../../components/Exercises/Exercises'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Layout from '../../components/Layout/Layout'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import './Home.css'

const Home = () => {
	return (
		<Layout>
			{' '}
			<Box>
				<HeroBanner />
				<SearchExercises />
				<Exercises />
			</Box>
		</Layout>
	)
}

export default Home
