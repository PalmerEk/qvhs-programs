<script setup>
const NAV_LINKS = [
  // {
  //   name: "QV Roster",
  //   description: "The whose who on the QV Girls Volleyball team",
  //   link: "/Team/1",
  //   img: "/VBBack_1.jpeg",
  // },
  // {
  //   name: "Schedule",
  //   description: "Make sure you know when and where the games are",
  //   link: "/Schedule",
  //   img: "/VBBack_6.jpg",
  // },
  {
    name: "Concessions",
    description: "You know you wanna",
    link: "/Concessions",
    img: "/SnacksBack.png",
  },
  // {
  //   name: "Sponsor",
  //   description: "It takes a village to raise a team",
  //   link: "/Sponsors",
  //   img: "/VBBack_7.png",
  // },
  
];

// TODO: Maybe add "Next Game" to the home page if there isn't a game today?
const { todaysGame } = useData()

</script>

<template>
  <div>
    <!-- Banner? -->
    <!-- <div class="hero" style="background-image: url(/QVLogo.png)">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Game Day</h1>
          <p class="mb-5">
            
          </p>
        </div>
      </div>
    </div> -->

    <div class="join join-vertical">
      <NuxtLink v-if="todaysGame" to="/TodaysGame" class="join-item">
        <div class="card border-2 glass border-accent p-4 m-4">
          <figure>
            <img src="/VBBack_4.jpg" alt="Today's game" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-accent">Today's Game</h2>
            <p class="text-sm italic">Today's matchup</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        v-for="navLink in NAV_LINKS"
        :key="navLink.name"
        :to="navLink.link"
        class="join-item"
      >
        <div class="card border-2 glass border-accent p-4 m-4">
          <figure>
            <img :src="navLink.img" :alt="navLink.name" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-accent">{{ navLink.name }}</h2>
            <p class="text-sm italic">{{ navLink.description }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
