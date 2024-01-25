import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App';
import store from './store';

import '@arco-design/web-vue/dist/arco.css';
import './assets/style/index.scss';

createApp(App).use(store).use(ArcoVue).mount('#app');
