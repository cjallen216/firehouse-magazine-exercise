import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import Magazines from '../views/Magazines.vue'
import MagDetails from '../components/MagDetails.vue'
import FeaturedMagazine from '../components/FeaturedMagazine.vue'
import MagazineGrid from '../components/MagazineGrid.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/magazines',
        name: 'magazines',
        component: Magazines
    },
    {
        path: '/magazine/:img',
        name: 'magazine-details',
        component: MagDetails
    },
    {
        path: '/featured',
        name: 'featured',
        component: FeaturedMagazine
    },
    {
        path: '/grid',
        name: 'mag-grid',
        component: MagazineGrid
    }

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;