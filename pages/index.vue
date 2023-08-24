<script setup>
const BTN_LINKS = [
  {
    name: "JV",
    link: "/QVTeam",
  },
  {
    name: "Varsity",
    link: "/QVTeam",
  },
  {
    name: "Opponents",
    link: "/VisitingTeam",
  },
  {
    name: "Learn More",
    link: "/LearnMore",
  },
  {
    name: "Concessions",
    link: "/Concessions",
  },
  {
    name: "Sound Board",
    link: "/SoundBoard",
  },
]
</script>

<template>
  <div class="my-4">
    <img src="/QVLogo.png" alt="QV Logo" class="w-1/2 mx-auto" />
    <h1 class="text-[#fcb525] text-center text-2xl">Girls Highschool Volleyball</h1>
    <hr />

    <div class="columns-2 text-center">
      <NuxtLink v-for="btn in BTN_LINKS" :key="btn.name" :to="btn.link"
      class="relative inline-flex items-center justify-evenly inline-block p-4 overflow-hidden">
      <span class="relative w-full text-white inset-0 border-2 border-[#fcb525] rounded-full"><Icon name="VolleyballIcon" size="80" fill="#fcb525" /></span>
        <span class="absolute ">{{ btn.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.qvGold {
  color: #fcb525
}
</style>
