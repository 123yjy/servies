<template>
  <view class="upload-card flex-column-center" @click="toUpload">
    <template v-if="!fileUrl">
      <view class="upload-add">
        <view class="iconfont icon-add"></view>
      </view>
      <view class="upload-text">
        <slot name="tips-text"></slot>
      </view>
    </template>
    <view v-else class="img-box">
      <view class="img-delete" @click.stop="toDeleteImg">
        <view class="iconfont icon-lajitong"></view>
      </view>
      <image :src="fileUrl" @click.stop="topreviewImg"></image>
    </view>
  </view>
</template>

<script>
  import { baseUrl } from '../request/request.js';
  export default {
    name: "fileUpload",
    data() {
      return {
      };
    },
    props:{
      fileUrl: {      //文件地址
        type: String,
        default: ''
      },
      fieldName: {      //字段名
        type: String,
        default: ''
      }
    },
    methods:{
      toDeleteImg(){
        uni.showModal({
          content:'确定删除？',
          success:(res) => {
            if(res.cancel){
              return;
            }
            this.$emit('fileChange', this.fieldName, '');
          }
        })
      },
      topreviewImg(){
        uni.previewImage({
          current: 0,
          urls:[this.fileUrl],
        })
      },
      toUpload(){
        uni.chooseImage({
          count: 1,
          success: (chooseImageRes) => {
            let path = chooseImageRes.tempFilePaths[0];
            uni.uploadFile({
              url: baseUrl+'/api/upload_image',
              filePath: path,
              name: '',
              formData: {},
              success:(uploadFileRes) => {
                console.log(uploadFileRes);
                // this.$emit('fileChange', this.fieldName, path);
              },
              fail:() => {}
            })
            
            // uniCloud.uploadFile({
            //   filePath: path,
            //   cloudPath: 'a.jpg',
            //   onUploadProgress: function(progressEvent) {
            //     console.log(progressEvent);
            //     var percentCompleted = Math.round(
            //       (progressEvent.loaded * 100) / progressEvent.total
            //     );
            //   },
            //   success() {},
            //   fail() {},
            //   complete() {}
            // });
            
          },
          fail:() => {}
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .upload-card {
    @include wh(334rpx,200rpx);
    border: 1px dotted #999;
    border-radius: 8rpx;
    background-color: #F0F0F0;
    .upload-add {
      @include wh(60rpx, 60rpx);
      border-radius: 50%;
      background-color: #fff;
      .icon-add {
        color: #4795F2;
        text-align: center;
        line-height: 60rpx;
      }
    }
    .upload-text {
      @include cs(#C0C0C0, 24rpx);
      margin-top: 20rpx;
    }
    
    .img-box {
      @include wh(100%, 100%);
      position: relative;
      .img-delete {
        position: absolute;
        right: 10rpx;
        top: 10rpx;
        @include wh(50rpx, 50rpx);
        background-color: #666;
        border-radius: 50%;
        text-align: center;
        line-height: 50rpx;
        .icon-lajitong {
          @include cs(#fff, 26rpx);
        }
      }
    }
  }
</style>
