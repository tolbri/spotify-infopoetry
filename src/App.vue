<template>
  <div class="flex flex-col h-screen  text-sm text-lightest">
    <div class="flex-1 flex overflow-y-hidden overflow-x-hidden">
      <Sidebar />
<!--      <div class="flex-1 flex flex-col content-spotify bg-dark w-full">-->
<!--        <Topbar />-->
        <router-view></router-view>
<!--      </div>-->
    </div>
    <Playbar />
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Playbar from "@/components/Playbar";
import { store } from "@/store";
import {getAccessToken, spotify} from "@/services/spotify";




export default {
  name: 'App',
  components: {Playbar, Sidebar},
  mounted() {

     const accessToken = getAccessToken() || this.accessToken // comes from URL or Vuex
      store.dispatch('saveAccessToken', {accessToken})
    if (this.$store.getters.accessToken) {
      console.log("Token Received");
      spotify.setAccessToken(accessToken)
      spotify
          .getMe()
          .then(me => {
            store.dispatch('saveUser', {user: me})
            return me
          });

      this.playback(accessToken);
    }




  },
  watch: {
    '$store.getters.user': function () {
      if (this.$store.getters.user) {
        /* Get a User’s Top Tracks*/
        spotify.getMyTopTracks()
            .then(function (data) {
              let topTracks = data.items;
              console.log(topTracks);
              store.dispatch('saveTopTracks', {topTracks: topTracks})
            }, function (err) {
              console.log('Something went wrong!', err);
            });
      }
    },
    '$store.getters.topTracks': function () {
      let userTracks = this.$store.getters.topTracks;
      if (userTracks) {
        this.getUserAudioFeatures(userTracks)
      }
    }
  },
  data: function() {
    return {


    };
  },
  methods: {
    getUserAudioFeatures(tracks) {
      let userTopTracks = []

      tracks.map(function(tracks) {
        userTopTracks.push(tracks.id)
      });

      /* Get Audio Features for several tracks */
      spotify.getAudioFeaturesForTracks([userTopTracks])
          .then(function(data) {
            console.log(data);
            store.dispatch('saveAudioFeatures', {audioFeatures: data.audio_features})
          }, function(err) {
            console.log(err);
          });
    },
    playback(accessToken) {
      let spotifySDK = document.createElement('script')
      spotifySDK.setAttribute('src', 'https://sdk.scdn.co/spotify-player.js')
      document.head.appendChild(spotifySDK)

      window.onSpotifyWebPlaybackSDKReady = () => {
      // Set token
        const token = accessToken;
        const player = new window.Spotify.Player({
          name: 'Infopoetry Player',
          getOAuthToken: cb => { cb(token); }
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', state => {
          console.log(state);
          store.dispatch('saveDuration', {duration: state.duration});
          store.dispatch('saveCurrentPosition', {currentPosition: state.position});

        });

        // Ready
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
          store.dispatch('saveDeviceId', {deviceId: device_id});
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        // Connect to the player!
        player.connect();
      };
    }
  }
};
</script>

<style>
.k-progress-outer {
  margin-right: 0 !important;;
  padding-right: 0 !important;
}
::-webkit-scrollbar
{
  width: 8px;
  background-color: #121212;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #535353;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
}
</style>
