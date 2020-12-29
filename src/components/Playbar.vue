<template>
  <div class="bg-light flex-none h-22 px-5 flex items-center justify-between">
    <div class="flex items-center">
      <a href="#"><img src="./../assets/albumcover01.jpg" alt="album cover" class="w-14 h-14"></a>
      <div class="ml-3">
        <div><a href="#" class="hover:underline text-white">Name of Song</a></div>
        <div><a href="#" class="text-xs text-lightest hover:underline hover:text-white">Artist Name</a></div>
      </div>
    </div>
    <div class="player-controls flex flex-col justify-center">
      <div class="flex justify-center">
        <button>
          <svg class="fill-current text-lightest hover:text-white h-4 w-4" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
        </button>
        <button class="ml-8">
          <svg class="fill-current text-lightest hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
        </button>
        <button class="ml-8">
          <svg class="fill-current text-lightest hover:text-white h-8 w-8" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6l8 4-8 4V6z"/></svg>
        </button>
        <button class="ml-8">
          <svg class="fill-current text-lightest hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
        </button>
        <button class="ml-8">
          <svg class="fill-current text-lightest hover:text-white h-4 w-4" viewBox="0 0 24 24" width="24" height="24"><path d="M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z"/></svg>
        </button>
      </div>
      <div class="max-w-full mt-3 flex items-center justify-center">
        <div class="text-xs text-lightest">1:20</div>
        <div class="bg-lightest rounded-lg w-full md:w-100 xl:w-180 h-1 ml-3"></div>
        <div class="ml-3 text-xs text-lightest">3:21</div>
      </div>
    </div>
    <div class="volume-controls flex items-center">
      <button>
        <svg class="fill-current text-lightest hover:text-white h-6 w-6" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>
      </button>
      <button class="ml-4">
        <svg class="fill-current text-lightest hover:text-white h-5 w-5" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"/></svg>
      </button>
      <button class="ml-4">
        <svg class="fill-current text-lightest hover:text-white h-5 w-5" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </button>
      <div class="bg-lightest rounded-lg w-20 h-1 ml-3"></div>
      <button class="ml-4">
        <svg class="fill-current text-lightest hover:text-white h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playbar"
}
</script>

<style scoped>

</style>