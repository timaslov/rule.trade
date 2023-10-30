import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import { store } from './store';
import { auth } from '../firebaseConfig.ts'
import '@mdi/font/css/materialdesignicons.min.css';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            accessToken: user.stsTokenManager.accessToken
        };
        store.dispatch('setUser', userData);

        //console.log(user)
        console.log(userData)
        store.dispatch('fetchData');
    } else {
        store.dispatch('clearUser');
    }
});
