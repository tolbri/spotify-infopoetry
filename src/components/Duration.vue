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
              <img :src="`${background}`" alt="" class="opacity-20">
            </div>
            <apexchart class=""
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
          <div v-if="show" class="z-50 xl:w-120 w-80 h-80 bg-light mr-10 mt-10 shadow-lg absolute">
            <div class="w-full h-full">
              <img :src="`${cover}`" alt="">
            </div>
          </div>
        </transition>
        <div class="fixed w-full -ml-10 hidden md:flex lg:hidden">
          <div class="absolute h-96 w-full bg-darkest shadow-lg opacity-90"></div>
        </div>
        <div class="xl:pl-130 lg:pl-96 md:pt-96 lg:pt-0">
          <div class="pt-2">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
            <h2 class="top-bar-headline mb-5 text-5xl font-semibold text-white">Playback Duration</h2>
            <p>Created by <span class="text-white">Tim Olbrich</span> • 2000 Songs, 20 h 30 min.</p>
            <button class="w-24 py-2 mt-5 text-center bg-purple-600 rounded-full uppercase tracking-wide text-white text-xs"
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
                     :duration="dataset.duration_ms"


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
import dataset from "./../services/song_duration.json";
import cover from "./../assets/albumcover04.jpg";
import background from "./../assets/background04.jpg";
import Topbar from "@/components/Topbar";

export default {
  name: "Duration",
  components: {SongRow, Topbar},
  mounted() {
    this.userTrackPopularity();
    this.startData.data = this.getInitialData();
  },
  data() {
    return {
      cover,
      background,
      show: true,
      dataset,
      startData: {
        "name": "Top 500 Songs",
        "data": null
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
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: true,
            type: 'xy',
            autoScaleYaxis: true,
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
          title: {
            text: "Popularity",
            style: {
              color: "#B3B3B3",
            }
          },
          min: 0,
          max: 100,
          tickAmount: 2,
          labels: {
            style: {
              colors: "#B3B3B3",
            }
            },
          axisBorder: {
            show: true,
            offsetY: 1
          },
          axisTicks: {
            show: true
          },
        },
        yaxis: {
          title: {
            text: "Duration in Minutes",
            style: {
              color: "#B3B3B3",
            }
          },
          tickAmount: 12,
          show: true,
          labels: {
            style: {
              colors: "#B3B3B3",
            },
            formatter: function(value) {
              let minutes = Math.floor(value / 60000);
              let seconds = ((value % 60000) / 1000).toFixed(0);
              return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            },
            offsetX: 0,
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
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
      ]
    }
  },
  methods: {
    getInitialData() {
      let data = dataset.map(function(dataset) {
        return [
          dataset.popularity,
          dataset.duration_ms,
        ]
      });
      let userTrackDanceability = this.userTrackPopularity();
      if(this.$store.getters.topTracks) {
        this.$refs.scatterPlot.updateOptions({ colors: ["#A327D6","#fff", "#EF4444"]});
        this.series = [
          {
            name: "You",
            data: userTrackDanceability
          },
          {
            name: "Top 500 Songs",
            data: data,
          }
          ]
      } else {
        this.series = [{
          name: "Top 500 Songs",
          data: data,
        }]
      }
      return data
    },


    userTrackPopularity() {
      let topTracksAudioFeature= this.$store.getters.audioFeatures;
      let topTracks= this.$store.getters.topTracks;

      if(topTracks) {

        let popularityArray = topTracks.map(function(topTracks) {
          return topTracks.popularity
        });

        let durationArray = topTracksAudioFeature.map(function(topTracksAudioFeature) {
          return topTracksAudioFeature.duration_ms
        });

        let data = popularityArray.map((x, i) => [x, durationArray[i]]);
  console.log(data);
        return data

      }
    },

    addToChart(data) {
      let selectedSong = [
        [
          data.popularity,
          data.duration,
        ]
      ];
      let userTrackDanceability = this.userTrackPopularity();

      if(userTrackDanceability) {
        this.$refs.scatterPlot.updateOptions({ colors: ["#A327D6","#fff", "#EF4444"]});
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
</style>