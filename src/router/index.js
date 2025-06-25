import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/LoginButton.vue'
import Callback from '../pages/Callback.vue'
import MyTracks from '../pages/MyTracks.vue'
import Playlists from '../pages/Playlists.vue'
import Search from '../pages/Search.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyTracks },
        { path: '/login', component: Login },
        { path: '/callback', component: Callback },
        { path: '/playlists', component: Playlists },
        { path: '/search', component: Search }
    ]
})