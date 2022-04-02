<script setup>
import PageTitle from "@/components/PageTitle.vue";
import LoginForm from "@/components/LoginForm.vue";
import { onMounted, reactive } from "vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const users = reactive({
  list: [],
});

async function availableUsers() {
  const userList = await fetch("https://fakestoreapi.com/users");

  return userList.json();
}

// eslint-disable-next-line no-unused-vars
onMounted(() => {
  availableUsers().then((data) => {
    users.list = data;
  });
});
</script>

<template>
  <div v-if="!userStore.isLoggedIn">
    <PageTitle title="Sign in" />

    <LoginForm />

    <table>
      <tr>
        <th colspan="2">More users</th>
      </tr>
      <tr>
        <th>Username</th>
        <th>Password</th>
      </tr>
      <tr v-for="user in users.list" :key="user">
        <td>{{ user.username }}</td>
        <td>{{ user.password }}</td>
      </tr>
    </table>
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

table,
th,
td {
  border: 1px solid var(--color-border);
  border-collapse: collapse;
  padding: 5px;
}

table {
  margin: 15px auto;
}
</style>
