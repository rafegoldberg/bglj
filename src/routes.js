import Home from './views/Home.vue'
import WpPosts from './views/Posts.vue'
import WpEvents from './views/Events.vue'

import event from '@/components/event.vue'
import post from '@/components/post.vue'

export default [
  { path: "/",
    name: "home",
    component: Home,
    alias:[ "/home", "/page/home" ]
    },
  { path: "/events",
    name: "events",
    component: WpEvents,
    children:[{
      path: ":slug",
      name: "event",
      component: event,
      }]
    },
  { path: "/posts",
    name: "posts",
    component: WpPosts,
    children:[{
      path: ":id",
      name: "post",
      component: post,
      props: true
      }]
    }
]