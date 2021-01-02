<template>
  <div @mouseover="emitDetails" class="p-5 flex items-center text-white hover:bg-darkest cursor-pointer">
    <img class="h-10 w-10" :src="`${cover}`" alt=""/>
    <div class="ml-10">
      <h1 class="text-sm">{{ track }}</h1>
      <p class="text-xs mt-1 text-lightest">
        {{ artist }}
        {{ album }}
      </p>
    </div>
  </div>
</template>


<script>

export default {
  name: "SongRow",
  props: {
    cover: {
      type: String
    },
    track: {
      type: [String, Number]
    },
    artist: {
      type: String
    },
    album: {
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
    }
  },
  methods: {
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
        tempo: this.tempo
      }
      this.$emit('show-details', data)
    }
  }
}

</script>


<style scoped>

</style>