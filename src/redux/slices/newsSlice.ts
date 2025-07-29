import { AxiosError } from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '@/redux/store'
import { NewsService } from '@/services/NewsService'

// --- INTERFACES ---
interface NewsTitle {
	uz: string
	uzCyrl: string
	kaa: string
	ru: string
	en: string
}

interface NewsItem {
	id: number
	title: NewsTitle
	mediaUrl: string
	mediaType: string
	externalLink: string
	publishDate: string
	expiryDate: string
	viewed: boolean
	active: boolean
}

interface NewsState {
	data: NewsItem[]
	isLoading: boolean
	error: string | null
}

// --- INITIAL STATE ---
const initialState: NewsState = {
	data: [],
	isLoading: false,
	error: null,
}

// --- SLICE ---
const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		getNewsStart: state => {
			state.isLoading = true
			state.error = null
		},
		getNewsSuccess: (state, action: PayloadAction<NewsItem[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
		getNewsFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

// --- ACTIONS EXPORT ---
export const { getNewsStart, getNewsSuccess, getNewsFailure } =
	newsSlice.actions

// --- THUNK FUNCTION ---
export const getNews = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(getNewsStart())
		const data = await NewsService.getAllNews()
		dispatch(getNewsSuccess(data))
	} catch (error) {
		const err = error as AxiosError<{ message: string }>
		const message =
			err.response?.data?.message || 'Yangiliklarni olishda xatolik yuz berdi'
		dispatch(getNewsFailure(message))
	}
}

// --- DEFAULT EXPORT ---
export default newsSlice.reducer
