<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

</script>

<template>
  <PageTitle title="My cart" />

  <p>You have {{ cartStore.getCartLength }} items in your cart</p>

  <div>
    <div v-for="prod in cartStore.cart" :key="prod">
      {{ prod }}
    </div>
  </div>
</template>

<style>
</style>