<template>
  <div class="d-flex flex-row justify-content-between align-items-center">
    <span>{{ product.quantity }}</span>
    <span>{{ product.title }}</span>
    <span><strong>{{ product.price }} €</strong></span>
    <button @click="removeProductFromCart"
            type="button"
            class="btn btn-danger close">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
  props: ['product'],
  methods: {
    removeProductFromCart() {
      eventBus.emit('cart:removeProduct', this.product.id);
    }
  }
};
</script>

<style scoped>

</style>
