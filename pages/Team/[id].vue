<script setup>
const route = useRoute();

const { headCoaches, assistantCoaches, managers } = useRoster();
const { getTeamRoster } = useSupabase();

const { data: players, pending } = useAsyncData(
  `team:${route.params.id}`,
  () => getTeamRoster(route.params.id),
  {
    lazy: true,
    transform: (result) => result.data,
  }
);

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
  navigateTo(`/Player/${player.id}`);
}
</script>

<template>
  <div class="overflow-x-auto overflow-y-auto h-screen">
    <span v-if="pending" class="loading loading-spinner text-primary"></span>
    <div v-else>
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
  </div>
</template>

<style scoped></style>
