<template>
  <div class="d-flex flex-row flex-wrap">
    <product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from '@/components/Shop/Product';

export default {
  components: {
    Product
  },
  props: [ 'products' ]
};
</script>

<style scoped>

</style>
