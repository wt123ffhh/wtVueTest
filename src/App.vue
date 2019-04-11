<template>
  <div id="app">
    <v-header></v-header>
    <div class="itemView">
      <router-link class="item"
                   to="/">商品</router-link>
      <router-link class="item red"
                   to="/ratings">评论</router-link>
      <router-link class="item"
                   to="/seller">商家</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss">
.itemView {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(orange);
  .item {
    flex: 1;
    text-align: center;
    text-decoration: none;
  }
  .red {
    background: pink;
  }
}
</style>
