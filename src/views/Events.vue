<template>
  <div v-if="!context.loading" class="events">
    <h2>events</h2>
    <hr>
    <ul v-for="event in context">
      <li>
        <b v-html="event.title.rendered">
          <!-- <router-link :to="`/events/${event.id}`" v-html="event.title.rendered"></router-link> -->
        </b>
        <p v-html="event.acf['event-description']"></p>
      </li>
    </ul>
    <!-- <router-view :context="context"></router-view> -->
  </div>
</template>

<script>
import wpAsyncVue from '../components/wp-async.vue';

export default {
  name:"Events",
  extends: wpAsyncVue,
  methods:{
    fetch(WP){
      return WP.events().get()
    }
  }
}
</script>
