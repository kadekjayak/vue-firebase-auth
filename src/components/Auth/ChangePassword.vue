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
                    <label class="control-label">New Password</label>
                    <input v-model="form_data.password" type="password" name="password" class="form-control" required>
                </div>
                <button v-bind:disabled="busy == true" type="submit" class="btn btn-primary">
                    <span v-if="busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Change Password
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

            this.user.updatePassword(this.$data.form_data.password).then(function() {
                alert('Password Has Been Changed');
            }).catch(function(error) {
                this.$data.error = error.message;
            }).finally(() =>{
                this.$data.busy = false;
            })
        }
    }
}
</script>