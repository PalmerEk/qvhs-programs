<script setup>
const QVTeam = useRoster()
const positions = usePositions()

const positionsDescriptions = (playerPositions) => {
    return playerPositions.map((position) => {
        return positions[position].name
    })
}

</script>

<template>
  <div>
    <h1>Week 1</h1>
    <ul>
        <li v-for="player in QVTeam" :key="`${player.firstName} ${player.lastName}`">
            <div v-if="player.jerseyNumber">
                <Icon name="VolleyballIcon" size="256" />
                <h1 style="position: relative; bottom: 128px; left: 72px; color: red">
                    <div>#{{ player.jerseyNumber }}</div>
                </h1>
            </div>

            <h2>{{player.lastName}}, {{ player.firstName }}</h2>

            <ul v-if="player.positions?.length > 0">
                <li v-for="position in positionsDescriptions(player.positions)" :key="position.name">
                    {{ position }}
                </li>
            </ul>
            <div v-if="player.height">height: {{ player.height }}</div>
            <div v-if="player.gradYear">gradYear: {{ player.gradYear }}</div>
        </li>
    </ul>
  </div>
</template>

<style scoped>
</style>