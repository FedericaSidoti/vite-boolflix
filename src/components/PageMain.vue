<script>
import PageCard from './PageCard.vue'
import {store} from '../store'
export default {
    components: {
        PageCard
    },
    data() {
        return {
            store: store
        }
    },
}
</script>

<template>
    <main class="main-content">
        <div class="container">
            <section class="section">
                <div class="row">
                    <h2>Films</h2>
                </div>
                <div class="row">
                    <PageCard
                    v-for="film in store.results.films"
                    :item = 'film'
                    class="col-2"/>
                </div>
        </section>
        <section class="section">
            <div class="row">
                <h2>Serie TV</h2>
            </div>
            <div class="row">
                <PageCard
                v-for="serie in store.results.series"
                :item = 'serie'
                class="col-2"/>
            </div>
        </section>
        </div>
    </main>

</template>

<style scoped>

.main-content {
    background-color: gray;
}

.section {
    padding: 20px;
}


</style>