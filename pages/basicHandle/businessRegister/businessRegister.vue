<template>
  <view class="content">
    <view class="form" v-show="form1">
      <view class="form-section">
        <view class="form-item">
          <view class="label">企业申请名称</view>
          <view class="input">
            <input type="text" v-model="formData.name" placeholder="请填写企业申请名称" />
          </view>
        </view>
        <view class="form-item" v-for="(item, index) in options" :key="index">
          <view class="label">备选字号{{index+1}}</view>
          <view class="input">
            <input type="text" v-model="item.name" placeholder="请填写备选字号" />
          </view>
          <view class="iconfont icon-lajitong" @click="toDelOption(index)"></view>
        </view>
        <view class="form-item form-item-other">
          <view class="add-btn" @click="toAddOption">
            <text class="iconfont icon-add"></text>
            <text>新增备选字号</text>
          </view>
        </view>
        <view class="form-item">
          <view class="label">注册资本</view>
          <view class="input">
            <input type="text" v-model="formData.fund" placeholder="请填写注册资本" />
          </view>
          <view>万元</view>
        </view>
        <view class="form-item">
          <view class="label">注册地址</view>
          <view class="input">
            <uni-data-picker class="area-picker" placeholder="请选择省/市/区" :localdata="area" @change="addressChange">
            </uni-data-picker>
          </view>
        </view>
        <view class="form-item">
          <view class="label">详细地址</view>
          <view class="input">
            <input type="text" v-model="formData.addressDetail" placeholder="请填写详细地址,具体到门牌号" />
          </view>
        </view>
        <view class="form-item-pre">
          <view class="label">经营范围</view>
          <textarea class="textarea" :maxlength="200" v-model="formData.scope" placeholder="请填写经营范围" />
        </view>
      </view>
      <view class="small-title">公司职位</view>
      <view class="form-section">
        <view class="form-item">
          <view class="label">法定代表人</view>
          <view class="input">
            <input type="text" v-model="formData.boss" placeholder="请填写法定代表人姓名" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">执行董事</view>
          <view class="input">
            <input type="text" v-model="formData.executor" placeholder="请填写执行董事姓名" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">经理</view>
          <view class="input">
            <input type="text" v-model="formData.manager" placeholder="请填写经理姓名" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">监事</view>
          <view class="input">
            <input type="text" v-model="formData.supervisor" placeholder="请填写监事姓名" />
          </view>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn submit-btn" @click="nextStep">下一步</view>
      </view>
    </view>
    <view class="form" v-show="form2">
      <view class="small-title">公司职位</view>
      <view class="form-section" v-for="(item,index) in formData.holder" :key="index">
        <uni-swipe-action>
          <uni-swipe-action-item :right-options="swiperOptions" @click="toDeleteHolder(index,$event)">
            <view class="form-item">
              <view class="label">股东姓名{{index+1}}</view>
              <view class="input">
                <input type="text" v-model="item.name" placeholder="请填写股东姓名" />
              </view>
            </view>
            <view class="form-item">
              <view class="label">联系方式{{index+1}}</view>
              <view class="input">
                <input type="text" v-model="item.tel" placeholder="请填写联系方式" />
              </view>
            </view>
            <view class="form-item">
              <view class="label">股权比例{{index+1}}</view>
              <view class="input">
                <input type="text" v-model="item.stock" placeholder="请填写股权比例" />
              </view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view class="form-section">
        <view class="form-item form-item-other">
          <view class="add-btn" @click="toAddHolder">
            <text class="iconfont icon-add"></text>
            <text>新增股东</text>
          </view>
        </view>
      </view>

      <view class="small-title">公司职位及联系</view>
      <view class="form-section">
        <view class="form-item">
          <view class="label">财务负责人</view>
          <view class="input">
            <input type="text" v-model="formData.finance" placeholder="请填写财务负责人" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">电话号码</view>
          <view class="input">
            <input type="text" v-model="formData.fTel" placeholder="请填写财务负责人电话号码" />
          </view>
        </view>
      </view>
      <view class="form-section">
        <view class="form-item">
          <view class="label">联络员</view>
          <view class="input">
            <input type="text" v-model="formData.liaisonMan" placeholder="请填写联络员" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">微信号</view>
          <view class="input">
            <input type="text" v-model="formData.lWeixin" placeholder="请填写微信号" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">邮箱</view>
          <view class="input">
            <input type="text" v-model="formData.lEmail" placeholder="请填写邮箱" />
          </view>
        </view>
      </view>
      <view class="form-section">
        <view class="form-item-pre">
          <view class="label">上传身份证正反照</view>
          <view class="upload-box flex-space-between">
            <file-upload fieldName="idcardFront" :fileUrl="formData.idcardFront" @fileChange="fileChange">
              <template v-slot:tips-text>添加身份证正面照片</template>
            </file-upload>
            <file-upload fieldName="idcardBehind" :fileUrl="formData.idcardBehind" @fileChange="fileChange">
              <template v-slot:tips-text>添加身份证反面照片</template>
            </file-upload>
          </view>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn pre-btn" @click="preStep">上一步</view>
        <view class="btn finish-btn" @click="toSubmit">提交</view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    area
  } from '../../../utils/address.js';
  import {
    addBusiness
  } from '../../../request/apis.js';
  import fileUpload from '../../../components/fileUpload.vue';
  export default {
    components:{ fileUpload },
    data() {
      return {
        swiperOptions:[
          {
            text: '删除',
            style: {
              backgroundColor: '#dd524d'
            }
          }
        ],
        area,
        options: [{
          name: ""
        }],
        formData: {
          name: "",
          fund: "",
          areaText: "",
          addressDetail: "",
          scope: "",
          boss: "",
          executor: "",
          manager: "",
          supervisor: "",

          holder: [{
            name: "",
            tel: "",
            stock: ""
          }],

          finance: "",
          fTel: "",
          liaisonMan: "",
          lWeixin: "",
          lEmail: "",
          
          idcardFront: '',   //身份证正面
          idcardBehind: '',  //身份证反面
        },
        form1: false,
        form2: true,
      }
    },

    methods: {
      fileChange(fileName, fileUrl){
        this.formData[fileName] = fileUrl;
      },
      toDeleteHolder(index,e){
        if(index == 0) return;
        this.formData.holder.splice(index,1);
      },
      toAddHolder() {
        this.formData.holder.push({
          name: "",
          tel: "",
          stock: ""
        })
      },
      preStep() {
        this.form1 = true;
        this.form2 = false;
      },
      nextStep() {
        if (!this.formData.name) {
          this.$utils.toast('企业申请名称必填.');
          return;
        }
        for (let i = 0; i < this.options.length; i++) {
          if (!this.options[i].name) {
            this.$utils.toast('备选字号' + (i + 1) + '必填.');
            return;
          }
        }
        if (!this.formData.fund) {
          this.$utils.toast('注册资本必填');
          return;
        }
        if (!this.formData.areaText) {
          this.$utils.toast('请选择注册地址');
          return;
        }
        if (!this.formData.addressDetail) {
          this.$utils.toast('注册详细地址必填');
          return;
        }
        if (!this.formData.scope) {
          this.$utils.toast('经营范围必填');
          return;
        }
        if (!this.formData.boss) {
          this.$utils.toast('法定代表人必填');
          return;
        }
        if (!this.formData.executor) {
          this.$utils.toast('执行董事必填');
          return;
        }
        if (!this.formData.manager) {
          this.$utils.toast('经理必填');
          return;
        }
        if (!this.formData.supervisor) {
          this.$utils.toast('监事必填');
          return;
        }

        this.form1 = false;
        this.form2 = true;
      },
      toSubmit() {
        for (let i = 0; i < this.formData.holder.length; i++) {
          if (!this.formData.holder[i].name) {
            this.$utils.toast('股东姓名' + (i + 1) + '必填.');
            return;
          }
          if (!this.formData.holder[i].tel) {
            this.$utils.toast('联系方式' + (i + 1) + '必填.');
            return;
          }
          if (!this.formData.holder[i].stock) {
            this.$utils.toast('股权比例' + (i + 1) + '必填.');
            return;
          }
        }
        if (!this.formData.finance) {
          this.$utils.toast('财务负责人必填.');
          return;
        }
        if (!this.formData.fTel) {
          this.$utils.toast('财务负责人电话号码必填.');
          return;
        }
        if (!this.formData.liaisonMan) {
          this.$utils.toast('联络员必填.');
          return;
        }
        if (!this.formData.lWeixin) {
          this.$utils.toast('联络员微信号必填.');
          return;
        }
        if (!this.formData.lEmail) {
          this.$utils.toast('联络员邮箱必填.');
          return;
        }
        if(!this.formData.idcardFront){
          this.$utils.toast('请上传身份证正面照片');
          return;
        }
        if(!this.formData.idcardBehind){
          this.$utils.toast('请上传身份证反面照片');
          return;
        }
        
        addBusiness({
          enterprise_name: this.formData.name,
          alternative: this.options.map(item => { return item.name }).join('|'),
          registered_capital: this.formData.fund,
          registered_address: this.formData.areaText+this.formData.addressDetail,
          experience_range: this.formData.scope,
          legal_representative: this.formData.boss,
          manager: this.formData.manager,
          director: this.formData.executor,
          supervisor: this.formData.supervisor,
          
          shareholder: JSON.stringify(this.formData.holder),
          financial_director: this.formData.finance,
          financial_phone: this.formData.fTel,
          
          contact_person: this.formData.liaisonMan,
          wechat_number: this.formData.lWeixin,
          zip_code: this.formData.lEmail,
          identity_negative: this.formData.idcardFront,
          identity_positive: this.formData.idcardBehind
        }).then(res => {
          this.$utils.toast('提交成功');
          setTimeout(()=>{
            uni.navigateBack();
          },1500);
        })
      },
      toDelOption(index) {
        this.options.splice(index, 1);
      },
      toAddOption() {
        this.options.push({
          name: ""
        });
      },
      radioChange(e) {
        let value = e.detail.value;
        console.log(value);
      },
      addressChange(e) {
        const value = e.detail.value
        this.formData.areaText = value.map(item => {
          return item.text
        }).join('');
      },
    }
  }
</script>
<style>
  page {
    background-color: #F6F6F6;
  }
</style>
<style scoped lang="scss">
  @import '../../../static/css/forms.scss';

  .content {
    .icon-lajitong {
      @include cs(#666, 37rpx);
    }
  }
  .upload-box {
    margin-top: 20rpx;
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
  }
</style>
