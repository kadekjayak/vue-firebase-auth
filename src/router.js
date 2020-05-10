import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('./views/Root').default,
            children: [
                
                require('./routes/Auth').default,

                {
                    path: '',
                    name: 'home',
                    component: require('./components/Dashboard').default
                }
            ]
        },
    ]
});

export default router;