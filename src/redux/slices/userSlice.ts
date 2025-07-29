import { AxiosError } from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '@/redux/store'
import { UserService } from '@/services/UserService'

// --- INTERFACE ---
interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	profilePhotoUrl: string | null
	role: string
}

interface UserState {
	data: User | null
	isLoading: boolean
	error: string | null
}

// --- INITIAL STATE ---
const initialState: UserState = {
	data: null,
	isLoading: false,
	error: null,
}

// --- SLICE ---
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserStart: state => {
			state.isLoading = true
			state.error = null
		},
		getUserSuccess: (state, action: PayloadAction<User>) => {
			state.isLoading = false
			state.data = action.payload
		},
		getUserFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

// --- EXPORT ACTIONS ---
export const { getUserStart, getUserSuccess, getUserFailure } =
	userSlice.actions

// --- THUNK FUNCTION ---
export const getUser = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(getUserStart())
		const user = await UserService.getMe()
		dispatch(getUserSuccess(user))
	} catch (error) {
		const err = error as AxiosError<{ message: string }>
		const message =
			err.response?.data?.message || 'Foydalanuvchini olishda xatolik'
		dispatch(getUserFailure(message))
	}
}

// --- DEFAULT EXPORT ---
export default userSlice.reducer
