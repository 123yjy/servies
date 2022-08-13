<template>
  <view class="content">
    <view class="one">
      <p>人才和知识产权常见问题</p>
      <view class="body1">
        <view class="text1" @click="clic()">长沙自贸区人才引进落户条件有哪些？该怎么办理落户呢？
        <span class="arrow">
            <view class="iconfont icon-xiajiantou" v-if="show"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
<view class="drop" v-show="ok">
          <pre>
            答：<br>
            一、落户条件：<br>
　　           1、45周岁(含)以下；<br>
　　           2、具有专科及以上学历(博士研究生、硕士研究生落户不受年龄限制)或中级及以上专业技术资格；<br>
　　              满足以上条件可凭毕业证或专业技术资格证书落户长沙。<br>
　　         二、落户流程：<br>
　　           1、下载我的长沙APP，进入APP首页，点击更多。

          </pre>
        </view>
        </view>
        

        <view class="text2" @click="clic1()">知识产权公共服务站提供哪些服务呢？
        <span>
            <view class="iconfont icon-xiajiantou" v-if="show1"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
        </span>
          <view class="drop" v-show="ok1">
            <pre>
              答：<br>
                  
                  1、<br>专利业务
                  <view>国内外专利申请（发明、实用新型、外观设计、PCT</view>
                  答复发明专利审查意见、专利复审与无效<br>
                  现有技术检错及专利性分析<br>
                  专利检索、预警、侵权分析<br>
                  专利事务的全面管理咨询服务<br>
                  专利许可与转让<br>
              
                  2、<br>商标业务
                  商标检索及申请可行性分析<br>
                  国内外商标申请和续展<br>
                  商标异议、评审和行政诉讼<br>
                  商标许可与转让<br>
              
                  3、<br>项目申报
                  高新技术企业培育及认定<br>
                  企业技术中心、工程技术中心申报<br>
                  省市科技计划申报<br>
                  制造强省专项资金申报<br>
                  移动互联网项目申报<br>
                  省市知识产权项目申报<br>
              
                  4、<br>其他业务
                  软件著作权和版权登记、许可及转让<br>
                  知识产权海关案备<br>
                  知识产权运营<br>
                  知识产权诉讼
                
                  </pre>
          </view>
        </view>

      </view>
    </view>
    <view class="two">
      <p>融资担保常见问题</p>
      <view class="body2">
        <view class="text1" @click="clic2()">融资担保的意义是什么？<span>
            <view class="iconfont icon-xiajiantou" v-if="show2"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok2">
            <pre>答：实现管委会对园区企业服务的制度创新，为园区企业解
          决融资难、融资成本高以及企业经营活动中各种风险损失，
          实现风险转移，确保企业的经营效益。
          </pre>
          </view>
        </view>

        <view class="text2" @click="clic3()">有融资需求怎么申请？<span>
            <view class="iconfont icon-xiajiantou" v-if="show3"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok3">
            <pre>答：填写好企业融资需求意向调查表以后，我们会在三个工作日内上门进行一对一服务。
          </pre>
          </view>
        </view>

        <view class="text3" @click="clic4()">申请融资担保的流程是怎么样的？ <span>
            <view class="iconfont icon-xiajiantou" v-if="show4"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok4">
            <pre>答：详见服务流程图
          </pre>
          </view>
        </view>

        <view class="text4" @click="clic5()">融资需要多少时间？<span>
            <view class="iconfont icon-xiajiantou" v-if="show5"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok5">
            <pre>答：融资的时间需要根据企业的具体情况来确定，填写好企
          业融资需求意向调查表以后我们会上门进行一对一的服务，
          服务流程请参考服务流程图及担保业务办理流程图。
          </pre>
          </view>
        </view>

      </view>
    </view>
    <view class="three">
      <p>一般贸易代理进出口常见问题</p>
      <view class="body3">
        <view class="text1" @click="clic6()">请问高桥设立的政务服务中心能提供什么服务？<span>
            <view class="iconfont icon-xiajiantou" v-if="show6"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>

        </view>
        <view class="drop" v-show="ok6">
          <pre>答：我们能为企业商户提供工商注册、对外贸易经营者备案、税务咨询服务、
   海关收发货人备案、外汇名录登记、电子口岸IC卡办理等一站式外贸政务代办
  服务。
  </pre>
        </view>
        <view class="text2" @click="clic7()">工商注册需要提供哪些内容？ <span>
            <view class="iconfont icon-xiajiantou" v-if="show7"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>

          <view class="drop" v-show="ok7">
            <pre>答：<br>
                  1 公司名称 (长沙市+字号+行业+有限公司)<br>2 法人及全体股
                  东身份证信息 (身份证姓名、地址、身份证号码）<br>3 法人及全体股东个人U
                  盾 (U盾作为网上电子签名使用)<br>4 注册资本 (可以认缴或者实收)<br>5 股东出资比
                  例<br> 6 经营范围 <br>7 注册地址。
                  </pre>
          </view>
        </view>

        <view class="text3" @click="clic8()">对外贸易经营者备案办理准备哪些资料？ <span>
            <view class="iconfont icon-xiajiantou" v-if="show8"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok8">
            <pre>答：提供营业执照副本原件、公章、法人身份证复印件、法人章，企业电话、邮箱、英文名称。
                  </pre>
          </view>
        </view>

        <view class="text4" @click="clic9()">已在海关备案但尚未提供统一社会信用代码的企业需要办理进出口货物收发货人备案变更吗？ <span class="arrow">
            <view class="iconfont icon-xiajiantou" v-if="show9"></view>
            <view class="iconfont icon-xiajiantou" style="transform:rotate(-180deg)" v-else></view>
          </span>
          <view class="drop" v-show="ok9">
            <pre>答：已在市场监督管理部门办理统一社会信用代码变更的企业，或尚未在海
                  关备案统一社会信用代码的企业，需及时向注册地海关申请办理统一社会信用代
                  码变更或备案手续，以免影响后续海关进出口业务的办理。
                  </pre>
          </view>
        </view>
      </view>
    </view>
  </view>
  <!-- </view> -->
</template>

<script>
  export default {
    data() {
      return {
        ok: false,
        ok1: false,
        ok2: false,
        ok3: false,
        ok4: false,
        ok5: false,
        ok6: false,
        ok7: false,
        ok8: false,
        ok9: false,
        show: true,
        show1: true,
        show2: true,
        show3: true,
        show4: true,
        show5: true,
        show6: true,
        show7: true,
        show8: true,
        show9: true
      }
    },
    methods: {
      clic() {
        this.ok = !this.ok;
        this.show = !this.show;
      },
      clic1() {
        this.ok1 = !this.ok1;
        this.show1 = !this.show1;
      },
      clic2() {
        this.ok2 = !this.ok2;
        this.show2 = !this.show2;
      },
      clic3() {
        this.ok3 = !this.ok3;
        this.show3 = !this.show3;
      },
      clic4() {
        this.ok4 = !this.ok4;
        this.show4 = !this.show4;
      },
      clic5() {
        this.ok5 = !this.ok5;
        this.show5 = !this.show5;
      },
      clic6() {
        this.ok6 = !this.ok6;
        this.show6 = !this.show6;
      },
      clic7() {
        this.ok7 = !this.ok7;
        this.show7 = !this.show7;
      },
      clic8() {
        this.ok8 = !this.ok8;
        this.show8 = !this.show8;
      },
      clic9() {
        this.ok9 = !this.ok9;
        this.show9 = !this.show9;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 23px 19px 20px;
    /* position: relative; */
    /* height: 100%; */
    span {
      float: right;
      color: #666666;
      /* top: -25px; */
    }
  }

  .content p {
    font-weight: bold;
    font-size: 18px;
  }

  .one .body1 .body2 .body3 {
    color: #666666;
    font-size: 15px;
    position: absolute;


  }

  .one .text1 {
    
    padding: 15px 0;
    /* margin: 15px 0; */
    right: 52.5px;
    border-bottom: 1px solid #ECECEC;
    line-height: 25px;
    /* display: flex; */
    align-items: center;

  }

  .one .arrow {
    margin-left: 73rpx;
  }

  .one .text2 {
    /* width: 293.5px; */
    /* height: 41px; */
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
    /* display: flex; */
    /* position: absolute; */
  }

  .two .text1 {
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
  }

  .two .text2 {
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
  }

  .two .text3 {
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
  }

  .two .text4 {
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
  }

  .three .text1 {
    padding: 15px 0;
    /* margin: 15px 0; */
    border-bottom: 1px solid #ECECEC;
    height: 61.5px;
    display: flex;
  }

  .three .text2 {
    padding: 15px 0;
    /* margin: 15px 0; */
    border-bottom: 1px solid #ECECEC;
  }

  .three .text3 {
    padding: 15px 0;
    margin: 15px 0;
    border-bottom: 1px solid #ECECEC;
  }

  .three .text4 {
    padding: 15px 0;
    margin: 15px 0;
    /* width: 293.5px; */
    height: 102px;
    line-height: 25px;
    border-bottom: 1px solid #ECECEC;
    /* display: flex; */
    align-items: center;

  }
</style>
