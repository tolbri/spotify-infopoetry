<template>
  <div class="device-container absolute bottom-16 right-20 h-72 w-56 bg-light shadow-2xl">
    <h3 class="text-center">Connect a device</h3>
    <div class="flex justify-center">
      <img src="./../assets/albumcover01.jpg" alt="" class="h-12 w-12">
      <ul>
        <li v-for="(device, index) in devices"
            :key="index">
        <button @click="selectDevice(device.id)">
          <div class="">
            <p>{{device.name}}</p>
          </div>
        </button>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>




import {spotify} from "@/services/spotify";
import {store} from "@/store";

export default {
  name: "Devicepicker",
  mounted() {
    spotify.getMyDevices()
        .then(function(data) {
          store.dispatch('saveDevices', {devices: data.devices})
        }, function(err) {
          console.log('Something went wrong!', err);
        });
  },
  created() {
    this.devices = this.$store.getters.devices;
  },
  data() {
    return {
      devices: []
    }
  },
  methods: {
    selectDevice(deviceIds) {
      console.log(this.devices[0].id);
      spotify.transferMyPlayback(deviceIds)
          .then(function() {
            console.log('Transfering playback to ' + deviceIds);
          }, function(err) {
            //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
            console.log('Something went wrong!', err);
          });
    }

  }
}
</script>

<style scoped>


</style>