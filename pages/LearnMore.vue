<script setup>
const positions = usePositions();
const checked = ref(false);
</script>

<template>
  <div class="join join-vertical w-full">
    <div
      v-for="position in positions"
      :key="position.key"
      class="collapse collapse-arrow join-item border border-base-300"
    >
      <input type="checkbox" v-model="position.checked" />
      <div class="flex collapse-title text-xl font-medium p-4">
        <!-- <span class="badge badge-outline mr-4 h-12 w-12">{{ position.key }}</span> -->

        <span class="text-accent mr-4">{{ position.key }}</span>
        <!-- <span class="avatar pr-4 w-16">
            <span class="rounded-full ring ring-secondary ring-offset-2">
              {{ position.key }}
            </span>
          </span> -->

        <span class="text-xl">{{ position.name }}</span>
      </div>
      <div class="collapse-content">
        <p v-if="position.aka" class="mb-2 text-sm">
          AKA: <span class="italic">{{ position.aka }}</span>
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          {{ position.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
