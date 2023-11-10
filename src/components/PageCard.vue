<script>
    export default {
        components: {
        },
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <div class="card">
        <ul class="info">
            <li>titolo</li>
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