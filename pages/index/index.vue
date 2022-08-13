<template>
  <view class="content">
    <view class="head">
      <view class="left">
        <view class="area">雨花区<span class="arrow-down">▼</span></view>
        <view class="temperature">38℃多云</view>
      </view>
      <view class="right">
        <view class="search-box">
          <text class="iconfont icon-sousuo"></text>
          <text>搜索</text>
        </view>
      </view>
    </view>
    <view class="user">
      <view class="left">
        <view class="avatar">
          <image src="../../static/avatar.png" mode=""></image>
        </view>
        <view class="nickname">ltz</view>
      </view>
      <view class="right">
        个人中心<text class="iconfont icon-arrow-right"></text>
      </view>
    </view>
    <view class="tabs">
      <view class="tab-item">
        <view class="tab-icon">
          <view class="iconfont icon-daibanshixiang"></view>
        </view>
        <text>我的事项</text>
      </view>
      <view class="tab-item">
        <view class="tab-icon">
          <view class="iconfont icon-zixun"></view>
        </view>
        <text>我的咨询</text>
      </view>
      <view class="tab-item">
        <view class="tab-icon">
          <view class="iconfont icon-zixunguanli"></view>
        </view>
        <text>消息中心</text>
      </view>
      <view class="tab-item" @click="customer">
        <view class="tab-icon">
          <view class="iconfont icon-kefu"></view>
        </view>
        <text >在线客服</text> 
      </view>
    </view>
    <swiper class="swiper" :indicator-dots="true" indicator-active-color="#fff">
      <swiper-item>
        <image class="banner-img" src="../../static/banner.png" mode="aspectFit"></image>
      </swiper-item>
    </swiper>
    
    <view class="list-wrap">
      <view class="title" @click="activeTab = 0" :class="{'active': activeTab == 0}">服务</view>
      <!-- <view class="title" @click="activeTab = 1" :class="{'active': activeTab == 1}">专区</view> -->
      <view class="service-list" v-show="activeTab == 0">
        <view class="l-item" @click="toCompanyEnter">
          <view class="left">
            <view class="iconfont icon-tianxiebaogao1"></view>
            <view class="text">
              <view class="label">企业入驻</view>
              <view class="tip">入驻指引、手续</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </view>
        <view class="l-item" @click="toBasicHandle">
          <view class="left">
            <view class="iconfont icon-jichu"></view>
            <view class="text">
              <view class="label">基础资质办理</view>
              <view class="tip">工商注册、税务登记、普通进出口权备案登记</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </view>
        <view class="l-item" @click="toOtherService">
          <view class="left">
            <view class="iconfont icon-daiban"></view>
            <view class="text">
              <view class="label">其他代办服务</view>
              <view class="tip">特色外贸资质备案登记、其他通关单证</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </view>
        <navigator class="l-item" url="../otherService2/otherService2">
          <view class="left">
            <view class="iconfont icon-qitafuwu"></view>
            <view class="text">
              <view class="label">其他服务</view>
              <view class="tip">......</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </navigator>
        <navigator class="l-item" url="../policyDocument/policyDocument">
          <view class="left">
            <view class="iconfont icon-zhengcefagui"></view>
            <view class="text">
              <view class="label">政策文件</view>
              <view class="tip">.......</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </navigator>
        <view class="l-item" @click="toConsultation">
          <view class="left">
            <view class="iconfont icon-liuyan"></view>
            <view class="text">
              <view class="label" >咨询服务</view>
              <view class="tip">政策咨询、常见问题咨询、咨询留言</view>
            </view>
          </view>
          <view class="right">
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        activeTab: 0
      }
    },
    onLoad() {

    },
    methods: {
      toCompanyEnter(){
        uni.navigateTo({
          url:'../companyEnter/companyEnter'
        })
      },
      toOtherService(){
        uni.navigateTo({
          url:'../otherService/otherService'
        })
      },
      toBasicHandle(){
        uni.navigateTo({
          url:'../basicHandle/basicHandle'
        })
      },
      toConsultation(){
        uni.navigateTo({
          url:'../consultation/consultation'
        })
      },
      customer(){
        uni.navigateTo({
          url:'../otherService3/customer_service'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    padding: 0 20rpx 100rpx;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 45rpx;
      .left {
        .area {
          @include cs(#333, 38rpx);
          display: flex;
          align-items: center;
          .arrow-down {
            font-size: 18rpx;
            margin-left: 16rpx;
          }
        }
        .temperature {
          @include cs(#333, 30rpx);
        }
      }
      .right {
        .search-box {
          @include wh(172rpx, 68rpx);
          border-radius: 34rpx;
          box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.11);
          line-height: 68rpx;
          text-align: center;
          @include cs(#999, 30rpx);
          .icon-sousuo {
            font-size: 30rpx;
            margin-right: 16rpx;
          }
        }
      }
    }
    .user {
      width: 100%;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.11);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 27rpx;
      border-radius: 12rpx;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          @include wh(95rpx, 95rpx);
        }
        .nickname {
          @include cs(#333, 38rpx);
          margin-left: 22rpx;
        }
      }
      .right {
        @include cs(#999, 30rpx);
        .icon-arrow-right {
          font-size: 28rpx;
        }
      }
    }
    .tabs {
      display: flex;
      justify-content: space-between;
      margin: 50rpx 0;
      .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-icon {
          @include wh(96rpx, 96rpx);
          background: linear-gradient(45deg, #4080E6, #51B0FF);
          border-radius: 50%;
          text-align: center;
          line-height: 96rpx;
          overflow: hidden;
          .iconfont {
            @include cs(#fff, 46rpx);
          }
          .icon-zixun {
            background: linear-gradient(45deg, #01BEB5, #06DDD3);
          }
          .icon-zixunguanli {
            background: linear-gradient(45deg, #FF8706, #FFD75D);
          }
          .icon-kefu {
            background: linear-gradient(45deg, #FA491F, #FF8274);
          }
        }
        image {
          @include wh(96rpx, 96rpx);
        }
        text {
          @include cs(#333, 30rpx);
          margin-top: 20rpx;
        }
      }
    }
    .swiper {
      height: 216rpx;
      .banner-img {
        @include wh(100%, 216rpx);
      }
    }
    .list-wrap {
      margin-top: 50rpx;
      .title {
        position: relative;
        display: inline-block;
        margin-right: 60rpx;
        @include cs(#666666, 30rpx);
        &.active {
          @include cs(#333, 36rpx);
          font-weight: 600;
        }
        &.active::after {
          @include wh(47rpx, 5rpx);
          background: linear-gradient(249deg, #4080E6, #51B0FF);
          border-radius: 3rpx;
          position: absolute;
          left: 50%;
          bottom: -10rpx;
          content: '';
          transform: translateX(-50%);
          animation: tabMove .3s;
        }
        @keyframes tabMove {
          from { width: 0; }
          to { width: 47rpx; }
        }
        @-webkit-keyframes tabMove {
          from { width: 0; }
          to { width: 47rpx; }
        }
      }
      .service-list {
        padding: 0 20rpx;
        margin-top: 20rpx;
        .l-item {
          padding: 40rpx 0;
          border-bottom: 1px solid #E7E7E7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            .iconfont {
              font-size: 47rpx;
            }
            .text {
              margin-left: 30rpx;
              .label {
                @include cs(#333, 30rpx);
                margin-bottom: 10rpx;
                font-weight: 600;
              }
              .tip {
                @include cs(#999, 24rpx);
              }
            }
          }
          .right {
            .icon-arrow-right {
              color: #999999;
            }
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
