import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignInPage from "../views/SignInPage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import AuthPage from "../views/AuthPage.vue";
import ChangePassword from "../views/ChangePassword.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/register', component: RegistrationPage},
    { path: '/login', component: SignInPage},
    { path: '/forgot_password', component: ForgotPassword},
    { path: '/auth', component: AuthPage},
    { path: '/change_password', component: ChangePassword}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
