<script setup>
    import { onMounted } from 'vue'

    onMounted(async () => {
    const code = new URLSearchParams(window.location.search).get('code')
    const verifier = localStorage.getItem('code_verifier')

    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
        client_id: '你的ClientID',
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:5173/callback',
        code_verifier: verifier
        })
    })
    const data = await res.json()
    localStorage.setItem('access_token', data.access_token)
    window.location.href = '/'
    })
</script>
    
<template>
    <p class="info">登入中，請稍後...</p>
</template>

<style scoped>
    .info {
        text-align: center;
        margin-top: 100px;
        font-size: 1.2rem;
    }
</style>