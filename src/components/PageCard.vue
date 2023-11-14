<script>
import {store} from '../store'
    export default {
        components: {
        },
        data() {
            return {
                store: store,
                src: 'https://image.tmdb.org/t/p/w342' + this.item.poster_path,
                languagesArray: [
                    'it',
                    'en',
                    'fr',
                    'ja'
                ]
            }
        },
        props : {
            item : Object,
        },
        computed : {
            language : function(){

                const srcFlag = '/img/' + this.item.original_language + '.png'
                
                return srcFlag
            },
            stars : function(){
                const voteAverage = Math.ceil(this.item.vote_average)
                const voteInFive = (voteAverage * 5)/10 
                const voteParsed = Math.ceil(voteInFive)
                return voteParsed
            }
        }
    }
</script>

<template>
    <div class="col-2" >
        <div class="card">
            <img v-if="src !== 'https://image.tmdb.org/t/p/w342null'" :src="src" >
            <img v-else src="/img/img-not-found.png">
        </div>
        <div class="card back">
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
                            <img class="flag" v-if="languagesArray.includes(item.original_language)" :src='language'>
                            <img class="flag" v-else src="/img/backup-flag.png">
                        </div>
                    </div>
                </li>
                <li class="info"> 
                    <p class="info-title">Votazione: 
                        <span v-if="stars !== 0" > 
                            <span class="stars" v-for="star in stars">&#10030;</span>
                            <span v-for="star in (5-stars)">&#10030;</span>
                        </span>
                        <span v-else> &#128533; </span> 
                    </p>
                </li>
                <li class="info">
                    <p class="info-title"> Descrizione:
                        <span>{{ item.overview }}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .col-2 {
    width: calc((100% / 12) * 2); 
    padding: 2px; 
    position: relative;
    overflow: auto; 
}
    .col-2:hover .back {
        display: inline-block;
    }

    .back{
        display: none;
        position: absolute;
        top: 0;
        right: 0; 
        left: 0; 
        bottom: 0; 
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        overflow: auto; 
    }

    .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        overflow: auto; 

        span {
            font-weight: normal ;
        }

        .info {
            margin-bottom: 5px; 
        }
    }

    .lang {
        display: flex;
        align-items: center; 
    }

    .icon-wrap {
        margin-left: 5px;
    }


    .flag {
            width: 20px; 
        }

    .stars{
        color: yellow
    }

</style>