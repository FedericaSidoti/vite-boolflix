<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import axios from 'axios'
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {  
      apikey : '44897644ab70bb16103179e4e3e203dd',
      queryUser : 'le due torri'
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
        console.log(res.data)
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
