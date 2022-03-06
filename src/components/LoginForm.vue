<script setup>
import { reactive } from "vue";

const form = reactive({
  username: "",
  password: "",
  hasError: null,
});

function login() {
  if (form.username == "" || form.password == "") {
    form.hasError = true;
    console.log("Form has errors");
  } else {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
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

    {{ form.username }}
    {{ form.password }}

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

@media (min-width: 750px) {
  form {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
