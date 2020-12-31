<template>
  <div class="home-content flex-none">
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

    <div class="song-row mt-10 flex-1 h-screen overflow-y-auto">

      <SongRow class=""
               v-for="dataset in dataset"
               :key="dataset.song_id"
               :track="dataset.track_name"
               :artist="dataset.artist_name"
               :album="dataset.album_name"
               :cover="dataset.album_cover"/>

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
      dataset,
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