<script setup>
const route = useRoute();
const { getTeam, getTeamRoster } = useData();

// const { headCoaches, assistantCoaches, managers } = useRoster();

const players = getTeamRoster(route.params.id);
const team = getTeam(players[0].team);

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

function rowClicked(player) {
  // TODO: Once I have images and/or stats
  //if(player.team_id === 1) navigateTo(`/Player/${player.id}`);
}
</script>

<template>
  <div class="overflow-x-auto overflow-y-auto">
    <h1 v-if="team" class="text-2xl text-center text-accent mb-4 h-12">
      <div class="avatar h-12">
        <div>
          <img :src="team.avatar_url" :alt="team.nickname" />
        </div>
      </div>
      <span class="align-middle">{{ team.name }}</span>
    </h1>
    <table class="table table-xs table-pin-rows table-pin-cols">
      <thead>
        <tr>
          <th>#</th>
          <td>Name</td>
          <td>Position</td>
          <td>Ht</td>
          <td>Class</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in players"
          :key="player.id"
          @click="rowClicked(player)"
        >
          <th>{{ player.jersey >= 0 ? player.jersey : "" }}</th>
          <td>{{ player.lastName }}, {{ player.firstName }}</td>
          <td>{{ player.positions.join("/") }}</td>
          <td>
            {{ Math.floor(player.height / 12) }}'{{ player.height % 12 }}"
          </td>
          <td>{{ gradClass(player.gradYear) }}</td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <td>Head Coach:</td>
          <td>
            {{
              headCoaches.map((c) => `${c.firstName} ${c.lastName}`).join(", ")
            }}
          </td>
        </tr>
        <tr>
          <td>Assistant Coach:</td>
          <td>
            {{
              assistantCoaches
                .map((c) => `${c.firstName} ${c.lastName}`)
                .join(", ")
            }}
          </td>
        </tr>
        <tr>
          <td>Managers:</td>
          <td>
            {{
              managers
                .map(
                  (c) =>
                    `${c.firstName} ${c.lastName} (${gradClass(c.gradYear)})`
                )
                .join(", ")
            }}
          </td>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>

<style scoped></style>
