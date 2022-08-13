<template>
  <view class="content">
    <view class="form" v-show="form1">
      <view class="title">
        企业基本信息
      </view>
      <view class="text1">
        <view class="input">
          <view class="left1">企业名称</view>
          <view class="in">
            <input type="text" v-model="formData.companyName" placeholder="请输入企业申请名称" />
          </view>
        </view>
        <view class="input">
          <view class="left1">统一社会信用代码</view>
          <view class="in">
            <input type="text" v-model="formData.socialCode" placeholder="请输入统一社会信用代码" />
          </view>
        </view>
        <view class="input">
          <view class="left1">注册时间</view>
          <view class="in">
            <picker mode="date" @change="Regtime">{{ formData.registerDate ? formData.registerDate : '请选择日期'}}</picker>
          </view>
          <view class="iconfont icon-arrow-right"></view>
        </view>
        <view class="input">
          <view class="left1">注册资金</view>
          <view class="in">
            <input type="text" v-model="formData.registerMoney" placeholder="请输入金额" />
          </view>
          <view class="unit">万元</view>
        </view>
        <view class="input">
          <view class="left1">注册类型</view>
          <view class="in">
            <picker mode="selector" :range="CategoryArr" @change="CategoryChange">
              {{formData.registerType ? formData.registerType : '请选择注册类型'}}
            </picker>
          </view>
          <view class="iconfont icon-arrow-right"></view>
        </view>
        <view class="input">
          <view class="left1">法人代表</view>
          <view class="in">
            <input type="text" v-model="formData.legalMan" placeholder="请输入法人代表姓名" />
          </view>
        </view>
        <view class="input">
          <view class="left1">联系人</view>
          <view class="in">
            <input type="text" v-model="formData.contacts" placeholder="请输入联系人姓名" />
          </view>
        </view>
        <view class="input">
          <view class="left1">联系电话</view>
          <view class="in">
            <input type="text" v-model="formData.phoneNumber" placeholder="请输入联系电话" />
          </view>
        </view>
        <view class="input">
          <view class="left1">通讯地址</view>
          <view class="in">
            <view class="dz" v-model="formData.address">
              <uni-data-picker class="area-picker" placeholder="请选择省/市/区" :localdata="area" @change="addressChange">
              </uni-data-picker>
            </view>
          </view>
        </view>
        <view class="input">
          <view class="left1">详细地址</view>
          <view class="in">
            <input type="text" v-model="formData.address" placeholder="填写详细地址，具体到门牌号" />
          </view>
        </view>
      </view>
      <view class="title">
        企业最近三年的出口额
      </view>
      <view class="text2">
        <view class="input">
          <view class="left1" >2020年出口额</view>
          <view class="in">
            <input type="text" v-model="formData.exportSum[0].money" placeholder="请输入金额" />
          </view>
          <view class="unit">万元</view>
        </view>
        <view class="input">
          <view class="left1">出口国家（或地区）</view>
          <view class="in">
            <input type="text" v-model="formData.exportRegion[0].region" placeholder="请输入地址" />
          </view>
        </view>
        <view class="input">
          <view class="left1">商品种类</view>
          <view class="in">
            <input type="text" v-model="formData.goodsType[0].type" placeholder="请输入商品种类" />
          </view>
        </view>
      </view>
      <view class="text3">
        <view class="input">
          <view class="left1">2019年出口额</view>
          <view class="in">
            <input type="text" v-model="formData.exportSum[1].money" placeholder="请输入金额" />
          </view>
          <view class="unit">万元</view>
        </view>
        <view class="input">
          <view class="left1">出口国家（或地区）</view>
          <view class="in">
            <input type="text" v-model="formData.exportRegion[1].region" placeholder="请输入地址" />
          </view>
        </view>
        <view class="input">
          <view class="left1">商品种类</view>
          <view class="in">
            <input type="text" v-model="formData.goodsType[1].type" placeholder="请输入商品种类" />
          </view>
        </view>
      </view>
      <view class="text4">
        <view class="input">
          <view class="left1">2018年出口额</view>
          <view class="in">
            <input type="text" v-model="formData.exportSum[2].money" placeholder="请输入金额" />
          </view>
          <view class="unit">万元</view>
        </view>
        <view class="input">
          <view class="left1">出口国家（或地区）</view>
          <view class="in">
            <input type="text" v-model="formData.exportRegion[2].region" placeholder="请输入地址" />
          </view>
        </view>
        <view class="input">
          <view class="left1">商品种类</view>
          <view class="in">
            <input type="text" v-model="formData.goodsType[2].type" placeholder="请输入商品种类" />
          </view>
        </view>
      </view>
      <view class="btn" @click="nextbtn">
        <button>下一步</button>
      </view>
    </view>
    <view class="form" v-show="form2">
      <view class="title3">企业融资需求意向</view>
      <view class="body1">
        <view class="inp">
          <view class="left">本次资金需求总额</view>
          <view class="in">
            <input type="text" v-model="formData.needMoeny" placeholder="请输入金额" />
          </view>
          <view class="unit1">万元</view>
        </view>
        <view class="inp">
          <view class="left">贷款期限</view>
          <view class="in">
            <input type="text" v-model="formData.loanRerm" placeholder="请输入贷款期限" />
          </view>
        </view>
        <view class="inp">
          <view class="left">以往贷款银行</view>
          <view class="in">
            <input type="text" v-model="formData.loanBank" placeholder="请输入以往贷款银行" />
          </view>
        </view>
        <view class="inp">
          <view class="left">企业自由流动资金</view>
          <view class="in">
            <input type="text" v-model="formData.flowMoney" placeholder="请输入金额" />
          </view>
          <view class="unit1">万元</view>
        </view>
        <view class="inp">
          <view class="left">本次出口商品品种</view>
          <view class="in">
            <input type="text" v-model="formData.goodsKind" placeholder="请输入商品品种" />
          </view>

        </view>
        <view style="display: none;">
          <view class="inp">
            <view class="left">商品离岸时间</view>

            <view class="in">
              <picker mode="date" @change="bindDateChange">{{ formData.comeGoDate ? formData.comeGoDate : '请选择日期'}}
              </picker>
            </view>
            <view class="iconfont icon-arrow-right"></view>
          </view>
        </view>

        <view class="inp">
          <view class="left">商品到岸时间</view>

          <view class="in">
            <picker mode="date" @change="bindDateChange">{{ formData.comeGoDate ? formData.comeGoDate : '请选择日期'}}
            </picker>
          </view>

          <view class="iconfont icon-arrow-right"></view>
        </view>

        <view class="end" v-model="formData.transportWay">
          <view class="left">运输方式</view>
          <view class="uni-list" @click="clic">
            <checkbox-group @change="checkboxChange">
              <label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in items" :key="item.value">
                <view style="display: none;">
                  <checkbox :value="item.value" :checked="item.checked" />
                </view>
                <view class="small" :class="{'active': activeWay.indexOf(item.value) !== -1}">{{item.name}}</view>
                <!-- <view class="small" style="" v-else>{{item.name}}</view> -->
              </label>
            </checkbox-group>
            <view class="small" @click="addway">+</view>

          </view>
          <view>
          </view>
        </view>

      </view>
      <view class="window" v-show="transport">
        <input type="text" placeholder="请输入运输方式" />
      </view>
      <view class="body2">
        <view class="btn1" @click="prebtn">
          <button>上一步</button>
        </view>
        <view class="btn2">
          <button @click="toSubmit">提交</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    area
  } from '../../utils/address.js';
  import {
    addFinance
  } from '../../request/apis.js';
  export default {
    data() {
      return {
        CategoryArr: ['融资租赁', '银行承兑汇票', '不动产抵押', '股权转让', '提货担保'],
        activeWay: [],
        // title: 'checkbox 复选框',
        show: true,
        transport:false,
        items: [{
            value: '空运',
            name: '空运',
          },
          {
            value: '水运',
            name: '水运',
            // checked: 'true'
          },
          {
            value: '铁路运输',
            name: '铁路运输'
          },
          {
            value: '公路运输',
            name: '公路运输'
          },
          {
            value: '管道运输',
            name: '管道运输'
          },
          {
            value: '人工运输',
            name: '人工运输'
          },
         
        ],
        exportSum:
        [
         {
            year: "2020",
            money: ""
         },{
            year: "2019",
            money: ""
         },{
            year: "2018",
            money: ""
         }
        ],
        exportRegion:
        [
         {
            region:""
         },{
            region:""
         },{
            region:""
         }
        ],
        goodsType:
        [
         {
           type:""
         },{
           type:""
         },{
           type:""
         }
        ],
        area,
        formData: {
          companyName: '',
          socialCode: '',
          registerDate: '',
          registerMoney: '',
          registerType: '',
          legalMan: '',
          contacts: '',
          phoneNumber: '',
          address: '',
          needMoeny: '',
          loanRerm: '',
          loanBank: '',
          flowMoney: '',
          goodsKind: '',
          comeGoDate: '',
          transportWay: '',
          exportSum:
           [
         {
            year: "2020",
            money: ""
         },{
            year: "2019",
            money: ""
         },{
            year: "2018",
            money: ""
         }
            ],
          exportRegion:
           [
         {
            region:""
         },{
            region:""
         },{
            region:""
         }
        ],
          goodsType: [
         {
            type:""
         },{
            type:""
         },{
            type:""
         }
        ],
        
        },
        form1: false,
        form2: true,
      }
    },
    methods: {
      
      
      addway() {
        this.transport=true;
        // this.transportWay.push({
        //   name: ""
        // });
        for (let i = 0; i < this.items.length; i++) {
          if (!this. items[i].name) {
            // this.$utils.toast('备选字号' + (i + 1) + '必填.');
            return;
          }
        }
      },
      CategoryChange(e) {
        this.formData.registerType = this.CategoryArr[e.detail.value];
      },
      clic() {
        this.show = !this.show;
      },
      checkboxChange: function(e) {
        var items = this.items,
          values = e.detail.value;
        this.activeWay = values;
        for (var i = 0, lenI = items.length; i < lenI; ++i) {
          const item = items[i]
          if (values.includes(item.value)) {
            this.$set(item, 'checked', true)
          } else {
            this.$set(item, 'checked', false)
          }
        }
      },
      Regtime(e) {
        this.formData.registerDate = e.detail.value;
      },
      bindDateChange(e) {
        this.formData.comeGoDate = e.detail.value;
      },
      clic() {
        true;
      },
      prebtn() {
        this.form1 = true;
        this.form2 = false;
      },
      nextbtn() {
      console.log(this.formData.exportSum[0].money);
        if (!this.formData.companyName) {
          this.$utils.toast('企业名称必填.');
          return;
        }
        if (!this.formData.socialCode) {
          this.$utils.toast('请输入统一社会信用代码.');
          return;
        }
        if (!this.formData.registerDate) {
          this.$utils.toast('请输入注册时间.');
          return;
        }
        if (!this.formData.registerMoney) {
          this.$utils.toast('请输入注册资金.');
          return;
        }
        if (!this.formData.registerType) {
          this.$utils.toast('请选择注册类型.');
          return;
        }
        if (!this.formData.legalMan) {
          this.$utils.toast('请输入法人代表姓名.');
          return;
        }
        if (!this.formData.contacts) {
          this.$utils.toast('请输入联系人姓名.');
          return;
        }
        if (!this.formData.phoneNumber) {
          this.$utils.toast('请输入联系电话.');
          return;
        }
        if (!this.formData.address) {
          this.$utils.toast('请输入通讯地址或详细地址.');
          return;
        }
        // console.log(this.formData.exportSum);
        if (!this.formData.exportSum[0].money) {
          this.$utils.toast('请输入2020年出口额.');
          return;
        }
        if (!this.formData.exportSum[1].money) {
          this.$utils.toast('请输入2019年出口额.');
          return;
        }
        if (!this.formData.exportSum[2].money) {
          this.$utils.toast('请输入2018年出口额.');
          return;
        }
        
        if (!this.formData.exportRegion[0].region) {
          this.$utils.toast('请输入2020年出口国家（或地区）.');
          return;
        }
        if (!this.formData.exportRegion[1].region) {
          this.$utils.toast('请输入2019年出口国家（或地区）.');
          return;
        }
        if (!this.formData.exportRegion[2].region) {
          this.$utils.toast('请输入2018年出口国家（或地区）.');
          return;
        }
        if (!this.formData.goodsType[0].type) {
          this.$utils.toast('请输入2020年商品种类.');
          return;
        }
        if (!this.formData.goodsType[1].type) {
          this.$utils.toast('请输入2019年商品种类.');
          return;
        }
        if (!this.formData.goodsType[2].type) {
          this.$utils.toast('请输入2018年商品种类.');
          return;
        }
        this.form1 = false;
        this.form2 = true;
      },
      toSubmit() {
       
        let a = this.activeWay.join(",");
        console.log(a);
        if (!this.formData.needMoeny) {
          this.$utils.toast('资金需求总额必填.');
          return;
        }
        if (!this.formData.loanRerm) {
          this.$utils.toast('贷款期限必填.');
          return;
        }
        if (!this.formData.loanBank) {
          this.$utils.toast('以往贷款银行必填.');
          return;
        }
        if (!this.formData.flowMoney) {
          this.$utils.toast('请输入企业自由流动资金.');
          return;
        }
        if (!this.formData.goodsKind) {
          this.$utils.toast('请选择本次出口商品品种.');
          return;
        }
        if (!this.formData.comeGoDate) {
          this.$utils.toast('请输入商品到岸时间.');
          return;
        }
        if (!this.activeWay) {
          this.$utils.toast('请选择运输方式.');
          return;
        }
        // console.log(this.activeWay);


        uni.showModal({
          title: '提示',
          content: '确认提交？',
          success: (res) => {
            if (res.confirm) {
              addFinance({
                name: this.formData.companyName,
                xinyong_code: this.formData.socialCode,
                register_time: this.formData.registerDate,
                register_zj: this.formData.registerMoney,
                register_type: this.formData.registerType,
                faren: this.formData.legalMan,
                lianxiren: this.formData.contacts,
                tel: this.formData.phoneNumber,
                dizi: this.formData.address,
                yewufanwei: this.formData.businessScope,
                threeyears_exportvolume: this.formData.exportSum,
                threeyears_guojiaordiqu: this.formData.exportRegion.map(item => {
                  return item.region
                }).join(","),
                threeyears_goodstype: this.formData.goodsType.map(item => {
                  return item.type
                }).join(","),
                xuqiu_jine: this.formData.needMoeny,
                daikuan_qixian: this.formData.loanRerm,
                daikuan_yinhang: this.formData.loanBank,
                liudong_zijin: this.formData.flowMoney,
                goods_type: this.formData.goodsKind,
                daoan_time: this.formData.comeGoDate,
                yunshu_fangshi: this.activeWay
              }).then(res => {
                this.$utils.toast('提交成功！');
                setTimeout(() => {
                  uni.navigateBack();
                }, 1500);
              });
            } else if (res.cancel) {
              return;
            }
          }
        })
      },
      addressChange(e) {
        const value = e.detail.value
        this.formData.areaText = value.map(item => {
          return item.text
        }).join('');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../static/css/jinrong.scss';

  .content {
    background-color: #f0f0f0;

    .title {
      color: #999999;
      font-size: 36rpx;
      padding: 35rpx 364rpx 36rpx 23rpx;
      // display: flex;
    }

    .input {
      border-bottom: 1px solid #EFEFEF;
      // align-items: center;
      // padding-left: 20rpx;
      display: flex;
      width: 710rpx;

      // text-align: right;
      .unit {
        flex: 0.2;
        padding-top: 31rpx;
        font-size: 30rpx;
        color: #333333;
        margin-left: -19rpx;
      }

      .icon-arrow-right {
        // flex: 1;
        margin-top: 34rpx;
        margin-right: 37rpx;
      }

      .in {
        color: #999999;
        font-size: 30rpx;
        text-align: right;
        flex: 1;
        padding-top: 29rpx;
        // padding-right: 20rpx;
        width: 401rpx;
        margin-right: 28rpx;
        float: right;

        .dz {
          text-align: left;
          width: 368rpx;
          float: right;
          // padding-left: 52rpx;
          padding-right: 79rpx;
          margin-right: -104rpx;
          // flex: 1;
          // padding-top:29rpx;
          // line-height: 21rpx;
          // flex: 1;
        }
      }
    }


    .left1 {
      // padding-left: 36rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: bold;
      padding-top: 29rpx;
      padding-bottom: 29rpx;
    }



    .text1 {
      width: 750rpx;
      height: 981rpx;
      background: #FFFFFF;
      padding: 0rpx 331rpx 31rpx 35rpx;
      // display: flex;
    }

    .text2 {
      width: 750rpx;
      height: 286rpx;
      background: #FFFFFF;
      padding: 0rpx 331rpx 31rpx 35rpx;
      margin-bottom: 8rpx;
      // display: flex;
    }

    .text3 {
      width: 750rpx;
      height: 286rpx;
      background: #FFFFFF;
      padding: 0rpx 331rpx 31rpx 35rpx;
      margin-bottom: 8rpx;
      // display: flex;
    }

    .text4 {
      width: 750rpx;
      height: 325rpx;
      background: #FFFFFF;
      padding: 30rpx 331rpx 31rpx 35rpx;

      // display: flex;
    }




    button {
      width: 680rpx;
      height: 100rpx;
      background: linear-gradient(90deg, #4080E6, #4FAAFF);
      border-radius: 10px;
      margin: 50rpx 32rpx 52rpx 38rpx;
      color: #ffffff;
      letter-spacing: 20rpx;
    }
  }

  /deep/ .input-value-border {
    border: none !important;
  }

  /deep/ .input-value {
    line-height: 42rpx !important;
  }

  .active {
    color: #ffffff !important;
    background: linear-gradient(90deg, #4080E6, #4FAAFF);
  }
</style>
