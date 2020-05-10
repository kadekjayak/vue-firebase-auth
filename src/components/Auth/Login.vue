<template>
    <div class="card">
        <div class="card-header">
            Login
        </div>
        <div class="card-body">
            <div v-if="error" class="alert alert-danger">
                {{ error }}
            </div>

            <form v-on:submit.prevent="submit">
                <div class="form-group">
                    <label class="control-label">Email</label>
                    <input v-model="form_data.email" type="text" name="email" class="form-control" requred>
                </div>
                <div class="form-group">
                    <label class="control-label">Password</label>
                    <input v-model="form_data.password" type="password" name="password" class="form-control" required>
                </div>
                <button v-bind:disabled="busy == true" type="submit" class="btn btn-primary">
                    <span v-if="busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Login
                </button>

                <router-link :to="{name: 'auth.forgot-password'}">Forgot Password</router-link>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    methods: {
        submit(){
            this.$data.busy = true;

            firebase.auth()
            .signInWithEmailAndPassword(this.$data.form_data.email, this.$data.form_data.password)
            .then( data => {
                console.log( data );
                this.$router.replace({ path: '/' });
            })
            .catch( error => {
                this.$data.error = error.message;
            })
            .finally(() => {
                this.$data.busy = false;
            });
        }
    }
}
</script>