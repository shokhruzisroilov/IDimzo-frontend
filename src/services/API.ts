import axios from 'axios'
import { getItem } from '../helpers/persistanceStorage'

const instance = axios.create({
	baseURL: 'https://api.idimzo.uz/api',
})

instance.interceptors.request.use(config => {
	const accessToken = getItem('accessToken')
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

export default instance
