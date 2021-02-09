<template>
  <div class="flex flex-col content-spotify bg-dark w-full">
    <div class="h-14">
      <Topbar />
    </div>
  <div class="flex-1 home-content overflow-y-auto overflow-x-hidden">
    <div class="container mx-auto">
  <h2 class="top-bar-headline mt-24 text-5xl font-semibold text-white">Home</h2>
  <div class="mt-12">
    <h3 class="font-semibold text-xl border-b border-light pb-2">Data Visualizations</h3>
    <div class="flex items-start mt-4 -mx-4 flex-wrap">

      <div class="xl:w-1/5 lg:w-1/4 w-1/2 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/songpopularity">
        <a href="#">
        <div class="relative rounded overflow-hidden">
          <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
            <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
          </div>
          <img src="./../assets/albumcover01.jpg" alt="album cover">
        </div>
        </a>
          </router-link>
        <div>
          <router-link to="/songpopularity">
          <a href="#" class="text-white font-semibold block hover:underline mt-2">Track Popularity</a>
          </router-link>
          <div class="text-lightest mt-2">How relevant are hits from past decades nowadays?</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">6679 Followers</div>
        </div>
      </div>

      <div class="xl:w-1/5 lg:w-1/4 w-1/2 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/danceability">
          <a href="#">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover02.jpg" alt="album cover">
            </div>
          </a>
        </router-link>
        <div>
          <router-link to="/danceability">
            <a href="#" class="text-white font-semibold block hover:underline mt-2">Danceability</a>
          </router-link>
          <div class="text-lightest mt-2">Does a song have to make you dance to be successful?</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">9271 Followers</div>
        </div>
      </div>

      <div class="xl:w-1/5 lg:w-1/4 w-1/2 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/songattributes">
          <a href="#">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover03.jpg" alt="album cover">
            </div>
          </a>
        </router-link>
        <div>
          <router-link to="/songattributes">
            <a href="#" class="text-white font-semibold block hover:underline mt-2">Song Attributes</a>
          </router-link>
          <div class="text-lightest mt-2">What do hit records have in common and where are exceptions?</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">3201 Followers</div>
        </div>
      </div>

      <div class="xl:w-1/5 lg:w-1/4 w-1/2 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/duration">
          <a href="#">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover04.jpg" alt="album cover">
            </div>
          </a>
        </router-link>
        <div>
          <router-link to="/duration">
            <a href="#" class="text-white font-semibold block hover:underline mt-2">Playback Duration</a>
          </router-link>
          <div class="text-lightest mt-2">Can a track be too short or too long to become an all-time-hit?</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">7044 Followers</div>
        </div>
      </div>







    </div>
  </div>

  <div class="mt-12 mb-12">
    <h3 class="font-semibold text-xl border-b border-light pb-2">Disclosure</h3>
    <div class="flex items-start mt-4 -mx-4">
      <div class="xl:w-1/5 lg:w-1/4 w-1/3 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/dataset">
          <a href="#">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover05.jpg" alt="album cover">
            </div>
          </a>
        </router-link>
        <div>
          <router-link to="/dataset">
            <a href="#" class="text-white font-semibold block hover:underline mt-2">Dataset</a>
          </router-link>
          <div class="text-lightest mt-2">Everything about the dataset and where it comes from.</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">3390 Followers</div>
        </div>
      </div>

      <div class="xl:w-1/5 lg:w-1/4 w-1/3 px-4  mb-10 lg:mb-0 mb-0">
          <a href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover06.jpg" alt="album cover">
            </div>
          </a>
        <div>
            <a href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank" class="text-white font-semibold block hover:underline mt-2">Spotify API</a>
          <div class="text-lightest mt-2">Information about the integration of Spotify into this project.</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">1089 Followers</div>
        </div>
      </div>

      <div class="xl:w-1/5 lg:w-1/4 w-1/3 px-4  mb-10 lg:mb-0 mb-0">
        <router-link to="/about">
          <a href="#">
            <div class="relative rounded overflow-hidden">
              <div class="absolute bg-dark h-full w-full z-10 hover:opacity-40 opacity-0">
                <font-awesome-icon  class="absolute left-2 bottom-2 text-lightest hover:text-white" size="2x" :icon="['fa', 'play-circle']" />
              </div>
              <img src="./../assets/albumcover07.jpg" alt="album cover">
            </div>
          </a>
        </router-link>
        <div>
          <router-link to="/about">
            <a href="#" class="text-white font-semibold block hover:underline mt-2">About</a>
          </router-link>
          <div class="text-lightest mt-2">Background story of the project, credits and explanation.</div>
          <div class="uppercase tracking-widest text-xs text-lightest mt-2">2034 Followers</div>
        </div>
      </div>

    </div>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
export default {
  name: "Home",
  components: {Topbar },
}
</script>

<style scoped>

</style>