import App from './App.vue';
import { createApp } from 'vue';
import { products } from '@/assets/products.datasource';
import { TinyEmitter } from 'tiny-emitter';

export const appData = {
  data: {
    products,
    cart: []
  }
};

export const eventBus = new TinyEmitter();

eventBus.on('product:addToCart', (product) => {
  const products = appData.data.cart;
  let amount = 0;

  if (products?.length) {
    const productsFound = products.find((p) => p.id === product.id);
    if (productsFound) {
      amount = productsFound.length;
    }
  }

  if (amount !== 0) {
    const index = products.findIndex((p) => p.id === product.id);

    appData.data.cart[index].quantity = appData.data.cart[index].quantity + 1;
  } else {
    appData.data.cart = [...appData.data.cart, {
      ...product,
      quantity: amount + 1
    }];
  }

  eventBus.emit('cart:update', appData.data.cart);
});

eventBus.on('cart:removeProduct', (id) => {
  const index = appData.data.cart.findIndex((product) => product.id === id);

  if (index > -1) {
    const cart = [...appData.data.cart];
    cart.splice(index, 1);

    appData.data.cart = [...cart];
    eventBus.emit('cart:update', appData.data.cart);
  }
});

createApp(App, appData).mount('#app');
