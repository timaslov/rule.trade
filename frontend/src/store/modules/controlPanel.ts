import {getRequest} from "../../services/http.ts";

type ControlPanelState = {
    exchanges: any[];
    logics: any[];
    packages: any[];
    rules: any[];
    isLoading: boolean;
};

const state: ControlPanelState = {
    exchanges: [],
    logics: [],
    packages: [],
    rules: [],
    isLoading: true
};

const mutations = {
    SET_EXCHANGES(state: ControlPanelState, exchanges: any[]) {
        state.exchanges = exchanges;
    },
    SET_LOGICS(state: ControlPanelState, logics: any[]) {
        state.logics = logics;
    },
    SET_PACKAGES(state: ControlPanelState, packages: any[]) {
        state.packages = packages;
    },
    SET_RULES(state: ControlPanelState, rules: any[]) {
        state.rules = rules;
    },
    CLEAR_ALL_DATA(state: ControlPanelState) {
        state.exchanges = [];
        state.logics = [];
        state.packages = [];
        state.rules = [];
    },
    SET_LOADING_PANEL(state: ControlPanelState, status: boolean) {
        state.isLoading = status;
    }
};

const actions = {
    setExchanges({ commit }, exchanges: any[]) {
        commit('SET_EXCHANGES', exchanges);
    },
    setLogics({ commit }, logics: any[]) {
        commit('SET_LOGICS', logics);
    },
    setPackages({ commit }, packages: any[]) {
        commit('SET_PACKAGES', packages);
    },
    setRules({ commit }, rules: any[]) {
        commit('SET_RULES', rules);
    },
    clearAllData({ commit }) {
        commit('CLEAR_ALL_DATA');
    },
    async fetchData({ commit, dispatch }) {
        try {
            commit('SET_LOADING_PANEL', true);
            let response = await getRequest('/getparamsforpanel', {});

            dispatch('setExchanges', response.data.exchanges);
            dispatch('setLogics', response.data.logics);
            dispatch('setPackages', response.data.packages);
            dispatch('setRules', response.data.rules);
        }
        catch (error) {
            throw error;
        }
        finally {
            commit('SET_LOADING_PANEL', false);
        }
    }
};

const getters = {
    exchanges: (state: ControlPanelState) => state.exchanges,
    logics: (state: ControlPanelState) => state.logics,
    packages: (state: ControlPanelState) => state.packages,
    rules: (state: ControlPanelState) => state.rules
};

export default {
    state,
    mutations,
    actions,
    getters
};
