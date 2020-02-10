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
        <div class="other-like">
            <div class="other-like-title">
                YOU MAY ALSO LIKE
            </div>
            <div class="like-item-box">
                <div class="like-item" 
                    v-for="(item, index) in likeProductList"
                    :key="index">
                    <div class="product-img">
                        <img :src="item.img"/>
                    </div>
                    <div class="product-name">
                        {{item.title}}
                    </div>
                    <div class="product-time">
                        {{item.time}}
                    </div>
                </div>
            </div>
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
    @Provide() likeProductList:Array<Object> = [
        {
            img: require('@/assets/pet.png'),
            title: 'WEPET - ANDROID APP DESIGN',
            time: '2018'
        },
        {
            img: require('@/assets/illustration.png'),
            title: 'ILLUSTRATION',
            time: '2019-2020'
        },
        {
            img: require('@/assets/web_furniture.png'),
            title: 'SPACE - WEB DESIGN',
            time: '2019'
        }
    ]

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
                    width: 680px;
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
               width: 1090px;
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
       }
       .other-like{
            .other-like-title{
                width: 1200px;
                margin: 0 auto;
                box-sizing: border-box;
                color: #333333;
                font-size: 20px;
                padding: 108px 56px 48px 56px;
                font-family:Gibson;
                font-weight:600;
            }
            .like-item-box{
                width: 1200px;
                margin: 0 auto;
                padding: 0 56px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;
            }
            .like-item{
               background-color: #FBFCFF; 
               height: 350px;
               .product-img{
                   width: 340px;
                   height: 220px;
                   img{
                        width: 340px;
                        height: 220px;
                   }
               }
               .product-name{
                   text-align: center;
                   color: #333333;
                   font-size: 16px;
                   font-family:Gibson;
                   font-weight:600;
                   padding: 40px 0 10px 0;
               }
               .product-time{
                   text-align: center;
                   font-size:16px;
                   color: #666666;
               }
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