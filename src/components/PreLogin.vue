<template>
  <div class="flex flex-col content-spotify bg-dark w-full">
    <div class="h-14">
      <Topbar />
    </div>
    <div class="home-content overflow-y-auto overflow-x-hidden">
      <div class="container mx-auto">
        <h2 class="top-bar-headline mt-24 text-5xl font-semibold text-white">Before You Login</h2>
        <div class="mt-12">
          <h3 class="font-semibold text-xl border-b border-light pb-2">Permissions</h3>
          <div class="flex flex-wrap items-start mt-4 -mx-4">
            <div class="lg:w-2/5 w-full px-4">
              <div>
                  <h4 class="text-white font-semibold block mt-2">Connect to Spotify</h4>
                <div class="text-lightest mt-2">
                  <p>Connecting a Spotify account to this app allows you to make your music habits become visible. Each graph is going to add your favorite tracks to the visualization, so you can compare your statistics with the 500 Greatest Songs of All Time.</p>
                </div>
                <h4 class="text-white font-semibold block mt-4">Data Privacy</h4>
                <div class="text-lightest mt-2">
                  <p>You are automatically being logged out after one hour. Moreover, your data does not get stored anywhere and remains on your local device.If you decide to continue, Spotify will ask you to give permission to this application. The table illustrates what each permission is used for.</p>
                </div>
              </div>
              <div class="flex mt-4">
                <a v-if="$store.getters.user == null" :href="loginURL" class="mx-auto">
                <button  class="w-24 py-2 mt-5 text-center bg-purple-600 rounded-full uppercase tracking-wide text-white text-xs">
                  Login
                </button>
                </a>
              </div>
            </div>
            <div class="lg:w-3/5 w-full px-4 lg:my-0 my-10">
              <div>
                <div class="overflow-hidden pr-1 mt-2">
                  <table class="table-auto bg-purpl">
                    <thead>
                    <tr>
                      <th class="text-left text-white font-semibold pb-2">Scope</th>
                      <th class="text-left text-white font-semibold pb-2">Usage</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Access your subscription details.</td>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Required to stream music from the Spotify library through this app.</td>
                    </tr>
                    <tr class="bg-emerald-200">
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Get your real email address.</td>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Required to stream music from the Spotify library through this app.</td>
                    </tr>
                    <tr>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Play content and control playback on your other devices.</td>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Required to stream music from the Spotify library through this app.</td>
                    </tr>
                    <tr>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Read your top artists and content.</td>
                      <td class="border border-lightest px-4 py-2 text-emerald-600 font-medium">Used to retrieve your recently most played songs, which is then added into the graphs.</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

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
import {loginURL} from "@/services/spotify";

export default {
  name: "PreLogin",
  components: {Topbar },
  data: function(){
    return {
      loginURL
    }
  },
}
</script>

<style scoped>

</style>