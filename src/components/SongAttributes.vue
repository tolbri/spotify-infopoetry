<template>
  <div class="home-content">
    <div class="flex flex-end mt-10 p-5 ">
      <transition name="expand">
        <div v-bind:class="{ enlarge: expand }" class="cover bg-light mr-10 shadow-lg">
          <!--VISUALIZATION-->
        </div>
      </transition>
      <div class="flex1 mt-auto">
        <strong class="uppercase tracking-widest text-white font-light text-xs">Library</strong>
        <h2 class="mb-5 text-5xl font-semibold text-white">Song Attributes</h2>
        <p>Created by <span class="text-white">Tim Olbrich</span> • 2000 Songs, 20 h 30 min.</p>
        <button @click="expand = !expand"
                class="px-8 py-2 mt-5 bg-main rounded-full uppercase tracking-wide text-white text-xs">
          {{ expand ? 'Close' : 'Open' }}
        </button>
      </div>
    </div>
    <div class="mt-10">
      <SongRow v-for="dataObject in dataObject"
               :key="dataObject.title"
               :track="dataObject.title"
               :artist="dataObject.artist"
               :year="dataObject.year"/>
    </div>
  </div>
</template>

<script>

import SongRow from "@/components/SongRow";
import dataObject from "./../services/dataset.json";


export default {
  name: "SongAttributes",
  components: {SongRow},
  data() {
    return {
      dataObject1: [
        {
          "title": "Sunrise",
          "artist": "Norah Jones",
          "year": 2004
        },
        {
          "title": "Black Night",
          "artist": "Deep Purple",
          "year": 2000
        }
        ],
      dataObject,
      expand: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.cover {
  width: 14rem;
  height: 14rem;
  transition: all .5s;
}

.cover.enlarge {
  width: 30rem;
  height: 30rem;
}


</style>