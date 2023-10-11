import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import { store } from './store';
import {auth} from '../firebaseConfig.ts'
import vuetify from './plugins/vuetify';

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')

auth.onAuthStateChanged((user) => {
    if (user) {
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        store.dispatch('setUser', userData);
    } else {
        store.dispatch('clearUser');
    }
});
