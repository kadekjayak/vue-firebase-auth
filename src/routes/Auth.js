export default {
    path: 'auth',
    component: require('../views/Auth').default,
    children: [
        {
            path: 'login',
            name: 'auth.login',
            component: () => import('../components/Auth/Login'),
        },
        {
            path: 'register',
            name: 'auth.register',
            component: () => import( '../components/Auth/Register'),
        },
        {
            path: 'forgot-password',
            name: 'auth.forgot-password',
            component: () => import( '../components/Auth/ForgotPassword'),
        },
        {
            path: 'change-password',
            name: 'auth.change-password',
            component: () => import( '../components/Auth/ChangePassword'),
        },
    ]
}