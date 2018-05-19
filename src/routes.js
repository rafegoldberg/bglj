import AppNav from '@/components/App/Nav.vue'
import AppFront from '@/components/App/Front.vue'

import AppPage from './views/Page.vue'
import AppFeed from './views/Feed.vue'
import AppPosts from './views/Posts.vue'
import AppEvents from './views/Events.vue'

import Event from '@/components/Event.vue'
import Post from '@/components/Post.vue'

export default [
  {
    path: '/',
    name: "home",
    component: AppFront,
  },
  {
    path: "/home",
    redirect: to=> "/"
  },
  {
    path: "/nav",
    name: "nav",
    component: AppNav,
    alias:[ "/menu" ]
  },
  {
    path: "/events",
    name: "events",
    component: AppEvents,
    children: [{
      path: ":slug",
      name: "event",
      component: Event,
    }]
  },
  {
    path: "/posts",
    name: "posts",
    component: AppPosts,
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
    component: AppPage,
    props: true
  },
  {
    path: "/:endpoint/:slug*",
    name: "feed",
    component: AppFeed,
    props: true
  },
  /* TODO - page route
   *      - 404 route
   *      - error route
   */
]