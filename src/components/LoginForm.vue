<script setup>
import { reactive } from "vue";

const form = reactive({
  username: "",
  password: "",
  hasError: false,
  errorMsg: "",
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

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((token) => console.log(token))
      .catch((err) => {
        form.hasError = true;
        form.errorMsg =
          "Something went wrong. Please try later. Error: " + err.stringify;
      });
  }
}
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <p>
      <b>Try with:</b> <br />
      Username: mor_2314 <br />
      Password: 83r5^_ <br />
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
  border: 0;
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
