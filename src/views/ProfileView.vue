<script setup>
import PageTitle from "@/components/PageTitle.vue";
import LoaderSpinner from "@/components/LoaderSpinner.vue";
import { useUserStore } from "@/stores/user";
import { onMounted, reactive } from "vue";

const userStore = useUserStore();

const state = reactive({ isLoading: false, cartList: [], user: {} });

function getUser() {
  fetch("https://fakestoreapi.com/users/" + userStore.getUserId)
    .then((res) => res.json())
    .then((json) => {
      state.user = json;
      console.log(json);
    });
}

function getUserCarts() {
  fetch("https://fakestoreapi.com/carts/user/" + userStore.getUserId)
    .then((res) => res.json())
    .then((json) => {
      state.cartList = json;
      state.isLoading = false;
      console.log(json);
    });
}

onMounted(async () => {
  state.isLoading = true;
  await getUserCarts();
  await getUser(); // This method contains the state.isLoading = false
});
</script>

<template>
  <PageTitle title="My profile" />

  <div v-if="!state.isLoading">
    <div class="profile-card" v-if="Object.keys(state.user).length !== 0">
      <h2>{{ state.user.username }}</h2>
      <h3>{{ state.user.email }}</h3>

      <p>
        Name: {{ state.user.name.firstname }} {{ state.user.name.lastname }}
      </p>
      <p>Phone: {{ state.user.phone }}</p>
      <p>
        Address: {{ state.user.address.street }} #{{
          state.user.address.number
        }}, {{ state.user.address.zipcode }}, {{ state.user.address.city }}
      </p>
    </div>

    <h2>Your cart list</h2>

    <div class="cart-container">
      <div v-for="cart in state.cartList" :key="cart" class="cart-card">
        <p>Cart id: {{ cart.id }}</p>
        <p>User id: {{ cart.userId }}</p>
        <p>Date: {{ cart.date }}</p>
        <div>
          Products:
          <ul v-for="prod in cart.products" :key="prod">
            <li>Id: {{ prod.productId }}</li>
            <ul>
              <li>Quantity: {{ prod.quantity }}</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <LoaderSpinner v-if="state.isLoading" />
</template>

<style>
.profile-card {
  width: 75%;
  border: 1px solid var(--color-border);
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  margin: 10px auto;
}

.cart-container {
  width: 100%;
  display: flex;
  gap: 2rem;
}

.cart-card {
  width: 200px;
  border: 1px solid var(--color-border);
  padding: 5px;
  border-radius: 10px;
}

.cart-card p {
  border-bottom: 1px solid var(--color-border);
}
</style>
