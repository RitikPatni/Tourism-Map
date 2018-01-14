import Vue from 'vue'
import Router from 'vue-router'
import SearchButton from '@/components/SearchButton'
import SearchBar from '@/components/SearchBar'
import googleMap from '@/components/googleMaps'
import testMap from '@/components/testMap'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'SearchButton',
    component: SearchButton
  }, {
    path: '/SearchBar',
    name: 'SearchBar',
    component: SearchBar
  },{
    path:'/testMap',
    name:'testMap',
    component:testMap
  }]
})
