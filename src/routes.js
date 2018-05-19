import Home from './views/Home.vue'
import WpPage from './views/Page.vue'
import WpFeed from './views/Feed.vue'
import WpPosts from './views/Posts.vue'
import WpEvents from './views/Events.vue'

import Nav from '@/components/Nav.vue'
import Event from '@/components/Event.vue'
import Post from '@/components/Post.vue'

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    alias:[ "/home" ]
  },
  {
    path: "/nav",
    name: "nav",
    component: Nav,
    alias:[ "/menu" ]
  },
  {
    path: "/events",
    name: "events",
    component: WpEvents,
    children: [{
      path: ":slug",
      name: "event",
      component: Event,
    }]
  },
  {
    path: "/posts",
    name: "posts",
    component: WpPosts,
    children: [{
      path: ":slug",
      name: "post",
      component: Post,
      props: true
    }]
  },
  {
    path: "/p/:pid",
    name: "page",
    component: WpPage,
    props: true
  },
  {
    path: "/:endpoint/:slug*",
    name: "feed",
    component: WpFeed,
    props: true
  },
  /* TODO - page route
   *      - 404 route
   *      - error route
   */
]