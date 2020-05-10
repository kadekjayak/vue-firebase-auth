<template>
    <div class="container">
        <RouterView></RouterView>
    </div>
</template>
<script>
export default {
    components: {
        'RouterView': require('./RouterView').default
    }
}
</script>