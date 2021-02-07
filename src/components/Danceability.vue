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
                ref="scatterPlot"
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
                     :danceability="dataset.danceability"
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
import dataset from "./../services/song_danceability.json";
import cover from "./../assets/albumcover03.jpg";
import Topbar from "@/components/Topbar";

export default {
  name: "SongAttributes",
  components: {SongRow, Topbar},
  mounted() {
    this.getTrackDanceability();
    this.startData.data = this.getInitialData();
  },
  data() {
    return {
      cover,
      show: true,
      dataset,
      startData: {
        "name": "Top 500 Songs",
        "data": null
      },
      songPopularity: null,
      chartOptions: {
        colors: ['#121212', '#1DB954'],
        tooltip: {
          enabled: false,
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
          animations: {
            enabled: false,
          },
          // zoom: {
          //   enabled: false
          // },
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
          type: 'datetime',
          axisBorder: {
            show: true,
            offsetY: 1
          },
          axisTicks: {
            show: false
          },
        },
        yaxis: {
          min: 0,
          max: 1,
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
          size: 2,
          strokeWidth: 0,
        }
      },
      series: [
        {
          name: "Empty",
          data: [],
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
    getInitialData() {
      let data = dataset.map(function(dataset) {
        return [
          new Date(dataset.year.toString()),
          dataset.danceability
        ]
      });
      if(this.$store.getters.topTracks) {
        this.$refs.scatterPlot.updateOptions({ colors: ['#E91E63','#121212', '#1DB954'] })
        this.series = [
          {
            name: "You",
            data: this.getTrackDanceability()
          },
          {
          name: "Top 500 Songs",
          data: data,
        }]
      } else {
        this.series = [{
          name: "Top 500 Songs",
          data: data,
        }]
      }
      return data
    },


    getTrackDanceability() {
      let topTracksAudioFeature= this.$store.getters.audioFeatures;
      let topTracks= this.$store.getters.topTracks;

      if(topTracks) {

        let dateArray = topTracks.map(function(topTracks) {
          return new Date(topTracks.album.release_date.toString())
        });

        let danceArray = topTracksAudioFeature.map(function(topTracksAudioFeature) {
          return topTracksAudioFeature.danceability
        });

        let data = dateArray.map((x, i) => [x, danceArray[i]]);

        return data

      }

    },

    addToChart(data) {
      let selectedSong = [
          [
        new Date(data.year.toString()),
        data.danceability
              ]
      ];
      let userTrackDanceability = this.getTrackDanceability();

      if(userTrackDanceability) {
        this.$refs.scatterPlot.updateOptions({ colors: ['#E91E63','#121212', '#1DB954'] })
        this.series = [
          {
            name: "You",
            data: userTrackDanceability
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