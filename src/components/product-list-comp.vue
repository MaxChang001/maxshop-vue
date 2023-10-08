<!-- ProductsComponent.vue -->
<template>
    <div class="products-container">
      <div class="product-row" v-for="(row, rowIndex) in productRows" :key="'row-' + rowIndex">
        <div class="product-item" v-for="product in row" :key="product.id">
          <img :src="product.image" alt="Product Image" class="product-image" @click="showLargeImage(product.image)"/>
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p class="product-price">{{ product.price }} 元</p>
            <button class="add-to-cart-btn" @click="addCart(product)">添加到购物车</button>
          </div>
        </div>
      </div>
  
      <!-- Large Image Modal -->
      <div v-if="largeImage" class="modal-background" @click="closeLargeImage">
        <img :src="largeImage" alt="Large Product Image" class="large-image"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    data() {
      return {
        largeImage: null
      };
    },
    computed: {
      productRows() {
        let rows = [];
        for(let i = 0; i < this.items.length; i += 3) {
          rows.push(this.items.slice(i, i + 3));
        }
        return rows;
      }
    },
    methods: {
      showLargeImage(imageUrl) {
        this.largeImage = imageUrl;
      },
      closeLargeImage() {
        this.largeImage = null;
      },
      addCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  }
  </script>
  
  <style>
  .products-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .product-item {
    width: 30%;
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px; /* 商品间距 */
  }
  
  .product-image {
    width: 70%;
    margin-bottom: 10px;
    cursor: pointer; /* 表明图片可以点击 */
  }
  
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Large Image Modal Styles */
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .large-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  