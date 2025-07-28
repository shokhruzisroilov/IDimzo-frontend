export const setItem = (key: string, value: string) => {
	if (typeof window !== 'undefined' && value !== undefined && value !== null) {
		localStorage.setItem(key, JSON.stringify(value))
	}
}

export const getItem = <T = string>(key: string): T | null => {
	if (typeof window === 'undefined') return null
	try {
		const value = localStorage.getItem(key)
		return value ? (JSON.parse(value) as T) : null
	} catch (error) {
		console.error('LocalStorage get error:', error)
		return null
	}
}

export const removeItem = (key: string) => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(key)
	}
}
