<template>
    <div class="card">
        <div class="card-header">
            Forgot Password
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
                <button v-bind:disabled="busy == true" type="submit" class="btn btn-primary">
                    <span v-if="busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Send Password Link
                </button>
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

            /** 
             * There is a "Continue" button on the Google Reset password form
             * Set the url here
             */
            let action_code = {
                url: window.location.origin
            }

            firebase.auth()
            .sendPasswordResetEmail(this.$data.form_data.email, action_code)
            .then( data => {
                alert('Password reset has been sent');
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

var auth = firebase.auth();
var emailAddress = "user@example.com";

