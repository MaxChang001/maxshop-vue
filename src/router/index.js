import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue'
import ProductList from '../components/ProductList.vue'


const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: LoginPage
    },
    {
        path: '/ProductList',
        name: 'ProductList',
        component: ProductList
    }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
})

const originalPush = router.push;
router.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
}

export default router;