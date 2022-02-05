<template>
  <products :products="products" class="p-3" />
</template>

<script>
import Products from '@/components/Shop/Products';
import { appData, eventBus } from '@/main';


export default {
  components: {
    Products,
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.products = appData.data.products;
    eventBus.on('update:products', (products) => {
      this.products = products;
    });
  }
};
</script>

<style scoped>

</style>
