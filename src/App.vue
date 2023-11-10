<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
  }
}
</script>

<template>
  <PageHeader/>
  <PageMain/>
</template>

<style lang="scss">
@use './syles/general.scss'

</style>
