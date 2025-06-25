<script setup>
import { ref, onMounted } from 'vue'
const tracks = ref({ items: [] })

onMounted(async () => {
  const token = localStorage.getItem('access_token')
  const res = await fetch('https://api.spotify.com/v1/me/tracks', {
    headers: { Authorization: `Bearer ${token}` }
  })
  tracks.value = await res.json()
})
</script>

<template>
  <h2>我的喜歡歌曲</h2>
  <ul>
    <li v-for="item in tracks.items" :key="item.track.id">
      🎵 {{ item.track.name }} - {{ item.track.artists[0].name }}
    </li>
  </ul>
</template>