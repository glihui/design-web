<template>
  <div class="home">
    <div class="me-msg-box">
      <div class="me-msg">
        <div class="me-msg-left">
          <h1 class="msg-title">MAKE IT SIMPLE</h1>
          <h1 class="msg-title">BUT SIGNIFICANT</h1>
          <div class="me-introduce">
            Hi! My name is Kristen Shen, <br/>
            a UI/UX Designer based in <br/>
            Toronto, Canada
          </div>
          <div class="download-btn">
            DOWNLOAD RESUME
          </div>
        </div>
        <div class="me-msg-right">
          <img class="user-img" src="../assets/user_avatar.png"/>
        </div>
      </div>
      <div class="me-evaluate-div">
        <div class="me-evaluate-box">
          <div class="me-evaluate-item" v-for="(item, index) in evaluateList" :key="index">
            <div class="me-evaluate-img">
              <img class="evaluate-icon" :src="item.icon"/>
            </div>
            <div class="evaluate-title">{{item.title}}</div>
            <div class="evaluate-des" v-html="item.des"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="production-introduce-box" v-for="(item, index) in productionList" :key="index">
      <div class="production-introduce">
        <div class="production-introduce-text">
          <div class="production-index">{{`0${index + 1}`}}</div>
          <div class="production-title">
            {{item.title}}
          </div>
          <div class="production-des" v-html="item.des">
          </div>
          <span class="view-casestudy">
            VIEW CASESTUDY
          </span>
        </div>
        <div class="production-introduce-img" :class="`production-introduce-img-${index}`">
          <img class="production-img" :class="`production-img-${index}`" :src="item.icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    @Provide() evaluateList: Array<Object> = [
      {
        icon: require("../assets/icon_AttentionToDetail.png"),
        title: "ATTENTION TO DETAIL",
        des: `I care about every single<br/>
              Pixel`
      },
      {
        icon: require("../assets/icon_EnjoyLearning.png"),
        title: "ENJOY LEARNING",
        des: `I learn Adobe After Effect<br/>
              by myself`
      },
      {
        icon: require("../assets/icon_TeamPlayer.png"),
        title: "TEAM PLAYER",
        des: `Listening & being part of<br/>
              A team is where I’m at`
      }
    ];
    @Provide() productionList: Array<object> = [
      {
        title: "POWER - FITNESS APP DESIGN",
        des: `A mobile app created for people who <br/>
              want to keep fit, but who do not have <br/>
              time for the gym.`,
        icon: require("../assets/production_icon_1.png")
      },
      {
        title: "WEPET - PET APP DESIGN",
        des: `WePet is a mobile app created for pet lovers<br/>
            to understant their pet in much better way.<br/>
            WePet allows its users to track and monitor<br/>
            the care of their pets.
            `,
        icon: require("../assets/production_icon_2.png")
      },
      {
        title: "WEBSITE DESIGN",
        des: `A eCommerce website for furniture<br/>
            store.`,
        icon: require("../assets/production_icon_3.png")     
      },
      {
        title: "ILLUSTRATION",
        des: `A liner icon display about<br/>
            Travel`,
        icon: ""  
      },
      {
        title: "ICON DESIGN",
        des: `A liner icon display about<br/>
            travel.`,
        icon: require("../assets/production_icon_5.png") 
      }
    ];
  }
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    .me-msg-box{
      background: #fbfcff;
    }
  }
  .me-msg{
    width: 1200px;
    margin: 0 auto;
    padding: 0 56px;
    box-sizing: border-box;
    height: 600px;
    display: flex;
    justify-content: space-between;
    .me-msg-left{
      padding-top: 147px;
      .msg-title{
        font-size: 42px;
        font-family:Britannic Bold;
        line-height: 50px;
        color: #333333;
        margin-bottom: 20px;
      }
      .me-introduce{
        margin-top: 40px;
        font-size:16px;
        line-height:24px;
        color: #666666;
      }
      .download-btn{
        width:180px;
        height:38px;
        margin-top: 63px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #F3A951;
        border-radius: 21px;
        color: #333333;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .me-msg-right{
      margin-top: 147px;
      .user-img{
        width: 345px;
        height: 347px;
        // background-color: orange;
        // border-radius: 173px;
      }
    }
  }
  .me-evaluate-div{
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    padding: 91px 56px;
    box-sizing: border-box;
    .me-evaluate-box{
      width: 100%;
      display: flex;
      box-shadow:2px 4px 10px rgba(240,244,255,1);
      justify-content:space-evenly;
      height: 360px;
      background-color: #fff;
      margin: 0 auto;
      border-radius: 16px;
      padding: 65px 0 81px 0;
      box-sizing: border-box;
      .me-evaluate-item{
        width:260px;
        height:214px;
        text-align: center;
        .me-evaluate-img{
          width: 80px;
          height: 92px;
          margin: 26px auto 15px auto;
        }
        .evaluate-title{
          font-size: 14px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 14px;
        }
        .evaluate-des{
          font-size: 14px;
          color: #666666;
          line-height:17px;
        }
      }
      .me-evaluate-item:nth-child(2){
        margin:0 16px;
      }
    }
  }
  .production-introduce-box{
    width: 100%;
  }
  .production-introduce{
    width: 1200px;
    margin: 0 auto;
    padding: 0 56px;
    box-sizing: border-box;
    height: 730px;
    background-color: #fff;
    .production-introduce-text{
      float: left;
      padding: 276px 0 0 140px;
      position: relative;
      .production-index{
        position: absolute;
        left: 140px;
        top: 223px;
        z-index: 1;
        font-size: 64px;
        font-family:Gibson;
        color: #EDF3FD;
        font-weight: 600;
      }
      .production-title{
        position: relative;
        z-index: 2;
        color: #333;
        font-size: 16px;
        line-height:19px;
        font-family:Gibson;
        font-weight:600;
        padding-bottom: 43px;
      }
      .production-des{
        line-height:21px;
        font-size: 14px;
        font-family:Helvetica;
        color: #666666;
        padding-bottom: 84px;
      }
      .view-casestudy{
        color: #333;
        line-height:19px;
        border-bottom: 1px solid #f3a951;
        font-family:Gibson;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .production-introduce-img{
      padding: 165px 122px 0 0;
      float: right;
    }
    .production-introduce-img-2{
      padding: 177px 77px 0 0;
    }
    .production-introduce-img-4{
      padding: 198px 77px 0 0;
    }
    .production-img-0{
      width: 223px;
    }
    .production-img-1{
      width: 201px;
    }
    .production-img-2{
      width: 556px;
    }
    .production-img-4{
      width: 418px;
    }
  }
  .production-introduce-box:nth-child(odd) {
    background-color: #fbfcff;
    .production-introduce {
      background-color: #fbfcff;
      .production-introduce-text{
        float: right;
        padding: 276px 122px 0 0;
        .production-index{
          left: 0;
        }
      }
      .production-introduce-img{
        float: left;
        padding-left: 140px;
      }
    }
  }
</style>

