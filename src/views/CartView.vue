<script setup>
import PageTitle from "@/components/PageTitle.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <PageTitle :title="'My cart (' + cartStore.getCartLength + ')'" />

  <div class="content">
    <div class="product-list-container">
      <ProductCard
        v-for="prod in cartStore.cart"
        :key="prod.id"
        :prod="prod"
        :cartView="true"
      />
    </div>

    <div class="price-card">
      <h2>Total price</h2>
      <h3 class="price">${{ cartStore.getTotalPrice }}</h3>
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
}

.product-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  order: 2;
}

.price-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  order: 1;
  border: 1px solid var(--color-border);
  width: 100%;
  max-height: 100px;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
}

.price {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}

@media (min-width: 764px) {
  .content {
    display: flex;
    flex-direction: row;
  }

  .product-list-container {
    width: 70%;
    order: 1;
  }

  .price-card {
    order: 2;
    width: 20%;
    padding: 0;
  }
}
</style>
