<template>
    <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi deserunt voluptatum natus ab incidunt id expedita ullam exercitationem sint consequatur dicta voluptates, suscipit ea aperiam qui velit quo ratione?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>