<script setup>
import { reactive } from "vue";
import { useUserStore } from "@/stores/user";

import LoaderSpinner from "@/components/LoaderSpinner.vue";

const user = useUserStore();

const form = reactive({
  username: "",
  password: "",
  hasError: false,
  errorMsg: "",
  isLoading: false,
});

function login() {
  if (form.username == "" || form.password == "") {
    form.hasError = true;
    form.errorMsg = "The form must be filled";

    console.log("Form has errors");
    console.log("Available users");
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json));
  } else {
    form.hasError = false;
    form.errorMsg = "";
    form.isLoading = true;

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then(async (token) => {
        let res = await fetch("https://fakestoreapi.com/users");
        let userList = await res.json();

        let myUser = userList.filter((user) => {
          return user.username == form.username;
        });

        myUser = myUser[0];

        console.log(myUser);

        user.setUser(myUser.username, token, myUser.id);

        form.isLoading = false;
      })
      .catch((err) => {
        form.hasError = true;
        form.errorMsg =
          "Error on username or password. Error: " + err.stringify;
        form.isLoading = false;
      });
  }
}
</script>

<template>
  <LoaderSpinner v-if="form.isLoading" />

  <form v-else action="" @submit.prevent="onSubmit">
    <p>
      <b>Try with:</b> <br />
      Username: johnd <br />
      Password: m38rmF$ <br />
    </p>

    <input
      type="text"
      v-model="form.username"
      placeholder="Username"
      name="username"
      id="username"
    />

    <input
      type="password"
      v-model="form.password"
      placeholder="Password"
      name="password"
      id="password"
    />

    <p v-if="form.hasError" class="has-errors">{{ form.errorMsg }}</p>

    <button @click="login" class="sign-btn">Sign in</button>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
}

form input {
  display: block;
  width: 100%;
  margin: 5px auto;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  padding: 5px;
}

.sign-btn {
  display: block;
  color: white;
  margin: 0 auto;
  padding: 6px 1.3rem;
  font-weight: bold;
  background-color: hsla(160, 100%, 37%, 1);
  width: 50%;
  border: 0;
}

.has-errors {
  background-color: red;
  color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
}

@media (min-width: 750px) {
  form {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
