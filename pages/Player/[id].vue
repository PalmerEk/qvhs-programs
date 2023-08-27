<script setup>
const route = useRoute();

const { getPlayer } = useSupabase();
const positions = usePositions();

const { data: player, pending } = useAsyncData(
  `player:${route.params.id}`,
  () => getPlayer(route.params.id),
  {
    lazy: true,
    transform: (result) => result.data
  }
);

const positionsDescriptions = computed(() => {
  return player.value.positions
    .map((position) => {
      if(positions[position]) return positions[position].name;
      const akaPos = Object.values(positions).find((pos) => pos.aka?.split(',').includes(position));
      if(akaPos) return akaPos.name;
    })
    .join(" / ");
});

const gradClass = (gradyear) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const graduateInYears = gradyear - currentYear;
  if (currentMonth < 6) graduateInYears + 1; // second half of school year

  return graduateInYears <= 1
    ? "Sr."
    : graduateInYears <= 2
    ? "Jr."
    : graduateInYears <= 3
    ? "So."
    : "Fr.";
};
</script>

<template>
  <div>
    <span v-if="pending" class="loading loading-spinner text-primary"></span>
    <div v-else>
      <img :src="player.team.avatar_url" :alt="player.team.nickname" />
      <h2>
        #{{ player.jersey }} {{ player.firstName }} {{ player.lastName }} ({{
          gradClass(player.gradYear)
        }})
      </h2>
      <h3>{{ positionsDescriptions }}</h3>

      <h3>Stats: Coming soon!</h3>

    </div>

  </div>
</template>

<style scoped></style>
