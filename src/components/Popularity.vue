<template>
  <div class="flex flex-col content-spotify bg-dark w-full">
    <div class="h-14">
      <Topbar />
    </div>
    <div class="overflow-y-auto overflow-x-hidden">
      <div class="container mx-auto">
        <transition name="fade">
          <!--          <div v-if="!show" class="background-cover opacity-20 absolute top-0 left-44 w-136 h-full" v-bind:style="{'background-image': 'url('+`${cover}`+')'}" >-->
          <!--          </div>-->
        </transition>
        <div class="xl:w-120 xl:h-120 w-80 h-80 bg-light mr-10 mt-10 shadow-lg absolute">
          <div class="w-full h-full p-5 z-10">
            <div class="absolute top-0 left-0 w-full h-full">
              <img :src="`${background}`" alt="" class="opacity-20 rounded">
            </div>
            <apexchart class="rounded"
                       ref="barChart"
                       :options="chartOptions"
                       :series="series"
                       height="100%"
                       type="line"
                       width="100%">
            </apexchart>
          </div>
        </div>
        <transition name="fade">
          <div v-if="show" class="z-50 xl:w-120 w-80 h-80 bg-light mr-10 mt-10 shadow-lg absolute">
            <div class="w-full h-full">
              <img :src="`${cover}`" alt="" class="rounded">
            </div>
          </div>
        </transition>
        <div class="fixed w-full -ml-10 hidden md:flex lg:hidden">
        <div class="absolute h-96 w-full bg-darkest shadow-lg opacity-90"></div>
        </div>
        <div class="xl:pl-130 lg:pl-96 md:pt-96 lg:pt-0">
          <div class="pt-2">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
            <h2 class="top-bar-headline mb-5 text-5xl font-semibold text-white">Track Popularity</h2>
            <p>Created by <span class="text-white">Tim Olbrich</span> • 500 Songs, 32 h 45 min.</p>
            <button class="w-24 py-2 mt-5 text-center bg-purple-600 rounded-full uppercase tracking-wide text-white text-xs"
                    @click="show = !show">
              {{ show ? 'Play' : 'Pause' }}
            </button>
          </div>
          <div class="w-full pt-5">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Information</strong>
            <p class="pt-1">A lot of the “Greatest Songs of All Time” were published a while ago, but still remain relevant nowadays. In other words, they are still popular. The graph shows the average popularity (measured in January 2021) of songs per decade. The popularity is measured on the number of recent plays which leads to a value between 0 and 100. By logging in you can see how popular the music is that you listen to. A higher value means that you probably listen a lot of mainstream music.</p>
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
import cover from "./../assets/albumcover01.jpg";
import background from "./../assets/background01.jpg";
import Topbar from "@/components/Topbar";

export default {
  name: "Popularity",
  components: {SongRow, Topbar},
  mounted() {
    this.getTrackPopularity();
  },
  data() {
    return {
      cover,
      background,
      show: true,
      dataset,
      startData: {
        "name": "Top 500 Songs",
        "type": 'column',
        "data": [55, 53, 63, 66, 69, 68, 66]
      },
      songPopularity: null,
      chartOptions: {
        colors: ["#fff", "#EF4444"],
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
          // background: '#282828',
          offsetX: 0
        },
        legend: {
          showForSingleSeries: true,
          labels: {
            colors: '#fff'
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "40's",
            "50's",
            "60's",
            "70's",
            "80's",
            "90's",
            "00's",
          ],
          labels: {
            style: {
              colors: "#B3B3B3",
            }
          },
          title: {
            text: "Decade",
            style: {
              color: "#B3B3B3",
            }
          },
          axisBorder: {
            show: true,
            offsetY: 1
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "#B3B3B3",
            }
          },
          title: {
            text: "Popularity",
            style: {
              color: "#B3B3B3",
            }
          },
          min: 0,
          max: 100,
          show: true,
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
      ]
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
        this.$refs.barChart.updateOptions({ colors: ["#A327D6","#fff", "#EF4444"],
        })
        this.series = [
          {
            name: "You",
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
</style>