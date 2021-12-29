import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'what-input';

import './styles/style.scss';
import './styles/safari.css';

createApp(App).use(store).use(router).mount('#app');
