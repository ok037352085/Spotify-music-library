function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map(x => chars[x % chars.length])
    .join('')
}

function sha256(plain) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(plain))
}

function base64urlencode(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export async function redirectToSpotifyLogin() {
  const codeVerifier = generateRandomString(128)
  const codeChallenge = await sha256(codeVerifier).then(base64urlencode)

  localStorage.setItem('code_verifier', codeVerifier)

  const clientId = 'f53ab351c2f84d3fb31dd98a408ce5e2'
  const redirectUri = 'https://ok037352085.github.io/Spotify-music-library/callback'
  const scope = [
    'user-library-read',
    'playlist-read-private',
    'user-read-private'
  ].join(' ')

  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&code_challenge_method=S256&code_challenge=${codeChallenge}`
    window.location = url
}