<script setup>
const { todaysGame } = useData()

const isHome = computed(() => {
  return todaysGame.value.home.id == 1;
});

const opponent = computed(() => {
  return isHome.value ? todaysGame.value.visitor : todaysGame.value.home;
});
</script>

<template>
  <div v-if="todaysGame">
    <h1 class="text-5xl text-center text-accent mb-4">
      {{
        new Date(todaysGame.time).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      }}
      <div v-if="isHome">AT HOME</div>
      <div v-else>AWAY</div>
    </h1>

    <h2 class="text-2xl text-center mb-4">QV will take on</h2>

    <NuxtLink :to="`/Team/${opponent.id}`">
      <div class="card border-2 glass p-4 m-4">
        <figure v-if="opponent.avatar_url">
          <img
            :src="opponent.avatar_url"
            :alt="opponent.nickname"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-accent">{{ opponent.name }}</h2>
          <p class="text-sm italic">{{ opponent.nickname }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
