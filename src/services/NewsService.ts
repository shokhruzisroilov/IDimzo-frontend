import API from './API'

export const NewsService = {
	async getAllNews() {
		const res = await API.get('/news')
		return res.data
	},
}
