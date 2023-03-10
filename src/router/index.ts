import {createRouter, createWebHistory} from 'vue-router'
// 路由管理
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            name: 'Home',
            meta: {
                HomeShow: true
            },
            component: () => import('@/views/Ribbon/Home.vue'),
            children: [
                {
                    path: 'HomeSwiper',
                    name: 'HomeSwiper',
                    meta: {
                        HomeShow: false,
                        page: 'HomeSwiper'
                    },
                    component: () => import('@/components/Detail.vue')
                },
                {
                    path: 'HomeRecommendedSongs',
                    name: 'HomeRecommendedSongs',
                    meta: {
                        HomeShow: false,
                        page: 'HomeRecommendedSongs'
                    },
                    component: () => import('@/components/Detail.vue')
                },
                {
                    path: 'HomePlaylist',
                    name: 'HomePlaylist',
                    meta: {
                        HomeShow: false,
                        page: 'HomePlaylist'
                    },
                    component: () => import('@/components/Detail.vue')
                },
                {
                    path: 'HomeRankings',
                    name: 'HomeRankings',
                    meta: {
                        HomeShow: false,
                        page: 'HomeRankings'
                    },
                    component: () => import('@/components/Rankings.vue')
                },
                {
                    path: 'HomeHotSinger',
                    name: 'HomeHotSinger',
                    meta: {
                        HomeShow: false,
                        page: 'HomeHotSinger'
                    },
                    component: () => import('@/components/Detail.vue')
                },
                {
                    path: 'HomeAlbum',
                    name: 'HomeAlbum',
                    meta: {
                        HomeShow: false,
                        page: 'HomeAlbum'
                    },
                    component: () => import('@/components/Detail.vue')
                }
            ]
        },
        {
            path: '/Playlist',
            name: 'Playlist',
            meta: {
                PlayList: true
            },
            component: () => import('@/views/Ribbon/Playlist.vue'),
            children: [
                {
                    path: 'PlayListDetail',
                    name: 'PlayListDetail',
                    meta: {
                        PlayList: false,
                        page: 'PlayListDetail'
                    },
                    component: () => import('@/components/Detail.vue')
                }
            ]
        },
        {
            path: '/singer',
            name: 'singer',
            meta: {
                SingerShow: true
            },
            component: () => import('@/views/Ribbon/singer.vue'),
            children: [
                {
                    path: 'SingerDetail',
                    name: 'SingerDetail',
                    meta: {
                        SingerShow: false,
                        page: 'SingerDetail'
                    },
                    component: () => import('@/components/Detail.vue')
                }
            ]
        },
        {
            path: '/MV',
            name: 'MV',
            meta: {
                MVShow: true
            },
            component: () => import('@/views/Ribbon/MV.vue'),
            children: [
                {
                    path: 'Film',
                    name: 'Film',
                    meta: {
                        MVShow: false,
                        page: 'Film'
                    },
                    component: () => import('@/components/Film.vue')
                }
            ]
        },
        {
            path: '/MusicThatILove',
            name: 'MusicThatILove',
            meta: {
                ThatLoveShow: true
            },
            component: () => import('@/views/Music/MusicThatILove.vue'),
            children: [
                {
                    path: 'LoveDetail',
                    name: 'LoveDetail',
                    meta: {
                        ThatLoveShow: false
                    },
                    component: () => import('@/components/Detail.vue'),
                    children: [
                        {
                            path: 'SongAlbum',
                            name: 'SongAlbum',
                            meta: {
                                ThatLoveShow: false,
                                page: 'SongAlbum'
                            },
                            component: () => import('@/components/Detail.vue')
                        }
                    ]
                },

            ]
        },
        {
            path: '/MyDownloads',
            name: 'MyDownloads',
            component: () => import('@/views/Music/MyDownloads.vue')
        },
        {
            path: '/RecentlyPlayed',
            name: 'RecentlyPlayed',
            component: () => import('@/views/Music/RecentlyPlayed.vue')
        },
        {
            path: '/Setting',
            name: 'Setting',
            component: () => import('@/views/Attach/Setting.vue')
        },
        {
            path: '/Agreement',
            name: 'Agreement',
            component: () => import('@/views/Attach/Agreement.vue')
        },
        {
            path: '/Player',
            name: 'Player',
            component: () => import('@/components/Player.vue')
        },
        {
            path: '/Search',
            name: 'Search',
            component: () => import('@/components/SearchList.vue')
        },
        {
            path: '/OtherFilm',
            name: 'OtherFilm',
            component: () => import('@/components/Film.vue')
        }
    ],
})

export default router
