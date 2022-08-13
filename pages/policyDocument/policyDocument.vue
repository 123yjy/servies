<template>
  <view class="content">
    <view class="banner">
      <image src="../../static/banner2.png" mode=""></image>
      <view class="welcome">
        <view class="name">ltz，你好！</view>
        <view class="text">欢迎使用政策文件服务</view>
      </view>
    </view>
    <view class="small-title">服务列表</view>
    <view class="list-wrap">
      <navigator class="list-item">
        <view class="left">
          <text class="iconfont icon-shuiwu"></text>
          <text>税务相关</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </navigator>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-jinchukou"></text>
          <text>商务局相关</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-jingying"></text>
          <text>海关相关</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-tianxiebaogao1"></text>
          <text>自贸管委会相关</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-qitashezhi"></text>
          <text>其他相关</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import '../../static/css/list.scss';

  .content {
    padding: 23rpx 12rpx 20rpx;

    .banner {
      @include wh(100%, 260rpx);
      position: relative;
    }

    .welcome {
      position: absolute;
      left: 50rpx;
      top: 60rpx;

      .name {
        @include cs(#333, 38rpx);
        margin-bottom: 10rpx;
      }

      .text {
        @include cs(#999, 30rpx);
      }
    }
  }
</style>
