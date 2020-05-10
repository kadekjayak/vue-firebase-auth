import Vue from 'vue';
import App from './App.vue';
import * as firebase from 'firebase';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

const configOptions = {
    apiKey: "", // Change it with your Own
    authDomain: "<project-name>.firebaseapp.com", // Change it with your Own
};

Vue.mixin( require('./mixin').default );

firebase.initializeApp(configOptions);

try {
    firebase.auth().onAuthStateChanged(function(user) {   
        store.commit('Auth/SET_USER', user);
    });
} 
catch(error) {
    alert(error.message);
}

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');