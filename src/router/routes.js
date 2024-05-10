const Home = () => import('./../views/Kennzeichen.vue').then(d => d.default);//dynamic import
const Page404 = () => import('./../views/Page404.vue').then(d => d.default);//dynamic import
let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { bodyClass: 'home' },
    }, {
        path: '/:pathMatch(.*)',
        component: Page404,
        meta: { bodyClass: 'page404 }' },
    }
];

export default routes;
