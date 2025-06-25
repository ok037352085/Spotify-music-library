<template>
  <div class="container">
    <h2>📁 我的播放清單</h2>
    <ul v-if="playlists.items.length">
      <li v-for="playlist in playlists.items" :key="playlist.id">
        {{ playlist.name }}（{{ playlist.tracks.total }} 首歌）
      </li>
    </ul>
    <p v-else>載入中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const playlists = ref({ items: [] })

onMounted(async () => {
  const token = localStorage.getItem('access_token')
  const res = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: { Authorization: `Bearer ${token}` },
  })
  playlists.value = await res.json()
})
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
