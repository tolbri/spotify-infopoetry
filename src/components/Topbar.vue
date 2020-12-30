<template>
  <div class="top-bar flex justify-end px-4">
    <div class="flex items-center">
      <div class="relative w-8 h-8">
      <img v-if="$store.getters.user" :src="$store.getters.user.images[0].url" class="rounded-full" />
      </div>
      <a v-if="$store.getters.user == null" :href="loginURL" class="ml-2 hover:underline hover:text-white">Login</a>
      <a v-else href="#" class="ml-2 hover:underline hover:text-white">{{$store.getters.user.display_name}}</a>
      <button class="ml-4">
        <svg class="fill-current text-lightest hover:text-white w-6 h-6" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
import {loginURL} from "@/services/spotify";

export default {
  created() {
    this.loginURL = loginURL;
  },
  name: "Topbar"
}
</script>


<style scoped>
.top-bar {
  height: 52px;
}

</style>