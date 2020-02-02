<template>
    <div class="power-fitness">
        <div class="app-intro">
            <div class="app-intro-top">
                <div class="app-intro-left">
                    <div class="app-title">
                        POWER FITNESS APP
                    </div>
                    <div class="app-des">
                        A design concept that I did just for fun.
                    </div>
                    <div class="app-design-msg">
                        <div class="app-design-des">
                            <span class="des-title">
                                WHEN
                            </span>
                            <span class="des-content">
                                Feb 2019
                            </span>
                        </div>
                        <div class="app-design-des">
                            <span class="des-title">
                                DURATION
                            </span>
                            <span class="des-content">
                                4 Weeks
                            </span>
                        </div>
                        <div class="app-design-des">
                            <span class="des-title">
                                TOOLS
                            </span>
                            <span class="des-content">
                                Sketch
                            </span>
                            <span class="des-content">
                                Photoshop
                            </span>
                            <span class="des-content">
                                After Effects
                            </span>
                        </div>
                    </div>
                </div>
                <div class="app-intro-right">
                    <img src="../assets/power_fitness_icon.jpg"/>
                </div>
            </div>
            <div class="app-intro-bottom">
                Power is a mobile App created for people who want to keep fit but who
                do not have time for gym. The application acts as a personal trainer,
                has many different types of workouts at home or street with a minimum
                amount of sports equipment.
            </div>
        </div>
        <div class="power-fitness-banner">
            <img src="../assets/power_fitness_banner.png">
            <img class="width-value margin-128" src="../assets/fitness_2.png"/>
            <img src="../assets/person_1.png"/>
            <img src="../assets/person_2.png"/>
            <img class="width-value" src="../assets/fitness_4.png"/>
            <img class="width-value" src="../assets/user_flow.png"/>
            <img class="width-value" src="../assets/fitness_6.png"/>
            <img class="width-value margin-top-32" src="../assets/color.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_8.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_9.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_10.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_11.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_12.png"/>
            <img class="width-value margin-top-32" src="../assets/fitness_13.png"/>
            <img class="width-value-750 margin-top-124" src="../assets/fitness_running.gif"/>
        </div>
        <div v-show="btnFlag" class="back_top" @click="backTop">
            <img src="../assets/up_arrows.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class PowerFitness extends Vue {
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
                color: #707070;
                font-size: 34px;
                line-height: 60px;
                padding-top: 200px;
            }
            .app-intro-left{
                .app-title{
                    font-size: 20px;
                    font-weight: 500;
                    color: #707070;
                    padding-bottom: 20px;
                }
                .app-des{
                    font-size: 14px;
                    color: #9c9c9c;
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
                            padding-bottom: 10px;
                        }
                        .des-content{
                            display: block;
                            font-size: 12px;
                            color: #9c9c9c;
                            padding-bottom: 6px;
                        }
                    }
                }
            }
            .app-intro-right{
                img{
                    width: 680px;
                }
            }
       } 
       .power-fitness-banner{
           text-align: center;
           img {
               width: 100%;
           }
           .width-value {
               width: 1090px;
           }
           .width-value-750{
               width: 750px;
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