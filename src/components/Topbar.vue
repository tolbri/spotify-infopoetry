<template>
  <div class="header z-10 top-bar flex justify-stretch px-4">
    <div class="flex flex-1 items-center">
      <h2 class="headline text-2xl font-semibold text-white px-5"></h2>
    </div>
    <div class="flex items-center">
      <div class="relative w-8 h-8">
      <img v-if="$store.getters.user" :src="$store.getters.user.images[0].url" class="rounded-full" />
      </div>
      <router-link to="/prelogin" v-if="$store.getters.user == null">
      <a  href="#" class="ml-2 hover:underline hover:text-white">Login</a>
      </router-link>
      <p v-else href="#" class="ml-2">{{$store.getters.user.display_name}}</p>
<!--      <button v-if="$store.getters.user" class="ml-4" @click="accountOptions = !accountOptions">-->
<!--        <svg class="fill-current text-lightest hover:text-white w-6 h-6" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"/></svg>-->
<!--      </button>-->
<!--      <div v-if="accountOptions" class="absolute right-4 top-14 p-2 bg-light rounded-sm">-->
<!--        <ul class="divide-y divide-lightest">-->
<!--          <li class="py-2 px-5">-->
<!--            Account-->
<!--            <font-awesome-icon  class="ml-1" size="sm" :icon="['fa', 'external-link-square']" />-->
<!--          </li>-->
<!--          <li class="py-2 px-5 border-to border-lightest">-->
<!--            Logout-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

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
  data: function(){
    return {
      accountOptions: false
    }
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