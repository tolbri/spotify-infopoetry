<template>
<div class="p-5 flex items-center text-white">
  <img class="h-10 w-10" src="./../assets/albumcover01.jpg" alt="" />
  <div class="ml-10">
    <h1 class="text-sm">{{ track }}</h1>
    <p class="text-xs mt-1 text-lightest">
      {{ artist }}
      {{ year }}
    </p>
  </div>
</div>
</template>

<script>
export default {
name: "SongRow",
  props: {
  track: {
    type: String
    },
    artist: {
      type: String
    },
    year: {
      type: Number
    }
  }
}
</script>

<style scoped>

</style>