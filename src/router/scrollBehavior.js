/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/guide/advanced/scroll-behavior.html#Scroll-Behavior
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
    if(savedPosition) return savedPosition;

    if(to.hash) return { el: to.hash, behavior: 'smooth', }// do scroll to hash

    if(to.meta.scrollToTop===false) return {};//no scroll at all if in routes meta.scrollToTop === false

    return { top: 0 };// scroll to top (default)
}

export default scrollBehavior;