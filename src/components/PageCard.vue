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
        },
        computed : {
            language : function(){
                if (this.filmitem.original_language === 'it') {
                    return '/img/italian-flag.png'
                } else if (this.filmitem.original_language === 'en'){
                    return '/img/uk-flag-icon-png.png'
                }else if (this.filmitem.original_language === 'fr'){
                    return '/img/french-flag-png.png'
                } else {
                    return null
                }
            }
        }
    }
</script>

<template>
    <div class="col-2" v-if="store.isSearched === true">
        <div class="card">
            <ul class="infos">
                <li> <span class="info">Titolo:</span> {{filmitem.title }}</li>
                <li> <span class="info">Titolo originale:</span> {{ filmitem.original_title }}</li>
                <li> <span class="info">Lingua:</span>
                    <p v-if="language===null">{{ filmitem.original_language }}</p>
                    <img v-else :src='language'>
                </li>
                <li> <span class="info">Votazione:</span> {{ filmitem.vote_average }}</li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .col-2 {
    flex-basis: calc((100% / 12) * 2); 
    padding: 10px; 
}
    .card {
        padding: 10px;
        background-color: azure;
    }

    .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .info {
            font-weight: bold ;
        }
    }

    img {
            width: 30px; 
        }

</style>