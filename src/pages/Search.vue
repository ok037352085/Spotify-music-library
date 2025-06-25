<template>
  <div class="container">
    <h2>🔍 搜尋歌曲</h2>
    <form @submit.prevent="searchTracks">
      <input v-model="query" placeholder="輸入歌曲或歌手名稱" />
      <button type="submit">搜尋</button>
    </form>

    <ul v-if="results.length">
      <li v-for="track in results" :key="track.id">
        🎵 {{ track.name }} - {{ track.artists[0].name }}
      </li>
    </ul>

    <p v-else-if="searched">找不到結果</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const results = ref([])
const searched = ref(false)

async function searchTracks() {
  searched.value = false
  const token = localStorage.getItem('access_token')
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query.value)}&type=track&limit=10`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  const data = await res.json()
  results.value = data.tracks?.items || []
  searched.value = true
}
</script>

<style scoped>
.container {
  padding: 20px;
}
input {
  padding: 6px;
  margin-right: 8px;
}
button {
  padding: 6px 12px;
}
</style>
