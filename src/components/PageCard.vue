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
                <li class="info"> 
                    <p class="info-title">Titolo:</p> 
                    <p>{{filmitem.title }}</p>
                </li>
                <li class="info"> 
                    <p class="info-title">Titolo originale:</p> 
                    <p>{{ filmitem.original_title }}</p>
                </li>
                <li class="info"> 
                    <p class="info-title">Lingua: </p>
                    <p v-if="language===null">{{ filmitem.original_language }}</p>
                    <div v-else class="icon-wrap">
                        <img :src='this.language'>
                    </div>
                </li>
                <li class="info"> 
                    <p class="info-title">Votazione:</p> 
                    <p>{{ filmitem.vote_average }}</p>
                </li>
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
        font-size: 14px;

        .info-title {
            font-weight: bold ;
            display: flex;
        }

        .info {
            display: flex;
            align-items: center;
            margin-bottom: 5px; 
        }
    }


    img {
            width: 30px; 
        }

</style>