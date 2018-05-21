import AppNav from '@/components/App/Nav'
import AppFront from '@/components/App/Front'

import AppPage from './views/Page'
import AppFeed from './views/Feed'
import AppPosts from './views/Posts'
import AppEvents from './views/Events'

import Event from '@/components/Event'
import Post from '@/components/Post'

import VpList from '@/components/VP/list'

export default [
  {
    path: '/',
    name: 'home',
    component: AppFront,
  },
  {
    path: '/home',
    redirect: to=> '/'
  },
  {
    path: '/test',
    name: 'test',
    component: VpList
  },
  {
    path: '/nav',
    name: 'nav',
    component: AppNav,
    alias:[ '/menu' ]
  },
  {
    path: '/events/:slug*',
    name: 'events',
    component: AppEvents,
    // children: [{
    //   path: ':slug',
    //   name: 'event',
    //   component: Event,
    // }]
  },
  {
    path: '/posts',
    name: 'posts',
    component: AppPosts,
    children: [
      { path: ':slug',
        name: 'post',
        component: Post,
        props: true
      }
    ]
  },
  {
    path: '/volumes/:slug*',
    name: 'feed',
    component: AppFeed,
    props: true,
  },
  {
    path: '/:pid',
    name: 'page',
    component: AppPage,
    props: true
  },
  /* TODO - page route
   *      - 404 route
   *      - error route
   */
]