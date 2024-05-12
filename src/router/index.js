import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import pageClasses from './guard.pageClasses'

const router = createRouter({
    history: createWebHashHistory('/kennzeichen/'),
    routes
});

router.beforeEach(pageClasses);

export default router;