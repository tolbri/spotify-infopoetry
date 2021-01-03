<template>
  <div class="home-content overflow-y-auto overflow-x-hidden">
    <div class="container mx-auto">
      <transition name="fade">
          <div v-if="!show" class="background-cover opacity-20 absolute top-0 left-48 w-132 h-full" v-bind:style="{'background-image': 'url('+`${cover}`+')'}" >
          </div>
      </transition>
      <div class="w-120 h-120 bg-light mr-10 shadow-lg absolute">
        <div class="w-full h-full p-5">
          <apexchart ref="demoChart" :options="chartOptions" :series="series" height="100%"
                     type="radar"
                     width="100%">
          </apexchart>
        </div>
      </div>
      <transition name="fade">
        <div v-if="show" class="z-50 w-120 h-120 bg-light mr-10 shadow-lg absolute">
          <div class="w-full h-full">
            <img :src="`${cover}`" alt="">
          </div>
        </div>
      </transition>
      <div class="pl-130">
        <div class="pt-2">
          <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
          <h2 class="mb-5 text-5xl font-semibold text-white">Song Attributes</h2>
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
          <SongRow @click.native="show = false"
                   v-for="dataset in dataset"
                   :key="dataset.song_id"
                   :acousticness="dataset.acousticness"
                   :album="dataset.album_name"
                   :artist="dataset.artist_name"
                   :cover="dataset.album_cover"
                   :danceability="dataset.danceability"
                   :energy="dataset.energy"
                   :instrumentalness="dataset.instrumentalness"
                   :liveness="dataset.liveness"
                   :loudness="dataset.loudness"
                   :preview="dataset.song_id"
                   :speechiness="dataset.speechiness"
                   :tempo="dataset.tempo"
                   :track="dataset.track_name"
                   :valence="dataset.valence"
                   class=""
                   @show-details="addToChart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SongRow from "@/components/SongRow";
import dataset from "./../services/dataset.json";
import cover from "./../assets/albumcover01.jpg";

export default {
  name: "SongAttributes",
  components: {SongRow},
  data() {
    return {
      cover,
      show: true,
      dataset,
      chartOptions: {

        chart: {
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
            'loudness',
            'speechiness',
            'valence',
            'tempo']
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
          name: "Top 2000 Songs",
          data: [0.29, 0.53, 0.6, 0.05, 0.19, 0.19, 0.05, 0.49, 0.49]
        }
      ],
      labels: [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'loudness',
        'speechiness',
        'valence',
        'tempo']
    }
  },
  methods: {
    addToChart(data) {

      let selectedSong = [
        data.acousticness,
        data.danceability,
        data.energy,
        data.instrumentalness,
        data.liveness,
        data.liveness,
        data.speechiness,
        data.valence,
        data.valence
      ]

      this.series = [
        {
          name: "Top 2000 Songs",
          data: [0.29, 0.53, 0.6, 0.05, 0.19, 0.19, 0.05, 0.49, 0.49]
        },
        {
          name: data.track_name,
          data: selectedSong
        }
      ]
    },
    // showChart() {
    //   this.expand = !this.expand;
    //   if (this.show) {
    //     this.show = false;
    //   } else {
    //     setTimeout(() => {
    //       this.show = true;
    //     }, 600);
    //   }
    // }
  }
}
</script>

<style scoped>

.background-cover {
  filter: blur(4px);
}

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