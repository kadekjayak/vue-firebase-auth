export default {
    data: () => ({
        busy: false,
        error: null,

        form_data: {
            email: null,
            passsword: null
        }
    }),

    computed: {
        user() {
            return this.$store.state.Auth.user;
        }
    },
}