<script setup>
const route = useRoute();

const { getPlayer } = useData();
const positions = usePositions();

const player = getPlayer(route.params.id);

const positionsDescriptions = computed(() => {
  return player.value.positions
    .map((position) => {
      if (positions[position]) return positions[position].name;
      const akaPos = Object.values(positions).find((pos) =>
        pos.aka?.split(",").includes(position)
      );
      if (akaPos) return akaPos.name;
    })
    .join(" / ");
});

const gradClass = (gradyear) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const graduateInYears = gradyear - currentYear;
  if (currentMonth < 6) graduateInYears + 1; // second half of school year

  return graduateInYears <= 1
    ? "Senior"
    : graduateInYears <= 2
    ? "Junior"
    : graduateInYears <= 3
    ? "Sophomore"
    : "Freshman";
};
</script>

<template>
  <div>
    <span v-if="pending" class="loading loading-spinner text-primary"></span>
    <div v-else class="mx-auto absolute">
      <img class="w-full h-[calc(100vh-76px)] object-cover opacity-40" src="/PlayerCardBack.jpeg" />
      <img class="absolute top-10 left-7 w-[322px] h-[434px]" :src="`/TeamPhotos/${player.id}.jpg`" />
      <div class="text-4xl font-bold text-accent text-center w-full absolute -bottom-0">
        <div class="">
          {{ player.firstName }} {{ player.lastName }}
        </div>
        <div class="text-3xl font-bold font-sans text-accent text-center w-full">
          {{gradClass(player.gradYear)}} #{{ player.jersey }}
        </div>
        <div class="text-3xl font-bold font-sans text-accent text-center w-full">
          {{ player.positions.join(" / ") }}
        </div>
        
      </div>
      


      <div class="absolute top-0 right-0">
        <img :src="player.team.avatar_url" :alt="player.team.nickname" class="w-24"/>
      </div>
    </div>
  </div>
  <!-- <div>
    <span v-if="pending" class="loading loading-spinner text-primary"></span>
    <div v-else>
      
      <h2>
        #{{ player.jersey }} {{ player.firstName }} {{ player.lastName }} ({{
          gradClass(player.gradYear)
        }})
      </h2>
      <h3>{{ positionsDescriptions }}</h3>

      <h3>Stats: Coming soon!</h3>

    </div>

  </div> -->
</template>

<style scoped></style>
