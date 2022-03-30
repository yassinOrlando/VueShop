<script setup>
import PageTitle from "@/components/PageTitle.vue";
import LoaderSpinner from "@/components/LoaderSpinner.vue";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";
import { reactive } from "vue";

const cartStore = useCartStore();
const userStore = useUserStore();

const state = reactive({ isLoading: false });
</script>

<template>
  <PageTitle title="My profile" />

  <div v-if="!state.isLoading">
    <h2>This is your profile</h2>
  </div>

  <LoaderSpinner v-if="state.isLoading" />
</template>

<style></style>
