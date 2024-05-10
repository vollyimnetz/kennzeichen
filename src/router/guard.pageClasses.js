/**
 * This guard provides functionality to modify the header and body-class based on the data in the routes-meta.
 */

const defaultHeader = {
    bodyClasses: ['webapp'],
    htmlClasses: ['webapp'],
}

function unheadRouterGuard(to) {
    let head = Object.assign({}, defaultHeader);
    //console.log('unheadRouterGuard', to?.meta)

    removeAllClassesFromElement(document.body);//remove all from body-tag
    removeAllClassesFromElement(document.documentElement);//remove all from html-tag

    if(to?.meta?.bodyClass) head.bodyClasses = head.bodyClasses.concat( to.meta.bodyClass.split(' ') );
    if(to?.meta?.htmlClass) head.htmlClasses = head.htmlClasses.concat( to.meta.htmlClass.split(' ') );

    //console.log('unheadRouterGuard', head);

    addClassesToElement(document.body, head.bodyClasses);
    addClassesToElement(document.documentElement, head.htmlClasses);

    return true;
}

function removeAllClassesFromElement(element) {
    element.classList.remove.apply(element.classList, Array.from(element.classList));//remove all from body-tag
}

function addClassesToElement(element, classes) {
    if(!Array.isArray(classes)) return;
    classes.forEach(item => element.classList.add(item));
}

export default unheadRouterGuard;