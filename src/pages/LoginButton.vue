<script setup>
import { redirectToSpotifyLogin } from '../auth/spotify.js'
function login() {
  redirectToSpotifyLogin()
}
</script>

<template>
  <div class="container">
    <h1>Spotify 音樂庫</h1>
    <button @click="login">登入 Spotify</button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
}
button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>