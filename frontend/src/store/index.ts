import { createStore } from 'vuex';
import user from './modules/user';
import controlPanel from "./modules/controlPanel.ts";

export const store = createStore({
    modules: {
        user,
        controlPanel
    }
});