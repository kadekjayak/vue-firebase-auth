<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <router-link :to="{path: '/'}" class="navbar-brand" href="#">Vue + Firebase Auth</router-link>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
    $body-bg: #FAFAFA;
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    
    /**
     * Vue Transition
     * I Love It <3
     */
    .slide-enter-active {
        animation: coming 0.3s;
        animation-delay: .3s;
        opacity: 0;
    }
    .slide-leave-active {
        animation: going 0.3s;
    }
    @keyframes going {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50px);
            opacity: 0;
        }
    }
    @keyframes coming {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>
