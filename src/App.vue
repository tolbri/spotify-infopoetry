<template>
  <div class="w-scree h-screen relative">
    <div class="md:hidden absolute top-0 left-0 flex bg-dark h-screen w-screen z-60">
      <div class="flex flex-col mx-auto my-auto container">
        <div class="flex mx-auto mb-2">
          <font-awesome-icon class="text-purple-500 opacity-50" size="2x" :icon="['fa', 'desktop']" />
        </div>
        <h2 class="font-semibold text-xl text-purple-500 text-center">This website works best on a tablet or desktop device.</h2>
      </div>
    </div>
  <div class="hidden md:flex flex-col h-screen w-full text-sm text-lightest">
    <div class="flex-1 flex overflow-x-hidden overflow-y-auto relative">
      <Sidebar />
      <router-view></router-view>
    </div>
    <div class="h-28 bg-light">
    <Playbar />
    </div>
  </div>
  </div>
</template>



<script>

// import Topbar from "@/components/Topbar";
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
            console.log(me);
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
@media (min-width: 768px) {
  ::-webkit-scrollbar {
    display: none;
  }
}

@media (min-width: 1024px) {
  ::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #181818;
  }

  ::-webkit-scrollbar-thumb {
    display: block;
    border-radius: 8px;
    background-color: #535353;
  }
}
</style>
