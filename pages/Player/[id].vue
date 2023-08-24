<script setup>
const {players} = useRoster();
const route = useRoute();
const player = players.find((player) => player.id == route.params.id);
</script>

<template>
    <div>
        <h1>#{{ player.jerseyNumber }} {{ player.firstName }} {{ player.lastName }}</h1>
        <pre> {{ route.params }}</pre>
        <pre>{{ player }}</pre>
    </div>
</template>

<style scoped>
</style>