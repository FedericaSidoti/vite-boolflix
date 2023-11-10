<script>
import {store} from '../store'
    export default {
        components: {
        },
        data() {
            return {
                store: store,
            }
        }
    }
</script>

<template>
    <div class="card" v-if="store.isSearched === true">
        <ul class="info">
            <li>{{store.films.results[0].original_title }}</li>
            <li>Titolo originale</li>
            <li>Lingua</li>
            <li>Voto</li>
        </ul>
    </div>

</template>

<style scoped>
    .card {
        padding: 10px;
        background-color: azure;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>