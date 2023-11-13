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
                if ( this.item.original_language=== 'it') {
                    return '/img/italian-flag.png'
                } else if (this.item.original_language === 'en'){
                    return '/img/uk-flag-icon-png.png'
                }else if (this.item.original_language === 'fr'){
                    return '/img/french-flag-png.png'
                } else {
                    return null
                }
            },
            stars : function(){
                const voteAverage = parseInt(this.item.vote_average)
                const voteInFive = (voteAverage * 5)/10
                const voteParsed= parseInt(voteInFive)
                return voteParsed
            }
        }
    }
</script>

<template>
    <div class="col-2" >
        <div class="card">
            <ul v-if="store.isSearched===true" class="infos">
                <li class="info">
                    <p class="info-title">Titolo:
                    <span  v-if="item.title" >{{item.title }}</span>
                    <span v-else>{{ item.name }} </span>
                    </p>
                </li>
                <li class="info"> 
                    <p class="info-title">Titolo originale: 
                    <span v-if="item.original_title">{{ item.original_title }} </span>
                    <span v-else>{{ item.original_name }}</span>
                    </p>
                </li>
                <li class="info"> 
                    <div class="info-title lang">Lingua: 
                        <p> {{ item.original_language }}</p>
                        <div class="icon-wrap">
                            <img v-if="language !== null" :src='language'>
                            <img v-else src="/img/backup-flag.png">
                        </div>
                    </div>
                </li>
                <li class="info"> 
                    <p class="info-title">Votazione: 
                        <span class="stars" v-if="stars !== 0" > 
                            <span v-for="star in stars">&#10030;</span>
                        </span>
                        <span v-else> &#128533; </span> 
                    </p>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .col-2 {
    width: calc((100% / 12) * 2); 
    padding: 5px; 
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
        font-weight: bold;

        span {
            font-weight: normal ;
        }

        .info {
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

    .stars{
        color: yellow
    }

</style>