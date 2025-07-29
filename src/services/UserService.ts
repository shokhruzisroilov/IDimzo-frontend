import API from './API'

export const UserService = {
	async getMe() {
		const res = await API.get('/users/me')
		return res.data
	},
}
