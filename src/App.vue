<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
import header from './components/header/header.vue'
export default {
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    var that = this
    this.axios.get('/api/seller')
      .then(function (res) {
        console.log(res.data)
        that.seller = res.data.data
      })

    this.axios.get('/api/goods')
      .then(res => {
        console.log(res.data)
      })
  },
  mounted () {
    window.vue = this
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
