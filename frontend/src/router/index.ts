import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignInPage from "../views/SignInPage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import EmailApproved from "../views/EmailApproved.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/register', component: RegistrationPage},
    { path: '/login', component: SignInPage},
    { path: '/email_approved', component: EmailApproved},
    { path: '/forgot_password', component: ForgotPassword}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
