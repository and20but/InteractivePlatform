

export const constantRoutes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'agenda',
                name: 'agenda',
                component: () => import('@/views/Agenda/index.vue'),
                meta: {
                    title: '大会议程'
                }
            },
            // {
            //     path: 'experts',
            //     name: 'experts',
            //     component: () => import('@/views/Experts/index.vue'),
            //     meta: {
            //         title: '大咖云集'
            //     }
            // },
            {
                path: 'activity',
                name: 'activity',
                component: () => import('@/views/Activity/index.vue'),
                meta: {
                    title: '精彩活动'
                }
            },
            {
                path: 'exhibitor',
                name: 'exhibitor',
                component: () => import('@/views/Exhibitor/index.vue'),
                meta: {
                    title: '展商风采'
                }
            },
            {
                path: 'achievement',
                name: 'achievement',
                component: () => import('@/views/Achievement/index.vue'),
                meta: {
                    title: '成果展示'
                }
            },
            {
                path: 'cls',
                name: 'cls',
                component: () => import('@/views/CLS/index.vue'),
                meta: {
                    title: '数潜影'
                }
            }
            // {
            //     path: 'media',
            //     name: 'media',
            //     component: () => import('@/views/Media/index.vue'),
            //     meta: {
            //         title: '媒体中心'
            //     }
            // },
            // {
            //     path: 'guide',
            //     name: 'guide',
            //     component: () => import('@/views/Guide/index.vue'),
            //     meta: {
            //         title: '参会指南'
            //     }
            // },
            // {
            //     path: 'live',
            //     name: 'live',
            //     component: () => import('@/views/Live/index.vue'),
            //     meta: {
            //         title: '大会直播'
            //     }
            // }
        ]
    },
    {
        path: '/lay',
        name: 'lay',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: 'clock-in',
                name: 'clock-in',
                component: () => import('@/views/ClockIn/index.vue')
            },
            {
                path: 'clock-in-hand',
                name: 'clock-in-hand',
                component: () => import('@/views/ClockIn/HandTrack.vue')
            },
            {
                path: 'ar-e',
                name: 'ar-e',
                component: () => import('@/views/ArExhibitor/index.vue')
            },
            {
                path: 'agenda-live',
                name: 'agenda-live',
                component: () => import('@/views/AgendaLive/index.vue')
            },
            {
                path: 'user-info',
                name: 'user-info',
                component: () => import('@/views/User/index.vue')
            },
            {
                path: 'cls-live',
                name: 'cls-live',
                component: () => import('@/views/ClsLive/index.vue')
            }
        ]
    }
]