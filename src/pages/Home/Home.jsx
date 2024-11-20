import React, { useState } from 'react'

import { Box } from '@mui/material'
import Exercises from '../../components/Exercises/Exercises'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Layout from '../../components/Layout/Layout'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import './Home.css'

const Home = () => {
	const [exercises, setExercises] = useState([])
	const [bodyPart, setBodyPart] = useState('all')
	return (
		<Layout>
			{' '}
			<Box>
				<HeroBanner />
				<SearchExercises
					setExercises={setExercises}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>
				<Exercises
					setExercises={setExercises}
					exercises={exercises}
					bodyPart={bodyPart}
				/>
			</Box>
		</Layout>
	)
}

export default Home
