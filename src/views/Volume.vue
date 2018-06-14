<template>
  <div v-if="context.loading">Loading...</div>
  <div v-else-if="Array.isArray(context)" class="page">
    <router-link v-for="subpage in context" :to="`/volumes/${subpage.slug}`" :key="subpage.id" tag=h3>
      <a>{{subpage.title.rendered}}</a>
    </router-link>
  </div>
  <div v-else>
    <header>
      <h2 style="margin-bottom:0;font-weight:bold">{{context.title.rendered}}</h2>
      <small>
        Published <time>{{context.acf.pubdate}}</time>.
        <a :href="context.acf.link"><u>View archive.</u></a>
      </small>
    </header>
    <hr style="opacity:0!important">
    <p v-html="context.acf.note"></p>
    <hr style="opacity:0!important">
    <Masthead :info="context.acf.masthead"></Masthead>
  </div>
</template>

<script>
import WpAsync from '../components/WpAsync'
import Masthead from '../components/Masthead'

export default {
  name:"Feed",
  extends: WpAsync,
  components:{ Masthead },
  methods:{
    fetch(WP){
      let
      end  = this.$route.params.endpoint || 'volumes',
      slug = this.slug || this.$route.params.slug
      return WP[end]().slug(slug).get()
    },
  },
  metas(){
    return {
      title: !this.context.loading ? this.context.title.rendered : ''
    }
  },
}
</script>