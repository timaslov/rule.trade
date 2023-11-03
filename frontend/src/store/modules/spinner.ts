type SpinnerState = {
    isVisible: boolean;
};

const state: SpinnerState = {
    isVisible: true
};

const mutations = {
    SHOW_SPINNER(state: SpinnerState) {
        state.isVisible = true;
    },
    HIDE_SPINNER(state: SpinnerState) {
        state.isVisible = false;
    }
};

const actions = {
    showSpinner({ commit }) {
        commit('SHOW_SPINNER');
    },
    hideSpinner({ commit }) {
        commit('HIDE_SPINNER');
    }
};

const getters = {
    isVisible: (state: SpinnerState) => state.isVisible
};

export default {
    state,
    mutations,
    actions,
    getters
};