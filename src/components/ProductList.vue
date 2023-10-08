<template>
    <!-- ... 其他页面内容 ... -->
    <ProductsComponent v-if="showProducts" :items="productItems" @add-to-cart="handleAddCart" />
    <CartComponent v-if="showCart" :cartItems="myCartItems" @remove-from-cart="handleRemove" />
    <user-info v-if="showProfile" :userInfo="userInfo" @save-user-info="editUser" />
    <footer class="bottom-nav">
      <div class="nav-item" @click="show('products')">
        <div class="icon">🛍</div>
        <div>商品</div>
      </div>
      <div class="nav-item" @click="show('cart')">
        <div class="icon">🛒</div>
        <div>购物车</div>
      </div>
      <div class="nav-item" @click="show('profile')">
        <div class="icon">👤</div>
        <div>用户</div>
      </div>
    </footer>
  </template>
  
  <script>
    import ProductsComponent from './product-list-comp.vue';
    import CartComponent from './CartComponent.vue';
    import UserInfo from './user-info-comp.vue';
    // import axios from 'axios';

  export default {
    components: {
      ProductsComponent,
      CartComponent,
      UserInfo
    },
    data(){
        return {
            showProducts: true,
            showCart: false,
            showProfile: false,
            productItems: [
              {
                id: 1,
                name: "商品1",
                price: 199.99,
                image: "https://via.placeholder.com/150"
              },
              {
                id: 2,
                name: "商品2",
                price: 299.99,
                image: "https://via.placeholder.com/150"
              },
              {
                id: 3,
                name: "商品3",
                price: 399.99,
                image: "https://via.placeholder.com/150"
              }
            ],
            myCartItems: [
                { id: 1, name: '商品1', price: 199.99, quantity: 2, image: 'https://via.placeholder.com/50' },
                { id: 2, name: '商品2', price: 299.99, quantity: 1, image: 'https://via.placeholder.com/50' }
            ],
            userInfo:{
                UserNo: "2018302110220",
                UserName: "张三",
                Email: "max@gmail.com",
                UserLevel: 1,
            }
        }
    },
    mounted() {
        console.log('this.$route.query=',this.$route.query);
        // this.userInfo = this.$route.query;
    },
    methods: {
        show(component) {
          this.showProducts = false;
          this.showCart = false;
          this.showProfile = false;

          if (component === 'products') this.showProducts = true;
          if (component === 'cart') this.showCart = true;
          if (component === 'profile') this.showProfile = true;
        },
        handleRemove(itemId) {
            this.myCartItems = this.myCartItems.filter(item => item.id !== itemId);
        },
        editUser(editedUserInfo) {
            this.userInfo = editedUserInfo;
        },
        handleAddCart(product) {
            const existingItem = this.myCartItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.myCartItems.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
            }
        }
    }
  }
  </script>
  
  <style scoped>
  /* ... 其他样式 ... */
  
  .bottom-nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ff6e35;
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  
  .icon {
    font-size: 24px;
  }
  </style>
  