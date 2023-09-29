import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/Newcard.vue'

import shop_1 from '../components/shop1.vue';
import shop_2 from '../components/shop2.vue';
import shop_3 from '../components/shop3.vue';
import shop_4 from '../components/shop4.vue';



const shopRoutes = [
  { name: 'news_1', component: shop_1, shop: 'ร้านอาหารภาคเหนือ' },
  { name: 'news_2', component: shop_2, shop: 'ร้านอาหารภาคใต้' },
  { name: 'news_3', component: shop_3, shop: 'ร้านอาหารภาคกลาง'},
  { name: 'news_4', component: shop_4, shop: 'ร้านอาหารภาคอีสาน'},
  
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
