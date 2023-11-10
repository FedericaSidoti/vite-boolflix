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
      queryUser : 'lo hobbit',
      store: store,
    }
  },
  methods : {
    search(){
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key : this.apikey,
          query : this.queryUser
        }
      })
      .then(res => {
        const filmsObject = res.data.results;
        this.store.films = filmsObject
        // console.log(this.store.films)
        this.store.isSearched = true
      })
    }
  }  
}
</script>

<template>
  <PageHeader
  @doSearch="search"/>
  <PageMain/>
</template>

<style lang="scss">
@use './syles/general.scss'

</style>
