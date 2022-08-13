<template>
  <view class="content">
    <view class="body">
  <view class="text">
    <view class="name">电子IC卡操作员姓名</view>
    <view class="in">
      <input type="text" placeholder="请输入操作员姓名" />
    </view>
  </view>
 <view class="text">
    <view class="id">操作员身份证号</view>
   <view class="in">
     <input type="text" placeholder="请输入身份证号" />
   </view> 
  </view>
  <view class="text">
    <view class="tel">操作员手机号码</view>
   <view class="in">
     <input type="text" placeholder="请输入手机号码" />
   </view> 
  </view>
  <view class="text" >
    <view class="education">操作员学历<view class="iconfont icon-arrow-right"></view></view>
    
    <view class="in">
      <picker mode="selector" :range="educationArr" @change="educationChange">
        {{formData.education ? formData.education : '请选择学历'}}
     
      </picker>
         
    </view>
     
  </view>
  <view class="text">
    <view class="icaddress">电子IC卡邮寄地址</view>
    <view class="in">
      <view class="dz">
     <uni-data-picker
        class="area-picker"
        placeholder="请选择省/市/区"
        :localdata="area"
        @change="addressChange">
      </uni-data-picker>
      </view>
    </view>
  </view>
  <view class="text">
    <view class="address">详细地址</view>
  <view class="in">
    <view class="add">
    <input type="text" placeholder="填写详细地址，具体到门牌号" />
    </view>
  </view> 
  </view>
  <view class="text">
    <view class="contact">联系方式</view>
    <view class="in">
   <input type="text"  placeholder="请输入联系方式" /> 
   </view>
  </view>
  <view class="text">
    <view class="addressee">收件人<span>（姓名需填写操作员）</span></view>
   <view class="in">
     <input type="text" placeholder="请输入收件人姓名" />
   </view>
   </view>
   
     <button >提交</button>
   
  </view>
  </view>
  </view>
</template>

<script>
  import { area } from '../../../utils/address.js';
  // import { addCompany } from '../../../request/apis.js';
  // import { verifyEmail } from '../../../utils/validate.js';
  export default{
 data(){
   return{
     area,
     // formData:{
     //  education:'',
     //  areaText: '',
     //  operatorName:'',
     //  idNumber:'',
     //  contactTel:'',
     //  addreessDetail:'',
     //  contactway:'',
     //  addresseeName:''
     // },
   educationArr: ['专科','本科','研究生','硕士','博士','博士后'],
 }
  },
  methods:{
    toSubmit(){
      // if(!this.formData.operatorName){
      //   this.$utils.toast('操作员姓名必填.');
      //   return;
      // }
      // if(!this.formData.idNumber){
      //   this.$utils.toast('身份证号必填.');
      //   return;
      // }
      // if(!this.formData.contactTel){
      //   this.$utils.toast('手机号码必填.');
      //   return;
      // }
      // if(!this.formData.education){
      //   this.$utils.toast('请输入学历.');
      //   return;
      // }
      // if(!this.formData.areaText){
      //   this.$utils.toast('请输入邮寄地址.');
      //   return;
      // }
      // if(!this.formData.addreessDetail){
      //   this.$utils.toast('请输入详细地址.');
      //   return;
      // }
      // if(!this.formData.contactway){
      //   this.$utils.toast('联系方式必填.');
      //   return;
      // }
      //   if(!this.formData.addresseeName){
      //     this.$utils.toast('收件人姓名必填.');
      //     return;
      // }
      // uni.showModal({
      //   title: '提示',
      //   content: '确认提交？',
      //   success: (res) => {
      //     if(res.confirm){
      //       addCompany({
      //         czxingming: this.formData.operatorName,
      //         dizi: this.formData.areaText+this.formData.addreessDetail,
      //         id: this.formData.idNumber,
      //         xueli:this.formData.education,
      //         tel: this.formData.contactTel,
      //         addDetail: this.formData.addreessDetail,
      //         way: this.formData.contactway,
      //         addresseeName: this.formData.addresseeName
      //       }).then(res =>{
      //         this.$utils.toast('提交成功！');
      //         setTimeout(()=>{
      //           uni.navigateBack();
      //         },1500);
      //       });
      //     }else if(res.cancel){
      //       return;
      //     }
      //   }
      // })
      },
    // educationChange(e){
    //   this.formData.education = this.educationArr[e.detail.value];
    // },
    // addressChange(e) {
    //   const value = e.detail.value
    //   this.formData.areaText = value.map(item => { return item.text }).join('');
    // }
  }
  }
</script>

<style lang="scss" scoped>
  .content{
    background-color: #f6f6f6;
    .body{
      background-color: #FFFFFF;
      width: 750rpx;
      height: 785rpx;
      // line-height: 90rpx;
      margin-top: 20rpx;
    }
    .in{
      // width: 244rpx;
      // float: right;
      text-align: right;
      padding-left: 322rpx;
      // padding-right: 49rpx;
      margin-top: -44rpx;
      font-size: 30rpx;
      color: #999999;
      // border: none;
      // padding-right: 49rpx;
      // .uni-input-placeholder {
      // }
      .add{
        margin-left: -38rpx;
      }
      .dz{
        text-align: left;
        margin-left:-5rpx;
        padding-right:-7rpx;
        padding-left:40rpx;
        margin-bottom: 3rpx;
        // line-height: 23rpx;
      }
      
    }
    .icon-arrow-right{
      float: right;
    }
    .text{
      height: 98rpx;
      // float: left;
      border-bottom: 1px solid #EFEFEF;
      width: 710rpx;
      align-items: center;
      padding-left: 20rpx;
      padding-right: 20rpx;
      margin-left: 20rpx;
      padding-top: 29rpx;
      font-size: 30rpx;
      color: #333333;
      // line-height: 106rpx;
     
      span{
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #999999;
      }
    }
    .address span{
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #999999;
    }
    button{
      // position: fix;
      margin: 243rpx 35rpx 71rpx;
      width: 680rpx;
      height: 100rpx;
      // background: linear-gradient(90deg, #4080E6, #4FAAFF);
      background-color:#007AFF;
      border-radius: 10rpx;
      color: #FFFFFF;
      letter-spacing: 20rpx;
      font-size: 48rpx;
      // padding: 27rpx 284rpx;
      // padding-bottom: 10rpx;
      line-height: 90rpx;
      // padding-bottom: 10rpx;
    }
  }
  /deep/ .input-value-border {
    border: none!important;
  }
  /deep/ .input-value{
    line-height: 38rpx!important;
  }
  
</style>
