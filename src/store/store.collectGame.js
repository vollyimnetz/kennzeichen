
// lets create the default state
const getInitialState = () => {
    let stateData = {
        alreadyFound: window.localStorage.getItem('kennzeichen_collectGame_alreadyFound') || [],
        startedAt: window.localStorage.getItem('kennzeichen_collectGame_startedAt') || null,
    };

    if(stateData.alreadyFound) {
        try {
            stateData.alreadyFound = JSON.parse(stateData.alreadyFound);
        } catch(e) {
            stateData.alreadyFound = [];
        }
    } else {
        stateData.alreadyFound = [];
    }
    if(stateData.startedAt) stateData.startedAt = new Date(stateData.startedAt);
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
        resetState({ commit }) {
            commit('setAlreadyFound', []);
            commit('setStartedAt', null);
        },
        add({ commit }, value) {
            commit('add', value);
        },
        remove({ commit }, value) {
            commit('remove', value);
        },
        startGame(context) {
            context.commit('resetStartDate');
        }
    },
    mutations : {
        resetAlreadyFound(state) {
            state.alreadyFound = [];
            window.localStorage.setItem('kennzeichen_collectGame_alreadyFound', JSON.stringify([]));
        },
        resetStartDate(state) {
            state.startedAt = new Date();
            window.localStorage.setItem('kennzeichen_collectGame_startedAt', state.startedAt.toISOString());
        },
        add(state, value) {
            state.alreadyFound.push({kennzeichen: value, foundAt: new Date()});
            window.localStorage.setItem('kennzeichen_collectGame_alreadyFound', JSON.stringify(state.alreadyFound));
        },
        remove(state, value) {
            let index = state.alreadyFound.findIndex(item => item.kennzeichen === value);
            if(index > -1) {
                state.alreadyFound.splice(index, 1);
                window.localStorage.setItem('kennzeichen_collectGame_alreadyFound', JSON.stringify(state.alreadyFound));
            }
        }
    },
};
