import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";
import { store } from '../store';

import HomePage from "../views/HomePage.vue";
import SignInPage from "../views/SignInPage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import AuthPage from "../views/AuthPage.vue";
import ChangePassword from "../views/ChangePassword.vue";
import ControlPanel from "../views/ControlPanel.vue";
import AddExchange from "../views/AddExchange.vue";
import CreatePackage from "../views/CreatePackage.vue";
import CreateLogic from "../views/CreateLogic.vue";
import CreateRule from "../views/CreateRule.vue";

function fetchPanelBeforeEnter() {
    return async function(to, from, next) {
        try {
            console.log('router before')
            if (store.getters.user) {
                await store.dispatch('fetchData');
            }
            next();
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            next(false);
        }
    };
}

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/register', component: RegistrationPage},
    { path: '/login', component: SignInPage},
    { path: '/forgot_password', component: ForgotPassword},
    { path: '/auth', component: AuthPage},
    { path: '/change_password', component: ChangePassword},
    {
        path: '/control_panel',
        component: ControlPanel,
        beforeEnter: fetchPanelBeforeEnter()
    },
    { path: '/add_exchange', component: AddExchange},
    { path: '/create_package', component: CreatePackage},
    { path: '/create_logic', component: CreateLogic},
    { path: '/create_rule', component: CreateRule},
    {
        path: '/create_rule/:id',
        component: CreateRule,
        beforeEnter: fetchPanelBeforeEnter()
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
