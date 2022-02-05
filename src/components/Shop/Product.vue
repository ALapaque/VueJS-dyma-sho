<template>
  <div class="p-2">
    <div v-if="product"
         class="card"
         style="width: 18rem;">
      <img :src="product.img"
           :alt="product.title"
           class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <div class="d-flex d-row justify-content-between align-items-center">
          <span>{{ product.price }} €</span>
          <button @click="addProductToCart"
                  type="button"
                  class="btn btn-primary">
            Commander
          </button>
        </div>
      </div>
    </div>

    <div v-else
         class="card card-loading"
         aria-hidden="true"
         style="width: 18rem;">
      <img class="card-img-top">
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <button tabindex="-1"
                class="btn btn-primary disabled placeholder col-6">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
  props: ['product'],
  methods: {
    addProductToCart() {
      eventBus.emit('product:addToCart', { ...this.product });
    }
  }
};
</script>

<style scoped
       style="css">
.card {
  border: transparent;
}

.card, .card-body {
  background-color: white;
}

.card, .card-loading .card-img-top {
  min-height: 12.5rem;
  background-color: #3232323b;
}
</style>
