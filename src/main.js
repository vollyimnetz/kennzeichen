import { createApp } from 'vue'
import App from './App.vue';
import { registerModules } from './modules';

import './styles/index.scss';

const app = createApp(App);
registerModules(app);
app.mount('#app');
console.log('init complete')

export default app;