<script setup>
const positions = usePositions();

const columns = [
  {
    key: "abbreviation",
    label: "Pos",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "aka",
    label: "AKA",
  },
  {
    key: "description",
    label: "Description",
  },
];
</script>

<template>
  <div>
    <UAccordion :items="positions">
      <template #default="{ item, index, open }">
        <UButton
          color="gray"
          variant="ghost"
          class="border-b border-gray-200 dark:border-gray-700"
          :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
        >
        <UAvatar :text="item.key" size="xl"/>
          <span class="text-xl">{{ item.name }}</span
          >
          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>

      <template #item="{ item }">
        <p v-if="item.aka"> (aka: {{ item.aka }})</p>
        <p class="text-gray-900 dark:text-white text-center text-l">
          {{ item.description }}
        </p>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>
