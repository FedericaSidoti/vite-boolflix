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
                    v-for="film in store.callResults.films"
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
                v-for="serie in store.callResults.series"
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
    min-height: calc(100vh - 70px);
}


.section {
    padding: 20px;
}


</style>