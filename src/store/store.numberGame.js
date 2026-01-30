
// lets create the default state
const getInitialState = () => {
    let stateData = {
        currentNumber: window.localStorage.getItem('kennzeichen_numberGame_currentNumber') || null,
        startedAt: window.localStorage.getItem('kennzeichen_numberGame_startedAt') || null,
        lastChange: window.localStorage.getItem('kennzeichen_numberGame_lastChange') || null,
    };
    if(stateData.lastChange) stateData.lastChange = new Date(stateData.lastChange);
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
        currentNumber: state => state.currentNumber,
        startedAt: state => state.startedAt,
        lastChange: state => state.lastChange,
    },
    actions : {
        setNumber(context, number) {
            context.commit('setNumber', number);
        },
        increase(context) {
            let number = context.state.currentNumber;
            number++;
            context.commit('setNumber', number);
        },
        decrease(context) {
            let number = context.state.currentNumber;
            number--;
            context.commit('setNumber', number);
        },
        startGame(context) {
            context.commit('setNumber', 1);
            context.commit('resetStartDate');
        },
        getBackup(context) {
            return {
                currentNumber: context.state.currentNumber,
                startedAt: context.state.startedAt ? context.state.startedAt.toISOString() : null,
                lastChange: context.state.lastChange ? context.state.lastChange.toISOString() : null,
            };
        },
        restoreBackup(context, backupData) {
            context.commit('restoreBackup', backupData);
        },
    },
    mutations : {
        restoreBackup(state, backupData) {
            if(backupData.currentNumber !== undefined && backupData.currentNumber !== null) {
                state.currentNumber = backupData.currentNumber;
                window.localStorage.setItem('kennzeichen_numberGame_currentNumber', backupData.currentNumber);
            }
            if(backupData.startedAt) {
                let startedAt = new Date(backupData.startedAt);
                state.startedAt = startedAt;
                window.localStorage.setItem('kennzeichen_numberGame_startedAt', startedAt.toISOString());
            }
            if(backupData.lastChange) {
                let lastChange = new Date(backupData.lastChange);
                state.lastChange = lastChange;
                window.localStorage.setItem('kennzeichen_numberGame_lastChange', lastChange.toISOString());
            }
        },
        resetStartDate(state) {
            state.startedAt = new Date();
            window.localStorage.setItem('kennzeichen_numberGame_startedAt', state.startedAt.toISOString());
        },
        setNumber(state, number) {
            state.currentNumber = number;
            state.lastChange = new Date();
            window.localStorage.setItem('kennzeichen_numberGame_currentNumber', number);
            window.localStorage.setItem('kennzeichen_numberGame_lastChange', state.lastChange.toISOString());
        }
    },
};
