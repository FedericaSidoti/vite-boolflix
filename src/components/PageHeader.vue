<script>
export default {
    components: {
    },
    data() {
        return {
            
        }
    },
    methods: {
        triggerSearch() {
            this.$emit('doSearch')
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
        <input type="text" placeholder="Cerca...">
        <button @click="triggerSearch">CERCA</button>
    </div>
    </header>

</template>

<style scoped>
.page-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    padding: 20px;
}

.logo-wrap {
    color: #E50914;
}

</style>