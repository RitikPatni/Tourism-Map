import Vue from 'vue'
import Router from 'vue-router'
import SearchButton from '@/components/SearchButton'
import SearchBar from '@/components/SearchBar'


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
  }]
})
