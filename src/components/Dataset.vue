<template>
  <div class="flex flex-col content-spotify bg-dark w-full">
    <div class="h-14">
      <Topbar />
    </div>
    <div class=" overflow-y-auto overflow-x-hidden">
      <div class="container mx-auto flex flex-col h-full">
          <div class="pt-2">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Dataset</strong>
            <h2 class="top-bar-headline mb-5 text-5xl font-semibold text-white">500 Greatest Songs of All Time</h2>
            <p>Created by <a href="https://www.rollingstone.com/music/music-lists/500-greatest-songs-of-all-time-151127/" target="_blank" class="text-white hover:underline">Rolling Stone</a> • 500 Songs, 32 h 45 min.</p>
            <a href="/#/downloads/spotify-infopoetry-rolling-stones.csv" download="spotify-infopoetry">
            <button class="w-28 py-2 mr-2 mt-5 text-center bg-purple-600 rounded-full uppercase tracking-wide text-white text-xs">
              Download
            </button>
            </a>
            <a href="https://open.spotify.com/playlist/33jXjzOGlYJcnHhARPj4LK" target="_blank">
            <button class="w-28 py-2 mx-2 mt-5 text-center bg-purple-600 rounded-full uppercase tracking-wide text-white text-xs">
              Follow
            </button>
            </a>
          </div>
          <div class="w-full pt-5">
            <strong class="uppercase tracking-widest text-white font-light text-xs">Information</strong>
            <p class="pt-1">The music magazine Rolling Stone published a list of their greatest 500 Songs of All Time. Now you can listen to it on Spotify or download the dataset for your own purposes. The subsequent table is ordered from first place (top) to last place (bottom).</p>
          </div>

          <div class="py-2 pl-2 flex justify-start flex-row text-white mt-10">
            <div class="w-20 flex items-center">
            </div>
            <div class="xl:pl-10 pl-5 xl:w-96 lg:w-56 w-full">
              <h1 class="text-sm truncate px-2 uppercase tracking-widest text-xs text-lightest">Title & Artist</h1>
            </div>
            <div class="xl:w-72 lg:w-52 lg:flex hidden px-2 truncate uppercase tracking-widest text-xs text-lightest">
              Writer
            </div>
            <div class="xl:w-72 lg:w-52 lg:flex hidden px-2 uppercase tracking-widest text-xs text-lightest">
              Producer
            </div>
            <div class="xl-20 xl:flex hidden px-2 text-right uppercase tracking-widest text-xs text-lightest">
              Year
            </div>
          </div>

          <div class="song-row mt-2 divide-y divide-light">
            <SongRow v-for="dataset in dataset"
                     :id="dataset.spotify_id"
                     :key="dataset.index"
                     :album="dataset.album_name"
                     :artist="dataset.artist"
                     :album_cover="dataset.album_img"
                     :track="dataset.title"
                     :producer="dataset.producer"
                     :writers="dataset.writers"
                     :year="dataset.year"
                     :dataset="true"


                     @show-details="function () {return}"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import SongRow from "@/components/SongRow";
import dataset from "./../services/top_500.json";
import Topbar from "@/components/Topbar";

export default {
  name: "Dataset",
  components: {SongRow, Topbar},
  data() {
    return {
      dataset
    }
  },
}
</script>

<style scoped>

.dataset::-webkit-scrollbar {
  width: 8px;
  background-color: #181818;
}

.dataset::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}
</style>
