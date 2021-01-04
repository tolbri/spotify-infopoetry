<template>
  <div class="header z-10 top-bar flex justify-stretch px-4">
    <div class="flex flex-1 items-center">
      <h2 class="headline text-2xl font-semibold text-white px-5"></h2>
    </div>
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
  mounted() {
    const header = document.querySelector(".top-bar");
    const headline = document.querySelector(".headline");
    const headlineText = document.querySelector(".top-bar-headline");
    const observerOptions = {
      rootMargin: "0px 0px 0px 0px"
    };

    const intersectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          headline.textContent = headlineText.textContent;
          header.classList.add("active");

        } else {
          headline.textContent = "";
          header.classList.remove("active");
        }
      })
    }, observerOptions);
    intersectionObserver.observe(headlineText);
  },
  created() {
    this.loginURL = loginURL;
  },
  name: "Topbar"
}
</script>


<style scoped>
.top-bar {
  height: 52px;
  border-bottom: #282828 solid 1px;
  transition: .5s;
}

.top-bar.active {
  background-color: #121212;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
              var(--tw-ring-shadow, 0 0 #0000),
              var(--tw-shadow);
}

</style>