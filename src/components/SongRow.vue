<template>
  <div class="py-2 pl-2 flex justify-start flex-row text-white" v-bind:class="{ 'cursor-pointer':!dataset, 'hover:bg-light': !dataset }" @click="emitDetails(), showChart();">

    <div class="w-10 flex items-center " @click="playSong()">
        <font-awesome-icon :icon="['fas', 'play-circle']" class="text-lightest hover:text-white" size="2x" />
    </div>

      <div class="w-10">
        <img :src="`${album_cover}`" alt="" class="w-full"/>
      </div>

    <div class="xl:pl-10 pl-5 xl:w-96 lg:w-56 w-full">
      <h1 class="text-sm truncate px-2">{{ track }}</h1>
      <p class="text-xs mt-1 text-lightest truncate px-2">
        {{ artist }}
      </p>
    </div>


      <div class="xl:w-72 lg:w-52 lg:flex hidden px-2" v-if="dataset">
        <p class="truncate">{{writers}}</p>
      </div>
      <div class="xl:w-72 lg:w-52 lg:flex hidden px-2" v-if="dataset">
        <p class="truncate">{{producer}}</p>
      </div>
      <div class="xl-20 xl:flex hidden px-2 text-right" v-if="dataset">
        {{year}}
      </div>


  </div>
</template>


<script>

import {store} from "@/store";

export default {
  name: "SongRow",
  props: {
    album_cover: {
      type: String
    },
    track: {
      type: [String, Number]
    },
    artist: {
      type: String
    },
    album_name: {
      type: [String, Number]
    },
    danceability: {
      type: [String, Number]
    },
    acousticness: {
      type: [String, Number]
    },
    energy: {
      type: [String, Number]
    },
    instrumentalness: {
      type: [String, Number]
    },
    liveness: {
      type: [String, Number]
    },
    loudness: {
      type: [String, Number]
    },
    speechiness: {
      type: [String, Number]
    },
    valence: {
      type: [String, Number]
    },
    tempo: {
      type: [String, Number]
    },
    id: {
      type: [String]
    },
    popularity: {
      type: [Number]
    },
    year: {
      type: [Number]
    },
    duration: {
      type: [Number]
    },
    writers: {
      type: [String],
    },
    producer: {
      type: [String]
    },
    dataset: {
      type: [Boolean],
      default: false
    }
  },
  methods: {
    selectSong() {
      let data = {
        track_id: this.id,
        artist: this.artist,
        track: this.track,
        cover: this.album_cover,
        play: false
      }
      store.dispatch('saveSelectedSong', {selectedSong: data});
    },
    playSong() {
      let data = {
        track_id: this.id,
        artist: this.artist,
        track: this.track,
        cover: this.album_cover,
        play: true
      }
      store.dispatch('saveSelectedSong', {selectedSong: data});
    },
    emitDetails() {
      let data = {
        track_name: this.track,
        danceability: this.danceability,
        acousticness: this.acousticness,
        energy: this.energy,
        instrumentalness: this.instrumentalness,
        liveness: this.liveness,
        loudness: this.loudness,
        speechiness: this.speechiness,
        valence: this.valence,
        tempo: this.tempo,
        popularity: this.popularity,
        year: this.year,
        duration: this.duration
      }
      this.$emit('show-details', data)
    },
    showChart() {
      this.$emit('show-chart')
    }
  }
}

</script>


<style scoped>

</style>