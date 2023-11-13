import { reactive } from 'vue'

export const store = reactive({
	callResults: {
	},
	isSearched : false,
	query : '',
	filmNotFound : false,
	serieNotFound : false,
})