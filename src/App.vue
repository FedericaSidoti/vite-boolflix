<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {
      
    }
  },
  methods : {
    search(){
      console.log('ho cercato')
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
