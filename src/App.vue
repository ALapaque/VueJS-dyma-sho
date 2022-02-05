<template>
  <div id="app">
    <Header />
    <div class="d-flex flex-row">
      <Shop class="w-75" />
      <Cart />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Shop from '@/components/Shop/Shop';
import Cart from '@/components/Cart/Cart';

export default {
  components: {
    Header,
    Shop,
    Cart
  }
}
</script>

<style>
</style>
