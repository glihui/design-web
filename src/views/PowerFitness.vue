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
        <MayLike></MayLike>
        <back-top></back-top>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import MayLike from '@/components/MayLike.vue';
import BackTop from '@/components/BackTop.vue';



@Component({
    components: {
        MayLike,
        BackTop
    }
})
export default class PowerFitness extends Vue {
    @Provide() likeProductList:Array<Object> = [
        {
            img: require('@/assets/pet.png'),
            title: 'WEPET - ANDROID APP DESIGN',
            time: '2018',
            link: '/pet'
        },
        {
            img: require('@/assets/illustration.png'),
            title: 'ILLUSTRATION',
            time: '2019-2020',
            link: '/iiiustration'
        },
        {
            img: require('@/assets/web_furniture.png'),
            title: 'SPACE - WEB DESIGN',
            time: '2019',
            link: '/space'
        }
    ]    
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