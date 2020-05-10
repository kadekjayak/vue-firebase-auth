<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        'RouterView': require('./RouterView').default
    }
}
</script>