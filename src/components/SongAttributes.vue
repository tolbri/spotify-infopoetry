<template>
  <div class="home-content flex-none">
    <div class="flex  mt-10 p-5 ">
      <transition name="expand">
        <div :class="{ enlarge: expand }" class="cover bg-light mr-10 shadow-lg">
          <div v-if="show" class="w-full h-full p-5">
          <apexchart ref="demoChart" width="100%" height="100%" type="radar" :options="chartOptions" :series="series"></apexchart>
          </div>
          <img v-else src="./../assets/albumcover01.jpg" alt="" class="w-full h-full" />
        </div>
      </transition>
      <div class="flex-1 mt-auto">
        <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
        <h2 class="mb-5 text-5xl font-semibold text-white">Song Attributes</h2>
        <p>Created by <span class="text-white">Tim Olbrich</span> • 2000 Songs, 20 h 30 min.</p>
        <button @click="showChart"
                class="px-8 py-2 mt-5 bg-main rounded-full uppercase tracking-wide text-white text-xs">
          {{ expand ? 'Close' : 'Open' }}
        </button>
      </div>
    </div>
    <div class="w-full p-5">
      <strong class="uppercase tracking-widest text-white font-light text-xs">Information</strong>
      <p class="pt-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="song-row mt-5 flex-1 h-screen overflow-y-auto">

      <SongRow @show-details="addToChart"
               class=""
               v-for="dataset in dataset"
               :key="dataset.song_id"
               :track="dataset.track_name"
               :artist="dataset.artist_name"
               :album="dataset.album_name"
               :cover="dataset.album_cover"
               :danceability="dataset.danceability"
               :acousticness="dataset.acousticness"
               :energy="dataset.energy"
               :instrumentalness="dataset.instrumentalness"
               :liveness="dataset.liveness"
               :loudness="dataset.loudness"
               :speechiness="dataset.speechiness"
               :valence="dataset.valence"
               :tempo="dataset.tempo"
      />
    </div>

  </div>
</template>

<script>

import SongRow from "@/components/SongRow";
import dataset from "./../services/dataset.json";

export default {
  name: "SongAttributes",
  components: {SongRow},
  data() {
    return {
      show: false,
      expand: false,
      dataset,
      chartOptions: {
        animations: {
          enabled: false,
          dynamicAnimation: {
            enabled: false,
          }
        },
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
      if(this.show) {


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
      }
    },
    showChart() {
      this.expand = !this.expand;
      if (this.show) {
        this.show = false;
      } else {
        setTimeout(() => {
          this.show = true;
        }, 600);
      }
    }
  }
}
</script>

<style scoped>
.cover {
  width: 14rem;
  height: 14rem;
  transition: all .5s ease;
  overflow: hidden;
}

.cover.enlarge {
  width: 50vh;
  height: 50vh;
}

.song-row::-webkit-scrollbar
{
  width: 8px;
  background-color: #181818;
}
.song-row::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}
</style>