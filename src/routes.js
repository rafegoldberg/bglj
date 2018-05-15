import Home from './views/Home.vue'
import Page from './views/Page.vue'

export default [
  { path: '/',
    name: 'home',
    components:{ default: Home }
    },
  { path: '/home',
    redirect: to => '/'
    },
  { path: '/:path*/:slug',
    name: 'page',
    component: Page,
    },
]