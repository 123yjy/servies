<template>
	<view class="content">
		<view class="banner">
      <image src="../../static/banner2.png" mode=""></image>
      <view class="welcome">
        <view class="name">ltz，你好！</view>
        <view class="text">欢迎使用咨询服务</view>
      </view>
    </view>
    <view class="small-title">常用服务</view>
    <view class="list-wrap">
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-tianxiebaogao1"></text>
          <text>政策咨询</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item" @click="toCompanyEnter6">
        <view class="left">
          <text class="iconfont icon-changjianwenti" ></text>
          <text>常见问题咨询</text>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="left">
          <text class="iconfont icon-liuyan"></text>
          <text>咨询留言</text>
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
			toCompanyEnter6(){
        uni.navigateTo({
          url:'../consultation/alwaysquestions'
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
