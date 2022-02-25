<script setup>
defineProps({
  prod: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="prod-card">
    <img :src="prod.image" alt="prod-img" />
    <h4>{{ prod.title }}</h4>
    <br />
    <p>{{ prod.description }}</p>
    <br />
    <p>${{ prod.price }}</p>
    <button>See</button>
  </div>
</template>

<style scoped>
.prod-card img {
  max-width: 200px;
  max-height: 200px;
}

.prod-card {
  max-width: 250px;
  text-align: center;
  padding-bottom: 1rem;
  border: 1px solid var(--color-border);
}
</style>
