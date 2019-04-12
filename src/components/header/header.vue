<template>
  <div>
    <div class="content-wrapper">
      <div class="avatar">
        {{log (seller.avatar)}}
        <img width="64"
             height="64"
             :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports"
             class="support">
          <span class="icon"
                :class="iconArr[seller.supports[0].type]"></span>
          <span>{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports"
           class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <!-- {{seller.bulletin}} -->
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    seller: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    this.log = window.console.log;
    return {
      iconArr: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style lang='scss'>
.content-wrapper {
  position: relative;
  padding: 24px 12px 18px 24px;
  background: #005500;
  color: #fff;
  .avatar {
    display: inline-block;
    vertical-align: top;
    img {
      border-radius: 2px;
    }
  }
  .content {
    display: inline-block;
    margin-left: 16px;
    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 18px;
      margin: 2px 0 8px 0;
      .brand {
        display: inline-block;
        vertical-align: top;
        width: 30px;
        height: 18px;
        background-size: 30px 18px;
        background-repeat: no-repeat;
        @include bg-image("brand");
      }
      .name {
        display: inline-block;
        margin-left: 6px;
      }
    }
    .description {
      margin: 0 0 10px 0;
      font-size: 12px;
      font-weight: 200;
      line-height: 12px;
    }
    .support {
      margin: 0 0 4px 0;
      font-size: 10px;
      font-weight: 200;
      line-height: 12px;
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
        margin-right: 4px;
      }
      .decrease {
        @include bg-image("decrease_1");
      }
      .discount {
        @include bg-image("discount_1");
      }
      .special {
        @include bg-image("special_1");
      }
      .invoice {
        @include bg-image("invoice_1");
      }
      .guarantee {
        @include bg-image("guarantee_1");
      }
    }
  }
  .support-count {
    position: absolute;
    height: 24px;
    right: 12px;
    bottom: 18px;
    font-size: 10px;
    font-weight: 200;
    line-height: 24px;
    padding: 2px 8px 2px 12px;
    background: rgba($color: #000000, $alpha: 0.2);
    border-radius: 24px;
    text-align: center;
    .icon-keyboard_arrow_right {
      line-height: 24px;
      font-weight: 200;
    }
  }
}
.bulletin-wrapper {
  position: relative;
  background: rgba(7, 17, 27, 0.2);
  height: 28px;
  line-height: 28px;
  padding: 5px 22px 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .bulletin-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    margin-right: 4px;
    width: 22px;
    height: 12px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
    @include bg-image("bulletin");
  }
  .bulletin-text {
    font-size: 10px;
    text-align: center;
  }
  .icon-keyboard_arrow_right {
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 15px;
  }
}
</style>