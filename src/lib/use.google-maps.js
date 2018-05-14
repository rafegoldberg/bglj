import Vue from 'vue'
import * as VueGMaps from 'vue2-google-maps'

Vue.use(VueGMaps, {
  load: {
    key: '', // r-A-fe-IzaSyDR_3qOBtnKMiqFRGfcg_6uzGfmMS-dW-afe-M
    /*
      libraries: 'places', // or 'places,drawing,visualization'
      v: '3.26', // use a specific version
     */
  },
  // installComponents: true,
  // autobindAllEvents: true,
})