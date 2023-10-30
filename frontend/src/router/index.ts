import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";
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

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/register', component: RegistrationPage},
    { path: '/login', component: SignInPage},
    { path: '/forgot_password', component: ForgotPassword},
    { path: '/auth', component: AuthPage},
    { path: '/change_password', component: ChangePassword},
    { path: '/control_panel', component: ControlPanel},
    { path: '/add_exchange', component: AddExchange},
    { path: '/create_package', component: CreatePackage},
    { path: '/create_logic', component: CreateLogic},
    { path: '/create_rule', component: CreateRule}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
