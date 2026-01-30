import { test } from "vitest";

// lets create the default state
const getInitialState = () => {
    let stateData = {
        alreadyFound: window.localStorage.getItem('kennzeichen_collectGame_alreadyFound') || [],
        startedAt: window.localStorage.getItem('kennzeichen_collectGame_startedAt') || null,
    };

    if(stateData.alreadyFound) {
        try {
            stateData.alreadyFound = JSON.parse(stateData.alreadyFound);
            stateData.alreadyFound.forEach(item => {
                item.foundAt = new Date(item.foundAt);
            });
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
        isCollected: state => kennzeichen => state.alreadyFound.some(item => item.kennzeichen === kennzeichen),
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
            console.log('action remove', value)
            commit('remove', value);
        },
        startGame(context) {
            context.commit('resetStartDate');
        },
        getBackup(context) {
            return {
                alreadyFound: context.state.alreadyFound.map(item => ({
                    kennzeichen: item.kennzeichen,
                    foundAt: item.foundAt.toISOString(),
                })),
                startedAt: context.state.startedAt ? context.state.startedAt.toISOString() : null,
            };
        },
        restoreBackup(context, backupData) {
            context.commit('restoreBackup', backupData);
        }
    },
    mutations : {
        restoreBackup(state, backupData) {
            if(backupData.alreadyFound !== undefined && Array.isArray(backupData.alreadyFound)) {
                let alreadyFound = backupData.alreadyFound.map(item => ({
                    kennzeichen: item.kennzeichen,
                    foundAt: new Date(item.foundAt),
                }));
                state.alreadyFound = alreadyFound;
                window.localStorage.setItem('kennzeichen_collectGame_alreadyFound', JSON.stringify(alreadyFound));

                state.startedAt = getOldestDate(state.alreadyFound);
                window.localStorage.setItem('kennzeichen_collectGame_startedAt', state.startedAt.toISOString());
            }
            if(backupData.startedAt) {
                let startedAt = new Date(backupData.startedAt);
                state.startedAt = startedAt;
                window.localStorage.setItem('kennzeichen_collectGame_startedAt', startedAt.toISOString());
            }
        },
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

            if(state.startedAt) return;

            state.startedAt = getOldestDate(state.alreadyFound);
            window.localStorage.setItem('kennzeichen_collectGame_startedAt', state.startedAt.toISOString());
        },
        remove(state, value) {
            console.log('mutatation remove', value)
            let index = state.alreadyFound.findIndex(item => item.kennzeichen === value);
            if(index > -1) {
                state.alreadyFound.splice(index, 1);
                window.localStorage.setItem('kennzeichen_collectGame_alreadyFound', JSON.stringify(state.alreadyFound));
            }
        }
    },
};

const getOldestDate = (entries) => {
    if(entries.length === 0) return null;
    let oldest = entries.reduce((oldest, item) => {
        return item.foundAt < oldest.foundAt ? item : oldest;
    }, entries[0]);

    return oldest.foundAt;
}
