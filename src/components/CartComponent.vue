<template>
    <div class="cart-container">
        <h2>购物车</h2>
        <table v-if="cartItems.length">
            <thead>
                <tr>
                    <th>商品图片</th>
                    <th>商品名称</th>
                    <th>商品价格</th>

                    <th>编辑</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                    <td><img :src="item.image" alt="商品图片" width="50" height="50"></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}元</td>
                    <td><button @click="removeFromCart(item.id)">删除</button></td>
                </tr>
            </tbody>
        </table>
        <p v-else>购物车为空</p>
    </div>
</template>

<script>
export default {
props: {
  cartItems: {
    type: Array,
    default: () => [],
  }
},
methods: {
  removeFromCart(itemId) {
    this.$emit('remove-from-cart', itemId);
  }
}
}
</script>

<style scoped>
.cart-container {
padding: 20px;
border: 1px solid #ddd;
border-radius: 8px;
}

.cart-container h2 {
margin-top: 0;
}

.cart-container ul {
padding: 0;
}

.cart-container li {
list-style-type: none;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
}

.cart-container button {
background-color: red;
color: white;
border: none;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
}
</style>
