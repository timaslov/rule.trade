type User = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    accessToken: string;
};

type UserState = {
    user: User | null;
};

const state: UserState = {
    user: null
};

const mutations = {
    SET_USER(state: UserState, user: User) {
        state.user = user;
    },
    CLEAR_USER(state: UserState) {
        state.user = null;
    }
};

const actions = {
    setUser({ commit }, user: User) {
        commit('SET_USER', user);
    },
    clearUser({ commit }) {
        commit('CLEAR_USER');
    }
};

const getters = {
    user: (state: UserState) => state.user
};

export default {
    state,
    mutations,
    actions,
    getters
};
