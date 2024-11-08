export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'ac9e4365acmshddc406014559036p100905jsn0363fb25744a',
	},
}
// console.log(import.meta.env.REACT_APP_RAPID_API_KEY)

export const fetchData = async (url, options) => {
	const response = await fetch(url, options)
	const data = await response.json()

	return data
}
