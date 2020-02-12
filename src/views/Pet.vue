<template>
    <div class="power-fitness">
        <div class="app-intro">
            <div class="app-intro-top">
                <div class="app-intro-left">
                    <div class="app-title">
                        PET APP DESIGN
                    </div>
                    <div class="app-des">
                        WePet app is a concept of app that helps<br/> 
                        to ease the care of pets 
                    </div>
                    <div class="app-design-msg">
                        <div class="app-design-des">
                            <span class="des-title">
                                WHEN
                            </span>
                            <span class="des-content">
                                Dec 2018
                            </span>
                        </div>
                        <div class="app-design-des">
                            <span class="des-title">
                                DURATION
                            </span>
                            <span class="des-content">
                                3 Weeks
                            </span>
                        </div>
                        <div class="app-design-des">
                            <span class="des-title">
                                TOOLS
                            </span>
                            <span class="des-content">
                                Photoshop
                            </span>
                        </div>
                    </div>
                </div>
                <div class="app-intro-right">
                    <img src="../assets/pet2.png"/>
                </div>
            </div>
            <div class="app-intro-bottom">
                WePet is a mobile Application created for pet lovers to understand their pet in much better 
                way, with smart features to suggest pets, book appointments and connect with the pet 
                community of world.
            </div>
        </div>
        <div class="power-fitness-banner">
            <img class="margin-bottom-120" src="../assets/pet3.png">
            <img class="width-value" src="../assets/pet4.png"/>
            <img class="width-value" src="../assets/pet5.png"/>
            <img class="width-value" src="../assets/pet6.png"/>
            <img class="width-value" src="../assets/pet7.png"/>
            <img class="width-value" src="../assets/pet8.png"/>
        </div>
        <MayLike></MayLike>
        <div v-show="btnFlag" class="back_top" @click="backTop">
            <img src="../assets/up_arrows.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import MayLike from '@/components/MayLike.vue';
 

@Component({
    components: {
        MayLike,
    }
})
export default class Pet extends Vue {
    @Provide() btnFlag:Boolean  = false;
    @Provide() scrollTop:number = 0;
    
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    }

    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
    }

    // 点击回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
        let timer = setInterval(() => {
            let ispeed = Math.floor(-this.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
            if (this.scrollTop === 0) {
                clearInterval(timer)
            }
        }, 16)
    }

    // 为了计算距离顶部的高度，当高度大于70显示回顶部图标，小于60则隐藏
    scrollToTop () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.scrollTop = scrollTop
        if (this.scrollTop > 70) {
            this.btnFlag = true
        } else {
            this.btnFlag = false
        }
    }    
}    
</script>

<style lang="scss" scoped>
    .power-fitness{
       .app-intro{
            width: 1200px;
            margin: 0 auto;
            padding: 0 56px;
            box-sizing: border-box;
            height: 1010px;
            background-color: #fff;
            .app-intro-top{
                display: flex;
                height: 520px;
                padding-top: 150px;
                box-sizing: border-box;
                justify-content: space-between;
            }
            .app-intro-bottom{
                color: #666666;
                font-family:Cambria Math;
                font-size: 28px;
                line-height: 60px;
                padding-top: 200px;
            }
            .app-intro-left{
                .app-title{
                    font-size: 20px;
                    font-weight: 500;
                    color: #333;
                    font-family:Gibson;
                    font-weight:600;
                    padding-bottom: 20px;
                }
                .app-des{
                    font-size: 14px;
                    font-family:Helvetica;
                    font-weight:400;
                    color: #666666;
                    padding-bottom: 50px;
                }
                .app-design-msg{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 244px;
                    .app-design-des{
                        .des-title{
                            display: block;
                            font-size: 14px;
                            color: #707070;
                            font-family:Gibson;
                            font-weight:600;
                            padding-bottom: 10px;
                        }
                        .des-content{
                            display: block;
                            font-size: 14px;
                            color: #666666;
                            padding-bottom: 6px;
                        }
                    }
                }
            }
            .app-intro-right{
                img{
                    width: 674px;
                }
            }
       } 
       .power-fitness-banner{
           text-align: center;
           img {
               width: 100%;
               display: block;
               margin: 0 auto;
           }
           .width-value {
               width: 1088px;
               margin-top: 64px;
           }
           .width-value-750{
               width: 421px;
           }
           .margin-128{
               margin-top: 124px;
           }
           .margin-top-32{
               margin-top: 32px;
           }
           .margin-top-124{
               margin-top: 124px;
           }
           .margin-bottom-120{
               margin-bottom: 120px;
           }
       }
       .back_top{
           position: fixed;
           right: 50px;
           bottom: 100px;
           cursor: pointer;
           img{
              width: 80px;
              height: 80px; 
           }
       }
    }
</style>