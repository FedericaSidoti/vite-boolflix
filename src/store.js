import { reactive } from 'vue'

export const store = reactive({
	films: {},
	series: {},
	isSearchedFilm : false,
	isSearchedSerie : false,
	query : '',
})