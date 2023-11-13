<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import axios from 'axios'
import {store} from './store'
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {  
      apikey : '44897644ab70bb16103179e4e3e203dd',
      store: store,
      filmsURL: 'https://api.themoviedb.org/3/search/movie',
      seriesURL: 'https://api.themoviedb.org/3/search/tv'
    }
  },
  methods : {
    searchFilms() {
      axios.get(this.filmsURL,{
        params: {
          api_key : this.apikey,
          query : this.store.query,
        }
      })
      .then(res => {
        const items = res.data.results
        this.store.callResults.films = items
        // console.log(this.store)
        this.store.isSearched = true
        // console.log(this.store.isSearched)
      })
    },
    searchSeries() {
      axios.get(this.seriesURL,{
        params: {
          api_key : this.apikey,
          query : this.store.query,
        }
      })
      .then(res => {
        const items = res.data.results
        this.store.callResults.series = items
        // console.log(this.store)
        this.store.isSearched = true
      })
    }

  }  
}
</script>

<template>
  <PageHeader
  @doSearchFilm="searchFilms()"
  @doSearchSeries="searchSeries()"/>
  <PageMain/>
</template>

<style lang="scss">
@use './syles/general.scss'

</style>
