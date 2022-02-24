<script setup>
import { RouterLink, RouterView } from "vue-router";
import WebsiteTitle from "@/components/WebsiteTitle.vue";
</script>

<template>
  <header>
    <!--<img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div class="wrapper">
      <WebsiteTitle msg="VueShop" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">&#128722; Cart (0)</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p><b> Yassín Orlando Vázquez Paz </b></p>
  </footer>
</template>

<style>
@import "@/assets/base.css";

#app {
  /*font-weight: normal;*/
}

main {
  width: 80%;
  margin: 0 auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 1rem;
}

/*.logo {
  display: block;
  margin: 0 auto 2rem;
} */

a {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.wrapper {
  width: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0.6rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer {
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: white;
  background-color: hsla(160, 100%, 37%, 1);
}

@media (max-width: 1024px) {
  main {
    width: 95%;
  }
}

/*@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
