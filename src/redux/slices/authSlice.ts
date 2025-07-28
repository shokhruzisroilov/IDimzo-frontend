import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getItem, setItem, removeItem } from '@/helpers/persistanceStorage'

interface AuthState {
	accessToken: string | null
	refreshToken: string | null
	phone: string
	isAuthenticated: boolean
	isLoading: boolean
	error: string | null
}

const initialState: AuthState = {
	accessToken: typeof window !== 'undefined' ? getItem('accessToken') : null,
	refreshToken: typeof window !== 'undefined' ? getItem('refreshToken') : null,
	phone: '',
	isAuthenticated:
		typeof window !== 'undefined' ? !!getItem('accessToken') : false,
	isLoading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPhoneStart: state => {
			state.isLoading = true
			state.error = null
		},
		setPhoneSuccess: (state, action: PayloadAction<string>) => {
			state.phone = action.payload
			state.isLoading = false
			state.error = null
		},
		setPhoneFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
		loginStart: state => {
			state.isLoading = true
			state.error = null
		},
		loginSuccess: (
			state,
			action: PayloadAction<{ accessToken: string; refreshToken: string }>
		) => {
			state.isLoading = false
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
			state.isAuthenticated = true
			setItem('accessToken', action.payload.accessToken)
			setItem('refreshToken', action.payload.refreshToken)
		},
		loginFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
		logout: state => {
			state.accessToken = null
			state.refreshToken = null
			state.isAuthenticated = false
			removeItem('accessToken')
			removeItem('refreshToken')
		},
	},
})

export const {
	setPhoneStart,
	setPhoneSuccess,
	setPhoneFailure,
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
} = authSlice.actions

export default authSlice.reducer
