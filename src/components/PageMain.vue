<script>
import PageCard from './PageCard.vue'
export default {
    components: {
        PageCard
    },
    data() {
    }
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
                    class="col-2"/>
                </div>
        </section>
        <section class="section">
            <div class="row">
                <h2>Serie TV</h2>
            </div>
            <div class="row">
                <PageCard
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

.col-2 {
    flex-basis: calc((100% / 12) * 2);
    padding: 5px; 
}

</style>