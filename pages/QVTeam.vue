<script setup>
const QVTeam = useRoster();
const positions = usePositions();

const columns = [
  {
    key: "jerseyNumber",
    label: "#",
    sortable: true,
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "position",
    label: "Position",
  },
  {
    key: "height",
    label: "Ht",
  },
  {
    key: "class",
    label: "Class",
  },
];

const players = computed(() => {
    return QVTeam.filter((player) => {
        return !player.positions.includes("M") && !player.positions.includes("HC") && !player.positions.includes("AC") 
    })
})

const headCoaches = computed(() => {
    return QVTeam.filter((player) => {
        return player.positions.includes("HC")
    })
    .map((player) => `${player.firstName} ${player.lastName}`)
    .join(", ")
})

const AssistantCoaches = computed(() => {
    return QVTeam.filter((player) => {
        return player.positions.includes("AC")
    })
    .map((player) => `${player.firstName} ${player.lastName}`)
    .join(", ")
})

const Managers = computed(() => {
    return QVTeam.filter((player) => {
        return player.positions.includes("M")
    })
    .map((player) => `${player.firstName} ${player.lastName} (${gradClass(player.gradYear)})`)
    .join(", ")
})


const gradClass = (gradyear) => {
    const currentYear = new Date().getFullYear()
    const currentMonth = (new Date().getMonth()+1)
    const graduateInYears = gradyear-currentYear;
    if(currentMonth < 6) graduateInYears+1; // second half of school year
    
    return graduateInYears <= 1 ? "Sr." : graduateInYears <= 2 ? "Jr." : graduateInYears <= 3 ? "So." : "Fr."
}

const positionsDescriptions = (playerPositions) => {
  return playerPositions.map((position) => {
    return positions[position].name;
  });
};
</script>

<template>
  <div>
    <UTable :rows="players" :columns="columns">
      <template #name-data="{ row }">
        <span class="text-primary-500 dark:text-primary-400">
            {{ row.lastName }}, {{ row.firstName }}</span>
      </template>

      <template #jerseyNumber-data="{ row }">
        <span class="text-primary-500 dark:text-primary-400">
            {{ row.jerseyNumber }}</span>
      </template>

      <template #position-data="{ row }">
        <span class="text-primary-500 dark:text-primary-400">
            {{ row.positions.join("/") }}</span>
      </template>

      <template #height-data="{ row }">
        <span class="text-primary-500 dark:text-primary-400">
            {{ Math.floor(row.height / 12) }}'{{ row.height%12 }}" </span>
      </template>

      <template #class-data="{ row }">
        <span class="text-primary-500 dark:text-primary-400">
            {{ gradClass(row.gradYear) }}</span>
      </template>
    </UTable>

    <div class="text-primary-500 dark:text-primary-400"><span>Head Coach: </span><span>{{ headCoaches }}</span></div>
    <div class="text-primary-500 dark:text-primary-400"><span>Assistant Coach: </span><span>{{ AssistantCoaches }}</span></div>
    <div class="text-primary-500 dark:text-primary-400"><span>Managers: </span><span>{{ Managers }}</span></div>
  </div>
</template>

<style scoped></style>
