<template>
  <div class="flex flex-col h-screen text-sm text-lightest">
    <div class="flex-1 flex overflow-y-hidden">
      <Sidebar />
      <div class="content-spotify content-area bg-dark flex-1 flex flex-col">
        <Topbar />
        <div class="content-spotify overflow-y-auto">
          <div class="container mx-auto">
            <router-view>

            </router-view>
          </div>
        </div>
      </div>
    </div>
    <Playbar />
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Playbar from "@/components/Playbar";
import Topbar from "@/components/Topbar";
import { store } from "@/store";
import {getAccessToken, spotify} from "@/services/spotify";





export default {
  name: 'App',
  components: {Topbar, Playbar, Sidebar},
  mounted() {

    const accessToken = getAccessToken() || this.accessToken // comes from URL or Vuex
      store.dispatch('saveAccessToken', {accessToken})
    if (this.$store.getters.accessToken) {
      console.log(accessToken);
      spotify.setAccessToken(accessToken)
      spotify
          .getMe()
          .then(me => {
            store.dispatch('saveUser', {user: me})
            return me
          })
    }
  },
  data: function() {
    return {


    };
  },
  methods: {

  }
};
</script>

<style>
.sidebar-spotify::-webkit-scrollbar
{
  width: 8px;
  background-color: #121212;
}
.sidebar-spotify::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}
.content-spotify::-webkit-scrollbar
{
  width: 8px;
  background-color: #181818;
}
.content-spotify::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}
</style>
