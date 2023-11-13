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
            item : Object,
        },
        computed : {
            language : function(){
                if (this.item.original_language === 'it') {
                    return '/img/italian-flag.png'
                } else if (this.item.original_language === 'en'){
                    return '/img/uk-flag-icon-png.png'
                }else if (this.item.original_language === 'fr'){
                    return '/img/french-flag-png.png'
                } else {
                    return null
                }
            }
        }
    }
</script>

<template>
    <div class="col-2" >
        <div class="card">
            <ul class="infos">
                <li class="info"> 
                    <p class="info-title">Titolo:</p> 
                    <p v-if="store.isSearchedFilm === true && item.title">{{item.title }}</p>
                    <p v-else>{{ item.name }}</p>
                </li>
                <li class="info"> 
                    <p class="info-title">Titolo originale:</p> 
                    <p>{{ item.original_title }}</p>
                </li>
                <li class="info"> 
                    <div class="info-title lang">Lingua: 
                        <p> {{ item.original_language }}</p>
                        <div class="icon-wrap">
                            <img v-if="language !== null" :src='this.language'>
                            <img v-else src="/img/backup-flag.png">
                        </div>
                    </div>
                </li>
                <li class="info"> 
                    <p class="info-title">Votazione:</p> 
                    <p>{{ item.vote_average }}</p>
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
            margin-bottom: 5px; 
        }
    }

    .lang {
        display: flex;
        align-items: center
    }


    img {
            width: 20px; 
        }

</style>