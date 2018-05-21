import AppNav from '@/components/App/Nav'
import AppFront from '@/components/App/Front'

import AppPage from './views/Page'
import AppFeed from './views/Feed'
import AppPosts from './views/Posts'
import AppEvents from './views/Events'

import Event from '@/components/Event'
import Post from '@/components/Post'

import PostsList from '@/components/VP/temp.PostList'
import PostsItem from '@/components/VP/temp.PostItem'

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
    alias:[ '/menu' ]
  },
  {
    path: '/events/:slug*',
    name: 'events',
    component: AppEvents,
  },
  // {
  //   path: '/posts',
  //   name: 'posts',
  //   component: AppPosts,
  //   children: [
  //     { path: ':slug',
  //       name: 'post',
  //       component: Post,
  //       props: true
  //     }
  //   ]
  // },
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