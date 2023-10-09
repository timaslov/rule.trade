import { createStore } from 'vuex';

type User = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
};

type State = {
    user: User | null;
};

export const store = createStore<State>({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user: User) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = null;
        }
    },
    actions: {
        setUser({ commit }, user: User) {
            commit('SET_USER', user);
        },
        clearUser({ commit }) {
            commit('CLEAR_USER');
        }
    },
    getters: {
        user: (state) => state.user
    }
});