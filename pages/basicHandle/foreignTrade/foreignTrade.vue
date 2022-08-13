<template>
	<view class="content">
		<view class="process">
      <view class="p-list">
        <view class="p-item active">
          <view class="p-num">1</view>
          <view class="p-text">法人信息</view>
        </view>
        <view class="p-item active">
          <view class="p-num">2</view>
          <view class="p-text">公司信息</view>
        </view>
        <view class="p-item">
          <view class="p-num">3</view>
          <view class="p-text">出资人信息</view>
        </view>
        <view class="p-line"></view>
      </view>
    </view>
    
    <view class="form" v-show="form1">
      <view class="form-section">
        <view class="form-item">
          <view class="label">法定代表人姓名</view>
          <view class="input">
            <input type="text" placeholder="请填写法定代表人" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">身份证号</view>
          <view class="input">
            <input type="text" placeholder="请填写身份证号" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">身份证有效日期</view>
          <view class="input">
            <picker mode="date" @change="bindDateChange">{{ formData.idcardDate ? formData.idcardDate : '请选择日期'}}</picker>
          </view>
          <view class="iconfont icon-xiajiantou"></view>
        </view>
        <view class="form-item">
          <view class="label">手机号码</view>
          <view class="input">
            <input type="text" placeholder="请填写手机号码" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">公司座机</view>
          <view class="input">
            <input type="text" placeholder="请填写公司座机" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">邮箱</view>
          <view class="input">
            <input type="text" placeholder="请填写邮箱" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">邮编</view>
          <view class="input">
            <input type="text" placeholder="请填写邮编" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">学历</view>
          <view class="input">
            <picker mode="selector" :range="educationArr" @change="educationChange">
              {{formData.education ? formData.education : '请选择学历'}}
            </picker>
          </view>
          <view class="iconfont icon-xiajiantou"></view>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn submit-btn">下一步</view>
      </view>
    </view>
    
    <view class="form" v-show="form2">
      <view class="form-section">
        <view class="form-item-pre">
          <view class="label">营业地址/住所(中文)</view>
          <view class="input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
        <view class="form-item-pre">
          <view class="label">营业地址/住所(英文)</view>
          <view class="input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
        <view class="form-item-pre">
          <view class="label">公司中文名称</view>
          <view class="input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
        <view class="form-item-pre">
          <view class="label">公司拟定英文名称<text style="font-size: 20rpx;color: #999;">（若空缺，则默认用拼音全称为英文名称）</text></view>
          <view class="input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
        <view class="form-item-pre">
          <view class="label">统一社会信用代码</view>
          <view class="input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn pre-btn">上一步</view>
        <view class="btn finish-btn">下一步</view>
      </view>
    </view>
    
    <view class="form" v-show="form3">
      <view class="form-section" v-for="(item,index) in formData.investor" :key="index">
        <view class="form-item">
          <view class="label">出资人{{index+1}}姓名</view>
          <view class="input">
            <input type="text" placeholder="请输入" v-model="item.name" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">出资人{{index+1}}身份证号</view>
          <view class="input">
            <input type="text" placeholder="请输入" v-model="item.idcard" />
          </view>
        </view>
        <view class="form-item">
          <view class="label">出资比例</view>
          <view class="input">
            <input type="text" placeholder="请输入" v-model="item.proportion" />
          </view>
          <view>%</view>
        </view>
        <view class="form-item">
          <view class="label">出资金额</view>
          <view class="input">
            <input type="text" placeholder="请输入" v-model="item.money" />
          </view>
          <view>万元</view>
        </view>
      </view>
      <view class="form-item form-item-other">
        <view class="add-btn" @click="addInvestor">
          <text class="iconfont icon-add"></text>
          <text>添加出资人信息</text>
        </view>
      </view>
      <view class="form-btn">
        <view class="btn pre-btn">上一步</view>
        <view class="btn finish-btn">提交</view>
      </view>
    </view>
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
          idcardDate: '',
          education: '',
          investor:[{
            name: '',
            idcard: '',
            proportion: '',
            money: ''
          }]
        },
        educationArr: ['专科','本科','研究生','硕士','博士','博士后'],
        form1: true,
        form2: false,
        form3: false,
        
			}
		},
		methods: {
			bindDateChange(e){
        this.formData.idcardDate = e.detail.value;
      },
      educationChange(e){
        this.formData.education = this.educationArr[e.detail.value];
      },
      addInvestor(){
        this.formData.investor.push({
          name: '',
          idcard: '',
          proportion: '',
          money: ''
        })
      }
		}
	}
</script>

<style scoped lang="scss">
  @import '../../../static/css/forms.scss';
  .process {
    background-color: #FFFFFF;
    width: 100%;
    padding: 30rpx 80rpx;
    margin-top: 10rpx;
    .p-list {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 1;
      .p-line {
        position: absolute;
        top: 20rpx;
        left: 62rpx;
        width: 454rpx;
        height: 0;
        border: 1px dashed #C7C7C7;
        z-index: -1;
      }
      .p-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #C7C7C7;
        &.active {
          color: #4795F2;
          .p-num {
            background-color: #4795F2;
          }
        }
        .p-num {
          @include wh(45rpx, 45rpx);
          background-color: #C7C7C7;
          border-radius: 50%;
          text-align: center;
          line-height: 45rpx;
          margin-bottom: 30rpx;
          @include cs(#fff, 30rpx);
        }
        .p-text {
          font-size: 24rpx;
        }
      }
    }
  }
</style>
