import API from './API'

interface VerifyCodePayload {
	phoneNumber: string
	code: string
}

interface TokenResponse {
	accessToken: string
	refreshToken: string
}

const AuthService = {
	async sendCode(phoneNumber: string): Promise<void> {
		await API.post('/auth/send-code', { phoneNumber })
	},

	async verifyCode(payload: VerifyCodePayload): Promise<TokenResponse> {
		const res = await API.post('/auth/verify', payload)
		return res.data
	},

	async refresh(refreshToken: string): Promise<{ accessToken: string }> {
		const res = await API.post('/auth/refresh', { refreshToken })
		return res.data
	},
}

export default AuthService
