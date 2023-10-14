import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignInPage from "../views/SignInPage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import AuthPage from "../views/AuthPage.vue";
import ChangePassword from "../views/ChangePassword.vue";
import ControlPanel from "../views/ControlPanel.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/register', component: RegistrationPage},
    { path: '/login', component: SignInPage},
    { path: '/forgot_password', component: ForgotPassword},
    { path: '/auth', component: AuthPage},
    { path: '/change_password', component: ChangePassword},
    { path: '/control_panel', component: ControlPanel}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
