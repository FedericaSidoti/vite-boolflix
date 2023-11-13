<script>
import {store} from '../store'
export default {
    components: {
    },
    data() {
        return {
            store: store
        }
    },
    methods: {
        triggerSearch() {
            store.callResults = {};
            const controlSpace = this.store.query.trim()
            console.log(controlSpace)
            if (controlSpace !== '') {
                this.$emit('doSearchFilm')
                this.$emit('doSearchSeries')
            } else {
                this.store.query = ''
            }
        }   
    }
}
</script>

<template>
    <header class="page-header">
        <div class="logo-wrap">
        <h2>BOOLFLIX</h2>
    </div>
    <div class="input-wrap">
        <input 
        type="text" 
        placeholder="Cerca..."
        v-model="store.query">
        <button @click="triggerSearch">CERCA</button>
    </div>
    </header>

</template>

<style scoped>
.page-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 20px;
    position: sticky;
    right: 0;
    left: 0;
    top: 0; 
    z-index: 999;
    height: 70px; 
}

.logo-wrap {
    color: #E50914;
}

</style>