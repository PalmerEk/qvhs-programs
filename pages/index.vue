<script setup>
const NAV_LINKS = [
  // {
  //   name: "Today's Game",
  //   link: "/Schedule",
  //   img: "/VBBack_1.jpeg",
  // },
  {
    name: "Schedule",
    link: "/Schedule",
    img: "/schedules.webp",
  },
  {
    name: "QV Roster",
    link: "/Team/1",
    img: "/VBBack_2.jpeg",
  },
  // {
  //   name: "Opponents",
  //   link: "/VisitingTeam",
  //   img: "/VBBack_3.jpeg",
  // },
  {
    name: "Learn More",
    link: "/LearnMore",
    img: "/VBBack_3.jpeg",
  },
  // {
  //   name: "Concessions",
  //   link: "/Concessions",
  // },
  // {
  //   name: "Sound Board",
  //   link: "/SoundBoard",
  // },
];
</script>

<template>
  <div>
    <div class="hero" style="background-image: url(/QVLogo.png)">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Game Day</h1>
          <p class="mb-5">
            
          </p>
        </div>
      </div>
    </div>

    <div class="join join-vertical">
      <NuxtLink
        v-for="navLink in NAV_LINKS"
        :key="navLink.name"
        :to="navLink.link"
        class="join-item"
      >
        <div class="card bg-base-100 shadow-xl image-full p-4">
          <figure><img :src="navLink.img" :alt="navLink.name" /></figure>
          <div class="card-body">
            <h2 class="text-6xl text-secondary">{{ navLink.name }}</h2>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
