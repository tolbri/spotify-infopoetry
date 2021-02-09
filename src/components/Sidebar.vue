<template>
  <div class="z-10 sidebar bg-darkest w-48 flex-none flex flex-col justify-start font-semibold">
    <div class="flex pl-5 w-4/5 mt-6">
      <img :src="`${logo}`" alt="chartbreakers" class="h-full mx-auto">
    </div>
    <ul class="pb-6 pt-4">
      <router-link to="/">
      <li class="border-l-4 border-transparent">
        <div class="flex items-center duration-500 hover:text-white mx-3 mt-5 group">
          <font-awesome-icon class="fill-current text-lightest h-6 w-6 duration-500 group-hover:text-white" size="2x" :icon="['fal', 'home-alt']" />
          <span class="ml-2 group-hover:text-white">Start</span>
        </div>
      </li>
      </router-link>
      <router-link to="/dataset">
        <li class="border-l-4 border-transparent">
          <div class="flex items-center duration-500 hover:text-white mx-3 mt-5 group">
            <font-awesome-icon class="fill-current text-lightest h-6 w-6 duration-500 group-hover:text-white" size="2x" :icon="['fal', 'album-collection']" />
          <span class="ml-2 group-hover:text-white">Dataset</span>
          </div>
        </li>
      </router-link>
      <router-link to="/about">
      <li class="border-l-4 border-transparent">
        <a href="#" class="flex items-center duration-500 hover:text-white mx-3 mt-5 group">
          <font-awesome-icon class="fill-current text-lightest h-6 w-6 duration-500 group-hover:text-white" size="2x" :icon="['fal', 'info-circle']" />
          <span class="ml-2 group-hover:text-white2">About</span>
        </a>
      </li>
      </router-link>
    </ul>
    <div class="sidebar-spotify overflow-y-auto px-5 mt-2">
      <h3 class="uppercase tracking-widest text-lightest font-light text-xs">Library</h3>
      <ul class="leading-extra-loose">
        <router-link to="/songpopularity">
        <li class="truncate"><a href="#" class="hover:text-white">Track Popularity</a></li>
        </router-link>
        <router-link to="/danceability">
        <li class="truncate"><a href="#" class="hover:text-white">Danceability</a></li>
        </router-link>
        <router-link to="/songattributes">
          <li class="truncate"><a href="#" class="hover:text-white">Song Attributes</a></li>
        </router-link>
        <router-link to="/duration">
        <li class="truncate"><a href="#" class="hover:text-white">Playback Duration</a></li>
        </router-link>
      </ul>

      <h3 class="uppercase tracking-widest text-lightest font-light text-xs mt-6">Disclosure</h3>
      <ul class="leading-extra-loose mb-6">
        <li class="truncate"><a href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank" class="hover:text-white">Spotify API</a></li>
        <li class="truncate"><a href="https://github.com/tolbri/spotify-infopoetry" target="_blank" class="hover:text-white">Github</a></li>

      </ul>

    </div>
<!--    <div class="border-t border-light h-16 px-4 py-2 flex items-center group">-->
<!--      <svg class="fill-current text-lightest w-8 h-8 group-hover:text-white" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"/></svg>-->
<!--      <a href="#" class="font-normal text-lightest ml-2 group-hover:text-white">New Playlist</a>-->
<!--    </div>-->
  </div>
</template>

<script>
import logo from "./../assets/chartbreakers.png";

export default {
name: "Sidebar",
  data() {
    return {
      logo
      }
    }
}
</script>

<style scoped>
.router-link-exact-active li {
  @apply border-purple-600;
}

</style>