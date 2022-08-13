<template>
  <view class="content">
    <view class="icon">
      <view class="iconfont icon-jiqiren"></view>
    </view>
        <view class="one">
              <view class="text" @click="clic()">欢迎咨询,您可以先关注以下问题列表是否有您想要咨询的问题,可以直接点击哦~</view>
            </view>
            <view class="two">
                  <view class="text1" @click="clic1()">我想咨询【法律政策】的问题<view class="iconfont icon-xiajiantou" v-if="show1" ></view>
                  <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
                  
                  <view class="drop" v-show="ok1">
                   
                  </view>
                  </view>
                  <view class="text2" @click="clic2()">我想咨询【人才和知识产权】的问题<view class="iconfont icon-xiajiantou" v-if="show2"></view>
                        <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
                        <view class="drop" v-show="ok2">
                          <pre>
                            <view>（一）知识产权公共服务站提供哪些服务呢？</view>
                            <view>1、专利业务</view>
                            <view>国内外专利申请（发明、实用新型、外观设计、PCT）</view>	
                            <view>答复发明专利审查意见、专利复审与无效</view>	
                            <view>现有技术检错及专利性分析</view>	
                            <view>专利检索、预警、侵权分析</view>
                            <view>专利事务的全面管理咨询服务</view>
                            <view>专利许可与转让</view>
                            
                           <view> 2、商标业务</view>
                           <view>	商标检索及申请可行性分析</view>
                           <view>	国内外商标申请和续展</view>
                           <view>	商标异议、评审和行政诉讼</view>
                           <view>	商标许可与转让</view>
                            
                           <view> 3、项目申报</view>
                           <view>	高新技术企业培育及认定</view>
                           <view>	企业技术中心、工程技术中心申报</view>
                           <view>省市科技计划申报</view>
                           <view>	制造强省专项资金申报</view>
                           <view>	移动互联网项目申报</view>
                           <view>	省市知识产权项目申报</view>
                    
                           <view> 4、其他业务</view>
                           <view>	软件著作权和版权登记、许可及转让</view>
                           <view>	知识产权海关案备</view>
                           <view>	知识产权运营</view>
                           <view>	知识产权诉讼</view>
                  
                          </pre>
                        </view>
                        </view>
                      
                        <view class="text3" @click="clic3()">我想咨询【融资担保】的问题<view class="iconfont icon-xiajiantou" v-if="show3"></view>
                        <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
                        <view class="drop" v-show="ok3">
                          <pre>
                            问题一<br>
                            融资担保的意义<br>
                            答：实现管委会对园区企业服务的制度创新，为园区企业解<br>
                            决融资难、融资成本高以及企业经营活动中各种风险损失，<br>
                            实现风险转移，确保企业的经营效益。<br>
                            
                            问题二<br>
                            有融资需求怎么申请？<br>
                            答：填写好企业融资需求意向调查表以后，我们会在三个工作日内上门进行一对一服务。<br>
                            
                            问题三<br>
                            申请融资担保的流程是怎么样的？<br>
                            答：详见服务流程图<br>
                            
                            问题四<br>
                            融资需要多少时间？<br>
                            答：融资的时间需要根据企业的具体情况来确定，填写好企业融资需求意向调查表以后我们会上门进行一对一的服务，服务流程请参考服务流程图及担保业务办理流程图。
                  
                          </pre>
                        </view>
                        </view>
                        <view class="text4" @click="clic4()">我想咨询【一般贸易代理进出口】的问题<view class="iconfont icon-xiajiantou" v-if="show4"></view>
                        <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
                        <view class="drop" v-show="ok4">
                          <pre>
                            问题1：外贸业务代理出口的流程是怎么样的？<br>
                            一般贸易出口：<br>
                            （一）委托人与国外客户达成销售订单；<br>
                            （二）委托人与国内供应商（工厂）签订的需要其履行的采购合同；<br>
                            （三）委托人（实际进出口方）与外贸代理公司签订代理合同，用以办理收汇、货物申报及退税；<br>
                            （三）国外客户汇款（美元）到代理公司账户；<br>
                            （四）代理公司向银行报备并申请结汇；<br>
                            （五）代理公司将结汇人民币转到委托人指定国内工厂账户，这个账户要和将来开具增值税发票的账户一致；如有多家工厂，可分别支付；<br>
                            （六）生产备货完成，由国内工厂开具增值税发票给代理公司；如（五）中款项转到多家工厂，发票要由对应收取款项的工厂分别开具；<br>
                            （七）委托人发出货明细及详细包装资料给代理公司；准备相应单证；<br>
                            （八）代理公司向物流公司订舱并发送出口订舱委托书，安排货物出运及保险事宜，物流相关费用及支付方式由委托人自行与物流公司商订；<br>
                            （九）货物装运及申报出口；<br>
                            （十）货物结关，申请出口退税<br>
                            一般贸易进口：<br>
                            （一）委托人与国外客户达成采购订单；<br>
                            （二）委托人（实际进出口方）与外贸代理公司签订代理合同，用以办理货物付汇、申报；<br>
                            （三）代理公司汇款到国外客户（供方）账户；<br>
                            （四）国外客户（供方）备货；<br>
                            （五）如涉及官方原产地证明、检疫证明、卫生证明及其他特殊监管要求的证件，提前做好相应的备案等手续；<br>
                            （六）单证资料准备及货物运输订舱、保险安排；<br>
                            （七）货物装运及国外出口申报；<br>
                            （八）货物到港，申报进口、缴纳进口环节税费；检验检疫；<br>
                            （十）货物放行，提取货物<br>
                            
                            问题2：怎么收取进出口业务代理费？<br>
                            一般贸易：<br>
                            （一）市场商户，按进出口额0.5%收取，且每票最少收费600元。<br>
                            （二）市场外商户，按进出口额0.8%收取，且每票最少收费1000元。<br>
                            *进出口环节涉及其他费用根据实际产生的费用收取或双方协定收取
                  
                          </pre>
                        </view>
                        </view>
                        <view class="text5" @click="clic5()">我想咨询【政务服务】的问题<view class="iconfont icon-xiajiantou" v-if="show5"></view>
                        <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
                        <view class="drop" v-show="ok5">
                          <pre>
                            1请问高桥设立的政务服务中心能提供什么服务？<br>
                            答：我们能为企业商户提供工商注册、对外贸易经营者备案、税务咨询服务、海关收发货人备案、外汇名录登记、电子口岸IC卡办理等一站式外贸政务代办服务。
                            <br>
                            2、工商注册需要提供哪些内容？<br>
                            答：<br>1 公司名称 (长沙市+字号+行业+有限公司)<br>2 法人及全体股东身份证信息 (身份证姓名、地址、身份证号码）<br>3 法人及全体股东个人U盾 (U盾作为网上电子签名使用)<br>4 注册资本 (可以认缴或者实收)<br>5 股东出资比例 <br>6 经营范围<br> 7 注册地址。
                            <br>
                            3、对外贸易经营者备案办理准备哪些资料？<br>
                            答：提供营业执照副本原件、公章、法人身份证复印件、法人章，企业电话、邮箱、英文名称。
                            <br>
                            4、已在海关备案但尚未提供统一社会信用代码的企业需要办理进出口货物收发货人备案变更吗？<br>
                            答：已在市场监督管理部门办理统一社会信用代码变更的企业，或尚未在海关备案统一社会信用代码的企业，需及时向注册地海关申请办理统一社会信用代码变更或备案手续，以免影响后续海关进出口业务的办理。
                            <br>
                            5、企业办理进出口收发货人备案的有效期是多久？<br>
                            答：《中华人民共和国海关报关单位注册登记证书》长期有效。进出口货物收发货人应当在每年6月30日前向注册地海关提交《报关单位注册信息年度报告》。
                            <br>
                            6企业工商营业执照上的地址和实际经营地址不一样怎么办？<br><br>
                            答：将实际经营地址填写在“其他经营地址”。<br>
                            
                            7办理进出口权需要满足的前提条件？<br>
                            答：公司营业执照经营范围必须要有：从事货物及技术的进出口业务，方可申请进出口权。<br>
                            
                            8进出口权办理流程有哪些？<br>
                            答：<br>1、商务局备案<br>2、海关备案<br>3、外管局备案<br>4、电子口岸办理法人卡、需要提供的材料如下：执照、公章、法人股东身份证、英文名，英文地址、公司电话、邮箱。<br>办理后可以拿到的材料如下：1、对外经营者备案表<br>2、海关备案回执<br>3、外管局名录登记<br>4、法人卡、操作员卡
                            <br>
                            9、政务服务中心联咨询电话是多少？<br>
                            答：0731-85711798 工作时间：周一至周六（夏令时）8:30-6:00（冬令时）9:00-17:30
                            <br>
                            10、一站式税务咨询服务包含哪些内容？咨询电话是多少？<br>
                            答：包括办理税务登记、增值税一般纳税人登记、发票票种核定、发票邮寄<br>
                            税费申报等，税务服务咨询热线是0731-*******<br>
                            税务窗口可以提供的服务项目：新办纳税人基础信息报告；发票类业务；纳税（缴费）申报；税收优惠办理；税务证明开具；纳税信用评价工作；税务注销；涉税（费）咨询；高桥税务分局联系人员：胡蓉。
                          <br>  联系电话：84687119 
                  
                          </pre>
                        </view>
                        </view>
                      </view>
                      <view class="three">
                       <view class="text">
                         
                        <textarea style="width: 460rpx;" placeholder="请输入内容..." ></textarea>
                       </view>
                      <view class="btn">
                         <button>发送</button>
                       </view> 
                       </view>
                      </view>
  </view>
</template>

<script>
   export default {
    data(){
      return{
        ok1:false,
        ok2:false,
        ok3:false,
        ok4:false,
        ok5:false,
        show1:true,
        show2:true,
        show3:true,
        show4:true,
        show5:true
        }
      },
      methods:{
        clic1(){
          this.ok1=!this.ok1
          this.show1=!this.show1
        },
        clic2(){
          this.ok2=!this.ok2
          this.show2=!this.show2
        },
        clic3(){
          this.ok3=!this.ok3
          this.show3=!this.show3
        },
        clic4(){
          this.ok4=!this.ok4
          this.show4=!this.show4
        },
        clic5(){
          this.ok5=!this.ok5
          this.show5=!this.show5
        }
      }
    }
</script>

<style scoped>
  .content{
      background-color: #f0f0f0;
    }
    /* .icon-jiqiren{
      width: 57px;
      height: 53px;
      border: ;
    } */
    .icon{
      width: 80rpx;
      height: 80rpx;
      background: linear-gradient(90deg, #4080E6, #4FAAFF);
      border-radius: 50%;
      margin-top: 36rpx;
      margin-left: 20rpx;
      padding-top: 12rpx;
      padding-left: 12rpx;
      padding-right: 20rpx;
      /* display: flex; */
    }
    .icon .iconfont{
      padding: 4rpx 4rpx 13rpx;
      color: #FFFFFF;
      font-size: 50rpx;
    }
    .one{
      background-color: #FFFFFF;
      width: 513rpx;
      height: 178.3rpx;
      border-top-left-radius: 0rpx;
      border-top-right-radius: 30rpx;
      border-bottom-right-radius: 30rpx;
      border-bottom-left-radius: 30rpx;
      margin-top: -51rpx;
      margin-left: 120rpx;
      margin-right: 117rpx;
      padding: 23rpx 25rpx 34rpx 21rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      /* line-height: 30rpx; */
    }
    
    .two{
      background-color: #FFFFFF;
      padding: 25rpx;
      width: 710rpx;
      /* height: 455rpx; */
      margin: 31rpx 20rpx 10rpx;
      color: #333333;
      font-size: 30rpx;
      font-weight: bold;
      font-family: PingFang SC;
      border-radius: 20rpx;
      /* padding-bottom: 10rpx; */
      line-height: 62rpx;
    }
    .two .text1{
      /* height: 80rpx; */
      border-bottom: 1px solid #ECECEC ;
    }
    .two .text2{
      /* height: 88rpx; */
      border-bottom: 1px solid #ECECEC ;
      padding-top: 25rpx;
    }
    .two .text3{
      /* height: 88rpx; */
      border-bottom: 1px solid #ECECEC ;
      padding-top: 25rpx;
    }
    .two .text4{
      /* height: 88rpx; */
      border-bottom: 1px solid #ECECEC ;
      padding-top: 25rpx;
    }
    .two .text5{
      /* height: 88rpx; */
      padding-top: 25rpx;
    }
    /* .two span{
      float: right;
      transform: rotate(90deg);
    } */
    .two .icon-xiajiantou{
      float: right;
      color: #999999;
      font-size: 30rpx;
    }
    .three{
      width: 750rpx;
      height: 120rpx;
      background-color: #FFFFFF;
    /* margin-top: 366rpx; */
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .three .text{
      width: 540rpx;
      height: 85rpx;
      border-radius: 43rpx;
      background-color: #F0F0F0;
        display: flex;
      margin: 18rpx 0 17rpx 22rpx;
      padding: 28rpx 0 28rpx 53rpx;
      
    }
    textarea{ 
      height:33rpx;
      font-size: 30rpx;
      /* width: 540rpx; */
    }
    button{
      /* display: flex; */
      /* margin-right: 20rpx; */
      color: #FFFFFF;
       width: 148rpx;
       height: 85rpx;
       background: linear-gradient(90deg, #4080E6, #4FAAFF);
       border-radius: 43px;
       /* margin: 18rpx 20rpx 17rpx 582rpx; */
       font-size: 36rpx;
       font-family: PingFang SC;
       font-weight: bold;
       /* padding: 38rpx 25rpx; */
       margin-right: 20rpx;
    }
</style>
