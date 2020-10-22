import Vue from 'vue'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import de from 'vuetify/src/locale/de.ts';
import style from 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)
export default new Vuetify({
    lang: {
        locales: { de },
        current: 'de'
    }
});
