import Vue from 'vue'
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import SearchButton from '@/components/SearchButton'
import SearchBar from '@/components/SearchBar'
import googleMap from '@/components/googleMaps'
import testMap from '@/components/testMap'

Vue.use(Router),
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCCGYJ0oQ6KBdIAiLn6gUUI8K00Vx__Hpc',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
    }
  })

export default new Router({
  routes: [{
    path: '/',
    name: 'SearchButton',
    component: SearchButton
  }, {
    path: '/SearchBar',
    name: 'SearchBar',
    component: SearchBar
  }, {
    path: '/testMap',
    name: 'testMap',
    component: testMap
  }]
})
