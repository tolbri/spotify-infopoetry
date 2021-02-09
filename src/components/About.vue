<template>
  <div class="flex flex-col content-spotify bg-dark w-full">
    <div class="h-14">
      <Topbar/>
    </div>
    <div class="flex-1 home-content overflow-y-auto overflow-x-hidden">
      <div class="container mx-auto">
        <h2 class="top-bar-headline mt-24 text-5xl font-semibold text-white">About</h2>
        <div class="xl:px-64 lg:px-24 px-0 flex flex-col">


          <div class="flex flex-col">
            <div class="flex h-22 sticky top-0 bg-dark border-b-2 border-light pb-2">
              <h3 class="self-end font-semibold text-xl">The Chartbreakers Project</h3>
            </div>
            <div class="xl:w-2/3 lg:w-4/5 w-full mx-auto mt-4">
              <strong class="uppercase tracking-widest text-white font-light text-xs">How Music is Made</strong>
              <p class="py-4">As much as making music can be an act of creative muse, it often is a commercialized
                process. Sometimes even both. It is a myth that artists sit for hours at their piano, spending nights
                over their notes while they wait for a sudden inspiration. This romanticized image might apply to
                movies, but the reality often looks different. Catchy songs like “Last Christmas” or are produced with
                the help of reoccurring patterns, rules that direct them. This infopoetry’s aim is to make some of these
                patterns visible in order to sensitize users for their music streaming consumption. Moreover, it is able
                to take the user’s music taste into account to show how it relates to trends.</p>
              <strong class="uppercase tracking-widest text-white font-light text-xs">Metaphor</strong>
              <p class="py-4">Since the dataset has partly been collected from Spotify and addresses users who stream
                their music, the visuals are closely related to music player. The idea is to take the user in a
                well-known environment, but then uncover this environment: Instead of streaming music, the user can
                stream data, instead of opening an album, the user opens the list of ingredients that form the album. In
                other words, the project gives a peek behind the curtain of streaming services.</p>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex h-22 sticky top-0 bg-dark border-b-2 border-light pb-2">
              <h3 class="self-end font-semibold text-xl">How to Read</h3>
            </div>
            <div class="xl:w-2/3 lg:w-4/5 w-full mx-auto mt-4">
              <strong class="uppercase tracking-widest text-white font-light text-xs">Dataset</strong>
              <p class="py-4">The core of Chartbreakers is built upon the <a class="text-white hover:underline"
                                                                             href="https://www.rollingstone.com/music/music-lists/500-greatest-songs-of-all-time-151127/smokey-robinson-and-the-miracles-shop-around-71184/"
                                                                             target="_blank">“500 Greatest Songs of All
                Time”</a>, a list curated by the Rolling Stone magazine. It lists 500 songs in order and includes their
                writers, producers and release dates. Besides these information, details such as musical attributes,
                were retrieved by
                <a class="text-white hover:underline" href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank">Spotify</a>
                to complete the collection. The following list gives an overview of all collected columns.
              </p>
              <div class="w-full overflow-x-auto my-4">
                <table class="table-auto w-full mb-2 bg-purple-500">
                  <thead>
                  <tr>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">index</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">artist</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">title</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">writers</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">producer</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">year</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">album_name</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">album_img</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">spotify_id</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">popularity</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">danceability
                    </th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">energy</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">key</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">loudness</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">mode</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">speechiness
                    </th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">acousticness
                    </th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">
                      instrumentalness
                    </th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">liveness</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">valence</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">tempo</th>
                    <th class="border border-lightest px-4 py-2 text-left text-white font-semibold pb-2">duration_ms
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              <strong class="uppercase tracking-widest text-white font-light text-xs">Links</strong>
              <ul class="py-4 list-disc list-inside">
                <li><a class="text-white hover:underline"
                       href="https://www.rollingstone.com/music/music-lists/500-greatest-songs-of-all-time-151127/smokey-robinson-and-the-miracles-shop-around-71184/"
                       target="_blank">Rolling Stone Magazine Article</a></li>
                <li><a class="text-white hover:underline"
                       href="https://www.kaggle.com/bernardinosassoli/rolling-stones-top-500-songs-of-all-time"
                       target="_blank">Dataset by Bernardino Sassoli</a></li>
                <li><a class="text-white hover:underline"
                       href="https://open.spotify.com/playlist/33jXjzOGlYJcnHhARPj4LK" target="_blank">Spotify
                  Playlist</a></li>
              </ul>
              <strong class="uppercase tracking-widest text-white font-light text-xs">User Data</strong>
              <p class="py-4">In addition to the dataset, users who own a Spotify account can connect it to the app to
                see their own data being visualized. Once logged in, a user’s Top-20 songs are loaded and displayed.
                More details on what data comes from Spotify can be read
                <a class="text-white hover:underline" href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank">here</a>
                .
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex h-22 sticky top-0 bg-dark border-b-2 border-light pb-2">
              <h3 class="self-end font-semibold text-xl">Caveats</h3>
            </div>
            <div class="xl:w-2/3 lg:w-4/5 w-full mx-auto mt-4">
              <strong class="uppercase tracking-widest text-white font-light text-xs">Dataset</strong>
              <p class="py-4">One of the biggest issues of the dataset is that it’s a subjective selection of songs,
                created by a magazine with focus on pop culture and rock music. Unfortunately, it is not clear which
                criteria were used to create the listing. Thus, it has to be seen with a healthy amount of
                skepticism.</p>
              <p class="py-4">Besides the missing objectivity the used data lacks time consistency, meaning that it
                doesn’t contain data from regular intervals. Especially when analyzing music trends this could become an
                issue. The following graph shows the count of datapoints in each year.</p>
              <img alt="track distribution" class="w-full" src="./../assets/distribution.png"/>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex h-22 sticky top-0 bg-dark border-b-2 border-light pb-2">
              <h3 class="self-end font-semibold text-xl">Future Improvements</h3>
            </div>
            <div class="xl:w-2/3 lg:w-4/5 w-full mx-auto mt-4">
              <strong class="uppercase tracking-widest text-white font-light text-xs">To-Do</strong>
              <p class="py-4">As far as my time allows to do so, I am going to continue working on this project. Here
                are some improvements I have already in mind:</p>
              <ul class="list-disc list-inside">
                <li>Changing the dataset to a more objective view</li>
                <li>Adding more visualizations</li>
                <li>Allow logged in users to see statistics on their personal playlists</li>
                <li>Allow logged in users to see statistics on their personal profile</li>
                <li>Allow people to share and store playlists and their music analysis</li>
              </ul>
            </div>
          </div>


        </div>
        <footer class="flex flex-row flex-wrap mt-20 py-20">
          <div class="lg:w-1/5 w-1/2 mb-16 p-2">
            <img alt="Logo Density Design" class="w-22 mt-6 mx-auto" src="./../assets/logo_density.png"/>
          </div>
          <div class="lg:w-1/5 w-1/2 mb-16 p-2">
            <img alt="Logo Politecnico di Milano" class="w-32 mt-6 mx-auto" src="./../assets/logo_poli.png"/>
          </div>
          <div class="lg:w-1/5 w-1/3 p-2">
            <h5 class="mb-3 uppercase tracking-widest text-white font-light text-xs">Project by</h5>
            <ul>
              <li>Tim Olbrich<br/><a class="hover:text-white hover:underline font-thin"
                                     href="https://www.timolbrich.com" target="_blank">Portfolio</a></li>
            </ul>
          </div>
          <div class="lg:w-1/5 w-1/3 p-2">
            <h5 class="mb-3 uppercase tracking-widest text-white font-light text-xs">Faculty</h5>
            <ul>
              <li>Michele Mauri</li>
              <li>Gabriele Colombo</li>
              <li>Angeles Briones</li>
              <li>Simone Vantini</li>
              <li>Salvatore Zingale</li>
            </ul>
          </div>
          <div class="lg:w-1/5 w-1/3 p-2">
            <h5 class="mb-3 uppercase tracking-widest text-white font-light text-xs">Assistants</h5>
            <ul>
              <li>Antonella Autuori</li>
              <li>Andrea Benedetti</li>
              <li>Matteo Bettini</li>
              <li>Tommaso Elli</li>
              <li>Andrea Febres</li>
              <li>Beatrice Gobbo</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";

export default {
  name: "About",
  components: {Topbar},
}
</script>

<style scoped>

</style>