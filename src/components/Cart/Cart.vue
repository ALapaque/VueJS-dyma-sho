<template>
  <cart-products :cart="cart" class="p-3 w-25" />
</template>

<script>
import { appData, eventBus } from '@/main';
import CartProducts from '@/components/Cart/CartProducts';

export default {
  components: {
    CartProducts
  },
  data() {
    return {
      cart: []
    };
  },
  created() {
    this.cart = appData.data.cart;
    eventBus.on('cart:update', (c) => {
      this.cart = [...c];
    });
  },
};
</script>

<style scoped>

</style>
