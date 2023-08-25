<script setup>
const { getSchedule } = useSupabase();

const { data: schedule, pending } = useAsyncData(
  `schedule`,
  () => getSchedule(),
  {
    lazy: true,
    transform: (result) => result.data,
  }
);
</script>

<template>
    <div>
        <h1>Schedule</h1>
        <ul>
            <li v-for="game in schedule" :key="game.time" class="border-2 bg-blue-900">
                <div>
                <p>{{ game.visitor.name }} @ {{ game.home.name }}</p>
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        <img :src="game.visitor.avatar_url" :alt="game.visitor.nickname" />
                    </div>
                </div>
                <span>{{ game.time }}</span>
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        <img :src="game.home.avatar_url" :alt="game.home.nickname" />
                    </div>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>

