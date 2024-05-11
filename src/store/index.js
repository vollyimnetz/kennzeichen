import { createStore } from 'vuex'

import { storeModule as collectGame } from './store.collectGame'
import { storeModule as numberGame } from './store.numberGame'


const storeObj = {
    strict: true,
    modules: { collectGame, numberGame }
};


export default createStore(storeObj);
