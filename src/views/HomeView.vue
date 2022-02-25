<script setup>
import PageTitle from "@/components/PageTitle.vue";
import ProductCard from "@/components/ProductCard.vue";
import LoaderSpinner from "@/components/LoaderSpinner.vue";
</script>

<template>
  <PageTitle title="Home" />

  <div class="content">
    <div class="product-list-container">
      <LoaderSpinner v-if="loadingProd" />
      <ProductCard v-for="prod in prodList" :key="prod.id" :prod="prod"/>
    </div>

    <div class="categories-list">
      <h2>Categories</h2>
      <LoaderSpinner v-if="loadingCat" />
      <div v-for="cat in catList" :key="cat">
        <hr />
        <p>{{ cat }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catList: [],
      prodList: [],
      loadingProd: false,
      loadingCat: false,
    };
  },
  methods: {
    async getCategories() {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((list) => (this.catList = list));

      this.loadingCat = false;
    },
    async getAllProds() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((list) => (this.prodList = list));

      this.loadingProd = false;
    },
  },
  async mounted() {
    this.loadingProd = true;
    this.loadingCat = true;
    await this.getCategories();
    await this.getAllProds();
  },
};
</script>

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

.categories-list {
  order: 1;
  border: 1px solid var(--color-border);
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
}

.categories-list h2 {
  margin-bottom: 0.5rem;
}

.categories-list p {
  margin: 0.5rem 0;
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

  .categories-list {
    order: 2;
    width: 20%;
  }
}
</style>
