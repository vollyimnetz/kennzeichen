
// lets create the default state
const getInitialState = () => {
    let stateData = {
        alreadyFound: window.localStorage.getItem('kennzeichen_sammeln_alreadyFound') || [],
        startedAt: window.localStorage.getItem('kennzeichen_sammeln_startedAt') || null,
    };
    return stateData;
}

/**
 * @see https://vuex.vuejs.org/
 */
export const storeModule = {
    namespaced: true,
    state: getInitialState(),
    getters : {
        alreadyFound: state => state.alreadyFound,
        startedAt: state => state.startedAt,
    },
    actions : {
    },
    mutations : {
    },
};
