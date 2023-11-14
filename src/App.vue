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
      seriesURL: 'https://api.themoviedb.org/3/search/tv',
    }
  },
  methods : {
    searchFilms() {
      if (this.store.query !== '') {
        axios.get(this.filmsURL,{
          params: {
            api_key : this.apikey,
            query : this.store.query,
          }
        })
        .then(res => {
          const items = res.data.results
          this.store.callResults.films= items
          console.log(this.store)
        // console.log(this.store.isSearched)
          if (this.store.callResults.films.length === 0) {
            store.filmNotFound = true;
          }
        })
      }
    },
    searchSeries() {
      if (this.store.query !== '') {
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

        if (this.store.callResults.series.length === 0) {
            store.serieNotFound = true;
          }
      })
      }
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
@use './styles/general.scss'

</style>
