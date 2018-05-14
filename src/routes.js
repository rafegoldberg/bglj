import Home   from './views/Home.vue'
import Page   from './views/Page.vue'
import Posts  from './views/Posts.vue'
import Events from './views/Events.vue'

export default [
  { path: '/',
    name: 'home',
    component: Home
    },
  { path: '/home',
    redirect: to => '/'
    },
  { path: '/events/',
    name: 'events',
    component: Events,
    children: []
    },
  { path: '/:slug',
    name: 'page',
    component: Page,
    }
]