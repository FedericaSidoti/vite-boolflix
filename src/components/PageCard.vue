<script>
    export default {
        components: {
        },
        data() {
        }
    }
</script>

<template>
    <card class="card">
        <ul class="info">
            <li>titolo</li>
            <li>Titolo originale</li>
            <li>Lingua</li>
            <li>Voto</li>
        </ul>
    </card>

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