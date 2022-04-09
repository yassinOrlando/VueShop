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
      <ProductCard v-for="prod in prodList" :key="prod.id" :prod="prod" />
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

<style scoped>
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
}
</style>
