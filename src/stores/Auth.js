export const namespaced = true;

const getDefaultState = () => ({
    user: null,
});

export const state = getDefaultState();

export const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
}

export const getters = {
    GET_USER ( state ) {
        return state.user;
    }
}