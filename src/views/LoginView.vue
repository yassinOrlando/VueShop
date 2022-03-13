<script setup>
import PageTitle from "@/components/PageTitle.vue";
import LoginForm from "@/components/LoginForm.vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div v-if="!userStore.isLoggedIn">
    <PageTitle title="Sign in" />

    <LoginForm />
  </div>

  <button v-else class="logout-btn" @click="userStore.logout">Log out</button>
</template>

<style scoped>
.logout-btn {
  display: block;
  background-color: red;
  color: white;
  border: 0;
  margin: 0 auto;
  padding: 6px 1.3rem;
  width: 40%;
  border-radius: 5px;
  font-size: 20px;
}
</style>
