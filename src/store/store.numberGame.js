
// lets create the default state
const getInitialState = () => {
    let stateData = {
        currentNumber: window.localStorage.getItem('kennzeichen_numberGame_currentNumber') || null,
        startedAt: window.localStorage.getItem('kennzeichen_numberGame_startedAt') || null,
        lastChange: window.localStorage.getItem('kennzeichen_numberGame_lastChange') || null,
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
        currentNumber: state => state.currentNumber,
        startedAt: state => state.startedAt,
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
        startGame(context,state) {
            context.commit('setNumber', 0);
            state.startedAt = new Date();
            window.localStorage.setItem('kennzeichen_numberGame_startedAt', state.startedAt.toISOString());
        }
    },
    mutations : {
        setNumber(state, number) {
            state.currentNumber = number;
            state.lastChange = new Date();
            window.localStorage.setItem('kennzeichen_numberGame_currentNumber', number);
            window.localStorage.setItem('kennzeichen_numberGame_lastChange', state.lastChange.toISOString());
        }
    },
};
