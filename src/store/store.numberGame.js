
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
        }
    },
    mutations : {
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
