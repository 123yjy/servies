<template>
	<view class="content">
		<view class="banner">
      <image src="../../static/banner2.png" mode=""></image>
      <view class="welcome">
        <view class="name">ltz，你好！</view>
        <view class="text">欢迎使用基础资质办理服务</view>
      </view>
    </view>
    <view class="small-title">常用服务</view>
    <view class="list-wrap">
      <navigator class="list-item" url="./businessRegister/businessRegister">
        <view class="left">
          <text class="iconfont icon-tianxiebaogao1"></text>
          <text>工商注册（变更、注销）</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </navigator>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-shuiwu"></text>
          <text>税务登记</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <navigator class="list-item" url="./foreignTrade/foreignTrade">
        <view class="left">
          <text class="iconfont icon-jingying"></text>
          <text>对外贸易经营者备案登记</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </navigator>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-jinchukou"></text>
          <text>海关进出口收发货人登记备案</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item" @click="Toelectron">
        <view class="left">
          <text class="iconfont icon-shenling"></text>
          <text>电子口岸IC卡U盾申领</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-waihuimaimai"></text>
          <text>货物贸易外汇收支企业名录登记</text>
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
			Toelectron(){
        uni.navigateTo({
          url:'/pages/basicHandle/electronIc/electron_ic'
        })
      }
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
