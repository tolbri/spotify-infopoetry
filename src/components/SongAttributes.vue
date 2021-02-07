<template>
  <div class="flex-1 flex flex-col content-spotify bg-dark w-full">
    <Topbar/>

    <div class="overflow-y-auto overflow-x-hidden">
      <div class="container mx-auto">
        <transition name="fade">
          <!--          <div v-if="!show" class="background-cover opacity-20 absolute top-0 left-44 w-136 h-full" v-bind:style="{'background-image': 'url('+`${cover}`+')'}" >-->
          <!--          </div>-->
        </transition>
        <div class="w-120 h-120 bg-light mr-10 mt-10 shadow-lg absolute">
          <div class="w-full h-full p-5">
            <apexchart
                       ref="radarChart"
                       :options="chartOptions"
                       :series="series"
                       height="100%"
                       type="radar"
                       width="100%">
            </apexchart>
          </div>
        </div>
        <transition name="fade">
          <div v-if="show" class="z-50 w-120 h-120 bg-light mr-10 mt-10 shadow-lg absolute">
            <div class="w-full h-full">
              <img :src="`${cover}`" alt="">
            </div>
          </div>
        </transition>
        <div class="pl-130">
          <div class="pt-2">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
            <h2 class="top-bar-headline mb-5 text-5xl font-semibold text-white">Song Attributes</h2>
            <p>Created by <span class="text-white">Tim Olbrich</span> • 2000 Songs, 20 h 30 min.</p>
            <button class="w-24 py-2 mt-5 text-center bg-main rounded-full uppercase tracking-wide text-white text-xs"
                    @click="show = !show">
              {{ show ? 'Play' : 'Pause' }}
            </button>
          </div>
          <div class="w-full pt-5">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Information</strong>
            <p class="pt-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet.</p>
          </div>
          <div class="song-row mt-5 divide-y divide-light">
            <SongRow v-for="dataset in dataset"
                     :id="dataset.spotify_id"
                     :key="dataset.index"
                     :acousticness="dataset.acousticness"
                     :album="dataset.album_name"
                     :artist="dataset.artist"
                     :album_cover="dataset.album_img"
                     :danceability="dataset.danceability"
                     :energy="dataset.energy"
                     :instrumentalness="dataset.instrumentalness"
                     :liveness="dataset.liveness"
                     :loudness="dataset.loudness"
                     :speechiness="dataset.speechiness"
                     :tempo="dataset.tempo"
                     :track="dataset.title"
                     :valence="dataset.valence"

                     @click.native="show = false"
                     @show-details="addToChart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SongRow from "@/components/SongRow";
import dataset from "./../services/song_attributes.json";
import cover from "./../assets/albumcover02.jpg";
import Topbar from "@/components/Topbar";

export default {
  name: "SongAttributes",
  components: {SongRow, Topbar},
  mounted() {
    this.getAudioFeatures();
  },
  data() {
    return {
      cover,
      show: true,
      dataset,
      startData: {
        "name": "Top 500 Songs",
        "data": [0.34, 0.56, 0.6, 0.04, 0.20, 0.06, 0.64]
      },
      userAudioFeatures: {
        'acousticness': null,
        'danceability': null,
        'energy': null,
        'instrumentalness': null,
        'liveness': null,
        'speechiness': null,
        'valence': null
      },
      chartOptions: {
        chart: {
          background: '#282828',
          offsetX: 10,
        },
        legend: {
          showForSingleSeries: true,
          labels: {
            colors: '#fff'
          },
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: '#e8e8e8',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        xaxis: {
          categories: [
            'acousticness',
            'danceability',
            'energy',
            'instrumentalness',
            'liveness',
            'speechiness',
            'valence']
        },
        yaxis: {
          min: 0,
          max: 1,
          show: false
        },
        markers: {
          size: 0
        }
      },
      series: [
        {
          name: "Top 500 Songs",
          data: [0.34, 0.56, 0.6, 0.04, 0.20, 0.06, 0.64]
        }
      ],
      labels: [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'speechiness',
        'valence']
    }
  },
  methods: {
    getAudioFeatures() {
      let audioFeatures= this.$store.getters.audioFeatures;
      if(audioFeatures) {

        let acousticness = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.acousticness;
        })) ;

        let danceability = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.danceability;
        })) ;

        let energy = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.energy;
        })) ;

        let instrumentalness = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.instrumentalness;
        })) ;

        let liveness = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.liveness;
        })) ;

        let speechiness = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.speechiness;
        })) ;

        let valence = this.getAverage(audioFeatures.map(function(audioFeatures) {
          return audioFeatures.valence;
        })) ;

        this.userAudioFeatures = {
          'acousticness': acousticness,
          'danceability': danceability,
          'energy': energy,
          'instrumentalness': instrumentalness,
          'liveness': liveness,
          'speechiness': speechiness,
          'valence': valence
        }
        this.series = [
          {
            name: "You",
            data: [
              acousticness,
              danceability,
              energy,
              instrumentalness,
              liveness,
              speechiness,
              valence
            ]
          },
          {
            name: this.startData.name,
            data: this.startData.data
          }
        ]

        console.log(this.userAudioFeatures);
      }

    },
    getAverage(nums){
      let average = nums.reduce((a, b) => (a + b)) / nums.length;
      return average
    },
    addToChart(data) {

      let selectedSong = [
        data.acousticness,
        data.danceability,
        data.energy,
        data.instrumentalness,
        data.liveness,
        data.speechiness,
        data.valence,
      ]

      let userSongs = [
        this.userAudioFeatures.acousticness,
        this.userAudioFeatures.danceability,
        this.userAudioFeatures.energy,
        this.userAudioFeatures.instrumentalness,
        this.userAudioFeatures.liveness,
        this.userAudioFeatures.speechiness,
        this.userAudioFeatures.valence,
      ]

      if(typeof userSongs[0] == "number") {
        this.series = [
          {
            name: "Your Top 20",
            data: userSongs
          },
          {
            name: this.startData.name,
            data: this.startData.data
          },
          {
            name: data.track_name,
            data: selectedSong
          }
        ]

      } else {
        this.series = [
          {
            name: this.startData.name,
            data: this.startData.data
          },
          {
            name: data.track_name,
            data: selectedSong
          }
        ]

      }


    }
  }
}
</script>

<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}


.dataset::-webkit-scrollbar {
  width: 8px;
  background-color: #181818;
}

.dataset::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}
</style>