<template>
<div class="p-5 flex items-center text-white hover:bg-darkest cursor-pointer">
  <img class="h-10 w-10" :src="`${cover}`" alt="" />
  <div class="ml-10">
    <h1 class="text-sm">{{ track }}</h1>
    <p class="text-xs mt-1 text-lightest">
      {{ artist }}
      {{ album }}

    </p>
  </div>
</div>
</template>


<script>

export default {
name: "SongRow",
  props: {
  cover: {
    type: String
  },
  track: {
    type: String
    },
    artist: {
      type: String
    },
    album: {
      type: [String, Number]
    }
  }

}
</script>

<style scoped>

</style>