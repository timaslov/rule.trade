type User = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    accessToken: string;
};

type UserState = {
    user: User | null;
    isLoading: boolean;
};

const state: UserState = {
    user: null,
    isLoading: true
};

const mutations = {
    SET_USER(state: UserState, user: User) {
        state.user = user;
    },
    CLEAR_USER(state: UserState) {
        state.user = null;
    },
    SET_LOADING_USER(state: UserState, status: boolean) {
        state.isLoading = status;
    },
};

const actions = {
    setUser({ commit }, user: User) {
        commit('SET_USER', user);
    },
    clearUser({ commit }) {
        commit('CLEAR_USER');
    },
    setIsUserLoading({ commit }, status: boolean) {
        commit('SET_LOADING_USER', status);
    },
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
