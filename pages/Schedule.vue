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
      <li v-for="game in schedule" :key="game.time" class="border-2 mb-4">
        <div class="grid grid-cols-3 gap-2 min-h-full">
          <div class="w-24 text-center">
            <span>{{ game.visitor.name }}</span>
            <NuxtLink :to="`/Team/${game.visitor.id}`">
              <div class="avatar">
                <div>
                  <img
                    v-if="game.visitor.avatar_url"
                    :src="game.visitor.avatar_url"
                    :alt="game.visitor.nickname"
                  />
                </div>
              </div>
            </NuxtLink>
            <div class="text-center">{{ game.visitor.nickname }}</div>
          </div>

          <div class="text-center pt-8">
            <div class="">
              {{
                new Date(game.time).toLocaleDateString([], {
                  month: "short",
                  day: "2-digit",
                })
              }}
            </div>
            <div class="text-5xl">VS</div>
            <div class="">
              {{
                new Date(game.time).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })
              }}
            </div>
          </div>

          <div class="w-24 text-center">
            <span>{{ game.home.name }}</span>
            <NuxtLink :to="`/Team/${game.home.id}`">
              <div class="avatar">
                <div>
                  <img
                    v-if="game.home.avatar_url"
                    :src="game.home.avatar_url"
                    :alt="game.home.nickname"
                  />
                </div>
              </div>
            </NuxtLink>
            <div>{{ game.home.nickname }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
