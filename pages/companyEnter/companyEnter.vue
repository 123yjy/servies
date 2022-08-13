<template>
  <view class="content">
    <view class="form">
      <view class="form-section">
        <view class="form-item">
          <view class="label">单位名称</view>
          <view class="input">
            <input type="text" v-model="formData.companyName" placeholder="请填写单位名称" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">通信地址</view>
          <view class="input">
            <uni-data-picker
              class="area-picker"
              placeholder="请选择省/市/区"
              :localdata="area"
              @change="addressChange">
            </uni-data-picker>
          </view>
        </view>
        <view class="form-item">
          <view class="label">详细地址</view>
          <view class="input">
            <input type="text" v-model="formData.addreessDetail" placeholder="请填写详细地址,具体到门牌号" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">联系人</view>
          <view class="input">
            <input type="text" v-model="formData.contacts" placeholder="请填写联系人姓名" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">联系电话</view>
          <view class="input">
            <input type="text" v-model="formData.contactTel" placeholder="请填写联系电话" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">职务</view>
          <view class="input">
            <input type="text" v-model="formData.position" placeholder="请填写职务名称" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">邮箱</view>
          <view class="input">
            <input type="text" v-model="formData.email" placeholder="请填写邮箱" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">传真</view>
          <view class="input">
            <input type="text" v-model="formData.fax" placeholder="请填写传真" />
          </view>
        </view>
      </view>
      <view class="form-section">
        <view class="form-item-pre">
          <view class="label">企业简介及对非合作说明</view>
          <textarea class="textarea" :maxlength="200" v-model="formData.explain" placeholder="请填写企业简介及对非合作说明" />
        </view>
        <view class="form-item-pre">
          <view class="label">企业年度预计业绩指标</view>
          <textarea class="textarea" :maxlength="200" v-model="formData.kpi" placeholder="请填写企业年度预计业绩指标" />
        </view>
        <view class="form-item-pre">
          <view class="label">企业需求</view>
          <textarea class="textarea" :maxlength="200" v-model="formData.needs" placeholder="请填写企业需求" />
        </view>
        <view class="form-item">
          <view class="label label-long">是否已提交合作方案或规划</view>
          <radio-group class="input" @change="radioChange">
            <label class="radio"><radio color="#4ea8fe" value="1" :checked="true"/>是</label>
            <label class="radio"><radio color="#4ea8fe" value="2" />否</label>
          </radio-group>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn submit-btn" @click="toSubmit">提交</view>
      </view>
    </view>
  </view>
</template>

<script>
  import { area } from '../../utils/address.js';
  import { addCompany } from '../../request/apis.js';
  import { verifyEmail } from '../../utils/validate.js';
  export default {
    data() {
      return {
        area,
        formData: {
          companyName: "",
          areaText: "",
          addreessDetail: "",
          contacts: "",
          contactTel: "",
          position: "",
          email: "",
          fax: "",
          explain: "",
          kpi: "",
          needs: "",
          isPlan: "1"
        }
      }
    },
    
    methods: {
      toSubmit(){
        if(!this.formData.companyName){
          this.$utils.toast('单位名称必填.');
          return;
        }
        if(!this.formData.areaText){
          this.$utils.toast('请选择通讯地址.');
          return;
        }
        if(!this.formData.addreessDetail){
          this.$utils.toast('详细地址必填.');
          return;
        }
        if(!this.formData.contacts){
          this.$utils.toast('联系人必填.');
          return;
        }
        if(!this.formData.contactTel){
          this.$utils.toast('联系电话必填.');
          return;
        }
        if(!this.formData.position){
          this.$utils.toast('职务必填.');
          return;
        }
        if(!this.formData.email){
          this.$utils.toast('邮箱必填.');
          return;
        }
        if(!verifyEmail(this.formData.email)){
          this.$utils.toast('邮箱格式不正确.');
          return;
        }
        if(!this.formData.fax){
          this.$utils.toast('传真必填.');
          return;
        }
        if(!this.formData.explain){
          this.$utils.toast('企业简介及对非合作说明必填.');
          return;
        }
        if(!this.formData.kpi){
          this.$utils.toast('企业年度预计业绩指标必填.');
          return;
        }
        if(!this.formData.needs){
          this.$utils.toast('企业需求必填.');
          return;
        }
        uni.showModal({
          title: '提示',
          content: '确认提交？',
          success: (res) => {
            if(res.confirm){
              addCompany({
                danwei: this.formData.companyName,
                dizi: this.formData.areaText+this.formData.addreessDetail,
                lianxiren: this.formData.contacts,
                tel: this.formData.phoneNumber,
                zhiwu: this.formData.position,
                chuanzhen: this.formData.fax,
                email: this.formData.email,
                shuoming: this.formData.explain,
                zhibiao: this.formData.kpi,
                xuqiu: this.formData.needs,
                guihua: this.formData.isPlan
              }).then(res =>{
                this.$utils.toast('提交成功！');
                setTimeout(()=>{
                  uni.navigateBack();
                },1500);
              });
            }else if(res.cancel){
              return;
            }
          }
        })
      },
      radioChange(e){
        let value = e.detail.value;
        this.formData.isPlan = value;
      },
      addressChange(e) {
        const value = e.detail.value
        this.formData.areaText = value.map(item => { return item.text }).join('');
      },
      onnodeclick(node) {
      },
      bindPickerChange(){
        
      }
    }
  }
</script>
<style>
  page {
    background-color: #F6F6F6;
  }
</style>
<style scoped lang="scss">
  @import '../../static/css/forms.scss';
</style>
