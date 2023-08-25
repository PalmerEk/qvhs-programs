<script setup>
const positions = usePositions();
</script>

<template>
  <div class="join join-vertical w-full">
    <div
      v-for="position in positions"
      :key="position.key"
      class="collapse collapse-arrow join-item border border-base-300"
    >
      <input type="radio" name="accordion-positions" />
      <div class="collapse-title font-medium">
        <span class="avatar pr-4 ">
          <span class="rounded-full ring ring-secondary ring-offset-2">
            {{ position.key }}
          </span>
        </span>
        <span class="text-xl">{{ position.name }}</span>
      </div>
      <div class="collapse-content">
        <p>hello</p>
        <p>{{ position.aka }}</p>
        <p>{{ position.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
