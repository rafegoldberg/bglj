import Home from './views/Home.vue'
import Page from './views/Page.vue'

import Test from './views/Test.vue'
import event from '@/components/event.vue'

export default [
  { path: '/',
    name: 'home',
    components:{ default: Home }
    },
  { path: '/home',
    redirect: to => '/'
  },
  { path: '/post',
    name: 'posts',
    component: Test,
    alias: '/posts',
    },
  { path: '/events',
    name: 'events',
    component: Test,
    children:[{
      path: ':slug',
      name: 'events',
      component: event,
      }]
    },
  { path: '/volumes/:slug?',
    name: 'volumes',
    component: Test
    },
  { path: '/:path*/:slug',
    name: 'page',
    component: Page,
    },
]