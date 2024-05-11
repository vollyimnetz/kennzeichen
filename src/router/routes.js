const Home = () => import('../views/Home.vue').then(d => d.default);//dynamic import
const NumberGame = () => import('./../views/NumberGame.vue').then(d => d.default);//dynamic import
const CollectGame = () => import('./../views/CollectGame.vue').then(d => d.default);//dynamic import
const Page404 = () => import('./../views/Page404.vue').then(d => d.default);//dynamic import
let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { bodyClass: 'home' },
    }, {
        path: '/number-game',
        name: 'number-game',
        component: NumberGame,
        meta: { bodyClass: 'number-game' },
    }, {
        path: '/collect-game',
        name: 'collect-game',
        component: CollectGame,
        meta: { bodyClass: 'collect-game' },
    }, {
        path: '/:pathMatch(.*)',
        component: Page404,
        meta: { bodyClass: 'page404 }' },
    }
];

export default routes;
