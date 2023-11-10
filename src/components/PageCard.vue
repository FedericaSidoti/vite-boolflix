<script>
import {store} from '../store'
    export default {
        components: {
        },
        data() {
            return {
                store: store,
            }
        },
        props : {
            filmitem : Object
        }
    }
</script>

<template>
    <div class="col-2" v-if="store.isSearched === true">
        <div class="card">
            <ul class="info">
                <li>{{filmitem.original_title }}</li>
                <li>Titolo originale</li>
                <li>Lingua</li>
                <li>Voto</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
    .col-2 {
    flex-basis: calc((100% / 12) * 2); 
    padding: 10px; 
}
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