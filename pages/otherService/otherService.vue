<template>
	<view class="content">
		<view class="banner">
      <image src="../../static/banner2.png" mode=""></image>
      <view class="welcome">
        <view class="name">ltz，你好！</view>
        <view class="text">欢迎使用其他代办服务</view>
      </view>
    </view>
    <view class="small-title">常用服务</view>
    <view class="list-wrap">
      <view class="list-item">
        <view class="iconfont icon-tese"></view>
        <view class="left">
          <view class="label">特色外贸资质备案登记</view>
          <view class="tip">出口食品收货人备案、出口食品生成企业备案</view>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="iconfont icon-zhengjian"></view>
        <view class="left">
          <view class="label">其他通关单证</view>
          <view class="tip">动植物检验检疫证明、原产地证明代办</view>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="iconfont icon-baoguandanguanli1"></view>
        <view class="left">
          <view class="label">代理报关</view>
          <view class="tip">报关</view>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="iconfont icon-shuishou"></view>
        <view class="left">
          <view class="label">税务服务</view>
          <view class="tip">出口退税服务、代理记账、代理纳税申报</view>
        </view>
        <view class="right">
          <view class="iconfont icon-arrow-right"></view>
        </view>
      </view>
      <view class="list-item">
        <view class="iconfont icon-wuliu"></view>
        <view class="left">
          <view class="label">物流服务</view>
          <view class="tip">货运代理</view>
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
  .content {
    padding: 23rpx 12rpx 100rpx;
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
    .small-title {
      @include cs(#333, 30rpx);
      font-weight: bold;
      margin-top: 42rpx;
      padding-left: 18rpx;
    }
    .list-wrap {
      .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40rpx 16rpx;
        border-bottom: 1px solid #ECECEC;
        .iconfont {
          font-size: 48rpx;
          margin-right: 30rpx;
        }
        .left {
          @include cs(#666666, 30rpx);
          flex: 1;
          .label {
            @include cs(#333, 30rpx);
            margin-bottom: 20rpx;
            font-weight: bold;
          }
          .tip {
            @include cs(#999, 24rpx);
          }
        }
        .right {
          .icon-arrow-right {
            @include cs(#999999, 25rpx);
          }
        }
      }
    }
  }
</style>
