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
          <img class="user-img"/>
        </div>
      </div>
      <div class="me-evaluate-div">
        <div class="me-evaluate-box">
          <div class="me-evaluate-item" v-for="(item, index) in evaluateList" :key="index">
            <div class="me-evaluate-img">
              <img class="evaluate-icon"/>
            </div>
            <div class="evaluate-title">{{item.title}}</div>
            <div class="evaluate-des">{{item.des}}</div>
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
        <div class="production-introduce-img">
          <img class="production-img"/>
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
        icon: "",
        title: "QUICK LEARNER",
        des: "I learn Adobe AE by myself"
      },
      {
        icon: "",
        title: "QUICK LEARNER",
        des: "I learn Adobe AE by myself"
      },
      {
        icon: "",
        title: "TEAM PLAYER",
        des: "Listening & being part of A team is where I'm at"
      }
    ];
    @Provide() productionList: Array<object> = [
      {
        title: "POWER - FITNESS APP DESIGN",
        des: `A mobile app created for people who <br/>
              want to keep fit, but who do not have <br/>
              time for the gym.`,
        icon: ""
      },
      {
        title: "WEPET - PET APP DESIGN",
        des: `WePet is a mobile app created for pet lovers<br/>
            to understant their pet in much better way.<br/>
            WePet allows its users to track and monitor<br/>
            the care of their pets.
            `,
        icon: ""
      },
      {
        title: "WEBSITE DESIGN",
        des: `A eCommerce website for furniture<br/>
            store.`,
        icon: ""      
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
        icon: "" 
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
    padding: 0 55px;
    box-sizing: border-box;
    height: 690px;
    display: flex;
    justify-content: space-between;
    .me-msg-left{
      padding-top: 170px;
      .msg-title{
        font-size: 28px;
        line-height: 50px;
      }
      .me-introduce{
        font-size: 14px;
      }
      .download-btn{
        width: 178px;
        height: 38px;
        margin-top: 60px;
        text-align: center;
        line-height: 38px;
        border: 1px solid #f3ae5b;
        border-radius: 19px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
      }
    }
    .me-msg-right{
      margin-top: 146px;
      .user-img{
        width: 346px;
        height: 346px;
        background-color: orange;
        border-radius: 173px;
      }
    }
  }
  .me-evaluate-div{
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    padding: 0 55px;
    padding-bottom: 90px;
    box-sizing: border-box;
    .me-evaluate-box{
      width: 100%;
      display: flex;
      justify-content:space-evenly;
      height: 360px;
      background-color: #fff;
      margin: 0 auto;
      border-radius: 18px;
      .me-evaluate-item{
        flex: 1;
        text-align: center;
        .me-evaluate-img{
          width: 80px;
          height: 90px;
          margin: 90px auto 14px auto;
          background-color: orange;
        }
        .evaluate-title{
          font-size: 13px;
          font-weight: 500;
        }
        .evaluate-des{
          font-size: 13px;
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
    padding: 0 55px;
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
        top: 244px;
        z-index: 1;
        font-size: 46px;
        color: #edf3fd;
        font-weight: bold;
      }
      .production-title{
        position: relative;
        z-index: 2;
        color: #333;
        font-size: 13px;
        font-weight: bold;
        padding-bottom: 40px;
      }
      .production-des{
        line-height: 20px;
        font-size: 10px;
        color: #7b7b7b;
        padding-bottom: 80px;
      }
      .view-casestudy{
        color: #333;
        border-bottom: 1px solid #f3a951;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .production-introduce-img{
      padding-top: 166px;
      float: right;
      .production-img{
        width: 358px;
        height: 400px;
        background-color: orange;
      }
    }
  }
  .production-introduce-box:nth-child(odd) {
    background-color: #fbfcff;
    .production-introduce {
      background-color: #fbfcff;
      .production-introduce-text{
        float: right;
      }
      .production-introduce-img{
        float: left;
        padding-left: 140px;
      }
    }
  }
</style>

