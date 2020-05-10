<template>
    <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
            <template v-if="!user">
                <div class="alert alert-danger">
                    <p>Not Logged In</p>
                </div>
                <router-link :to="{name: 'auth.login'}" class="btn btn-primary mr-3">Click Here to Login</router-link>
                <router-link :to="{name: 'auth.register'}" class="btn btn-success">Click Here to Register</router-link>
            </template>

            <template v-else>
                <div class="alert alert-success">
                    <p>Logged In!</p>
                </div>
                <button class="btn btn-warning mr-2" v-on:click.prevent="logout">Logout</button>
                <router-link :to="{name: 'auth.change-password'}" class="btn btn-primary" v-on:click.prevent="logout">Change Password</router-link>
                <hr class="my-5">
                <h4>The user Object from Firebase</h4>
                <pre>{{ JSON.stringify(user,null,'\t') }}</pre>
            </template>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$store.commit('Auth/SET_USER', null);
            });
        }
    }
}
</script>