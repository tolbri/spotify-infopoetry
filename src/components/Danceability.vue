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
                ref="barChart"
                :options="chartOptions"
                :series="series"
                height="100%"
                type="scatter"
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
            <h2 class="top-bar-headline mb-5 text-5xl font-semibold text-white">Danceability</h2>
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
                     :album="dataset.album_name"
                     :artist="dataset.artist"
                     :album_cover="dataset.album_img"
                     :track="dataset.title"
                     :popularity="dataset.popularity"
                     :year="dataset.year"

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
import dataset from "./../services/song_popularity.json";
import cover from "./../assets/albumcover03.jpg";
import Topbar from "@/components/Topbar";

export default {
  name: "SongAttributes",
  components: {SongRow, Topbar},
  mounted() {
    this.getTrackPopularity();
  },
  data() {
    return {
      cover,
      show: true,
      dataset,
      startData: {
        "name": "Top 500 Songs",
        "type": 'column',
        "data": [55, 53, 63, 66, 69, 68, 66]
      },
      songPopularity: null,
      chartOptions: {
        tooltip: {
          enabled: false
        },
        states: {
          hover: {
            filter: {
              type: 'none',
            }
          },
        },
        grid: {
          show: false
        },
        fill: {
          opacity: 1
        },
        stroke: {
          width: 2
        },
        chart: {
          zoom: {
            enabled: false
          },
          background: '#282828',
          offsetX: 0
        },
        legend: {
          showForSingleSeries: true,
          labels: {
            colors: '#fff'
          },
        },
        xaxis: {
          axisBorder: {
            show: true,
            offsetY: 1
          },
          axisTicks: {
            show: false
          },
          categories: [
            "40's",
            "50's",
            "60's",
            "70's",
            "80's",
            "90's",
            "00's",
          ]
        },
        yaxis: {
          min: 0,
          max: 100,
          show: true,
          labels: {
            offsetX: 0,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        markers: {
          size: 0
        }
      },
      series: [
        {
          name: "Top 500 Songs",
          type: 'column',
          data: [55, 53, 63, 66, 69, 68, 66]
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
    getTrackPopularity() {
      let topTracks= this.$store.getters.topTracks;
      if(topTracks) {

        let popularity = this.getAverage(topTracks.map(function(topTracks) {
          return topTracks.popularity;
        })) ;

        this.userTrackPopularity = popularity;

        this.series = [
          {
            name: "You",
            type: "line",
            data: [
              popularity,
              popularity,
              popularity,
              popularity,
              popularity,
              popularity,
              popularity,
            ]
          },
          {
            name: this.startData.name,
            type: this.startData.type,
            data: this.startData.data
          }
        ]
      }

    },
    getAverage(nums){
      return nums.reduce((a, b) => (a + b)) / nums.length;
    },
    getYearPosition(num){
      if(num >= 1940 && num <= 1949) {
        return 0
      } else if(num >= 1950 && num <= 1959) {
        return 1
      } else if(num >= 1960 && num <= 1969) {
        return 2
      } else if(num >= 1970 && num <= 1979) {
        return 3
      } else if(num >= 1980 && num <= 1989) {
        return 4
      } else if(num >= 1990 && num <= 1999) {
        return 5
      } else if(num >= 2000 && num <= 2009) {
        return 6
      }
    },
    addToChart(data) {

      let dataYears = [null, null, null, null, null, null, null];
      dataYears[this.getYearPosition(data.year)] = data.popularity;

      let selectedSong = dataYears;

      let userSongPopularity = this.userTrackPopularity;

      if(typeof userSongPopularity == "number") {
        this.series = [
          {
            name: "Your Top 20",
            type: "line",
            data: [
              userSongPopularity,
              userSongPopularity,
              userSongPopularity,
              userSongPopularity,
              userSongPopularity,
              userSongPopularity,
              userSongPopularity,
            ]
          },
          {
            name: this.startData.name,
            type: this.startData.type,
            data: this.startData.data
          },
          {
            name: data.track_name,
            type: "column",
            data: selectedSong
          }
        ]

      } else {
        this.series = [
          {
            name: this.startData.name,
            type: this.startData.type,
            data: this.startData.data
          },
          {
            name: data.track_name,
            type: "column",
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