<template>
    {{title}} --- {{content}}
</template>

<script setup>
import { defineProps } from 'vue';
    const props = defineProps({
        title: String,
        content: String
    })
</script>

<style scoped>

</style>