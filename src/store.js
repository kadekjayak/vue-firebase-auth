import Vue from 'vue';
import Vuex from 'vuex';

const modules = {};
modules.Auth = require('./stores/Auth')

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	modules,
});