<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="prod-card">
    <div class="img-container">
      <img :src="data.image" alt="product-img" />
    </div>
    <div class="details-container">
      <h1 class="prod-title">
        {{ data.title }}
      </h1>
      <div class="prod-cat">
        {{ data.category }}
      </div>
      <div class="prod-price">${{ data.price }}</div>
      <div class="add-btn" @click="addToCart">Add to cart</div>
      <div class="rmv-btn" @click="addToCart">Remove from cart</div>
      <div>
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      console.log("Added to cart");
    },
  },
};
</script>

<style scoped>
.prod-card {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding-bottom: 1rem;
  overflow: hidden;
}

.details-container div {
  padding: 0.3rem 1rem;
}

.prod-title {
  font-weight: bold;
  text-align: center;
}

.prod-cat {
  text-align: center;
}

.prod-price {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
  text-align: center;
}

.add-btn,
.rmv-btn {
  background-color: hsla(160, 100%, 37%, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.rmv-btn {
  background-color: red !important;
}

@media (max-width: 764px) {
  .img-container {
    background-color: white;
    height: 220px;
    position: relative;
    margin-bottom: 10px;
  }

  img {
    max-width: 200px;
    max-height: 200px;

    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
  }
}

@media (min-width: 764px) {
  .prod-card {
    display: flex;
    padding-bottom: 0;
  }

  .img-container {
    background-color: white;
    height: 500px;
    width: 100%;
    position: relative;
  }

  img {
    max-width: 400px;
    max-width: 100%;
    max-height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
  }
}
</style>
