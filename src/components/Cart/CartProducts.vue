<template>
  <div class="d-flex flex-column">
    <h5 class="border-bottom pb-2">Mon panier :</h5>
    <cart-product v-for="product in cart"
                  :key="product.id"
                  :product="product"
                  class="px-4 py-1" />

    <hr class="w-100">
  </div>
</template>

<script>

import CartProduct from '@/components/Cart/CartProduct';

export default {
  components: {
    CartProduct
  },
  props: [ 'cart' ]
};
</script>

<style scoped>

</style>
