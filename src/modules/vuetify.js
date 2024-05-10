//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi-svg'

//import Vuetify from 'vuetify/lib'//use for treeshaking --> attention: css issues
import { de, en } from 'vuetify/locale';

export default createVuetify({
    components: {
    },
    locale: {
        messages: { en, de },
        locale: 'de',
        fallback: 'en'
    },
    icons: {
        aliases: {
            ...aliases,
            error: 'mdi-alert',
        }
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#FDAD3D',
                    secondary: '#f5f5f5',
                    orange: '#FDAD3D'
                }
            }
        }
    },
    defaults: {
        VAlert: { density: 'compact', variant: 'tonal' },
        VBtn: { variant: 'flat' },
        VToolbar: { class: 'px-3 grey-lighten-3', density: 'comfortable' }
    }
});
