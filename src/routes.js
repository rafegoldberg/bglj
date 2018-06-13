import AppNav from '@/components/App/Nav'
import AppFront from '@/components/App/Front'

import AppPage from './views/Page'
import AppEvents from './views/Events'

import Volume from './views/Volume'
import PostsList from '@/components/Posts'
import PostsItem from '@/components/Posts/Item'

import SocialBar from '@/components/SocialBar'

export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: AppFront,
      nav: SocialBar,
    },
  },
  {
    path: '/home',
    redirect: to=> '/'
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsList
  },
  {
    path: '/posts/:post',
    name: 'postsItem',
    component: PostsItem
  },
  {
    path: '/nav',
    name: 'nav',
    component: AppNav,
  },
  {
    path: '/events/:slug*',
    name: 'events',
    component: AppEvents,
  },

  {
    path: '/volumes',
    name: 'volumes',
    component: PostsList,
    props:{ default:true, type:'volumes', per:8 },
  },
  {
    path: '/volumes/:slug*',
    name: 'feed',
    component: Volume,
    props: true,
  },

  {
    path: '/:pid',
    name: 'page',
    component: AppPage,
    props: true
  },

  /* TODO: - page route
   *       - 404 route
   *       - error route
   */
]