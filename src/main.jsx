import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import ExercisesDetail from './pages/ExercisesDetail/ExercisesDetail.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/',
				element: <div>Внутренний</div>,
			},
		],
	},
	{
		path: '/exercises/:id',
		element: <ExercisesDetail />,
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
