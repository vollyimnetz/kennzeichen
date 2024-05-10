import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import pageClasses from './guard.pageClasses'

const router = createRouter({
    history: createWebHistory('/app/'),
    routes
});

router.beforeEach(pageClasses);

export default router;