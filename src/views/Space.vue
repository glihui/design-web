<template>
    <div class="space-box">
        <div class="space-box-1">
            <div class="space-box-1-div">
                <div class="space-box-1-title">
                    Typography & Font Size
                </div>
                <div class="font-box">
                    <div class="font-box-left">
                        <div class="font-box-title">Arial Black</div>
                        <div class="font-box-content">28px       24px       22px       16px       14px</div>
                    </div>
                    <div class="font-box-right">
                        A B C D E F G H I J K L M N O P Q <br/>
                        R S T U V W X Y Z a b c d e f g h I <br/>
                        j k l m n o p q r s t u v w x y z 1 2 <br/>
                        3 4 5 6 7 8 9 0 ; : “ “ ‘ , . / < > ? ~ !<br/>
                        @ # $ % ^ & * ( ) 
                    </div>
                </div>
                <div class="font-box font-box-2">
                    <div class="font-box-left">
                        <div class="font-box-title font-box-title-2">PingFang HK</div>
                        <div class="font-box-content">28px       24px       22px       16px       14px       12px</div>
                    </div>
                    <div class="font-box-right font-box-right-2">
                        A B C D E F G H I J K L M N O P Q <br/>
                        R S T U V W X Y Z a b c d e f g h I <br/>
                        j k l m n o p q r s t u v w x y z 1 2 <br/>
                        3 4 5 6 7 8 9 0 ; : “ “ ‘ , . / < > ? ~ ! <br/>
                        @ # $ % ^ & * ( ) 
                    </div>
                </div>
                <div class="space-box-1-title space-box-2-title">
                    Typography & Font Size
                </div>
                <div class="css-box">
                    <div class="css-box-left">
                        <div class="css-box-top">
                            <span>Main Background Color:</span>
                            <span>#FFFFFF</span>
                        </div>
                        <div class="css-box-bottom">
                            <div class="circle"></div>
                        </div>
                    </div>
                    <div class="css-box-right">
                        <div class="css-box-right-sub">
                            <div class="css-box-top">
                                <div>Second Background Color:</div>
                                <div>#F5F5F5</div>
                            </div>
                            <div class="css-box-bottom">
                                <div class="circle circle-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="css-box">
                    <div class="css-box-left">
                        <div class="css-box-top">
                            <span>Main UI Color:</span>
                            <span>#E3A700</span>
                        </div>
                        <div class="css-box-bottom">
                            <div class="circle circle-2"></div>
                        </div>
                    </div>
                </div>
                <div class="css-box">
                    <div class="css-box-left">
                        <div class="css-box-top">
                            <span>Text #1 Color:</span>
                            <span>#333333</span>
                        </div>
                        <div class="css-box-bottom">
                            <div class="circle circle-3"></div>
                        </div>
                    </div>
                    <div class="css-box-right">
                        <div class="css-box-right-sub">
                            <div class="css-box-top">
                                <div>Text #2 Color:</div>
                                <div>#666666</div>
                            </div>
                            <div class="css-box-bottom">
                                <div class="circle circle-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="landingpage-img"> 
                <img src="@/assets/landingpage.png"/>
            </div>
        </div>
        <div class="space-box-2">
            <el-carousel :class="[`carousel-${currentIndex}`]" :autoplay="false" arrow="always" @change="changeIndex">
                <el-carousel-item :class="[`carousel-item-${currentIndex}`]" v-for="(item,index) in spaceList" :key="index">
                    <img :src="item.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <MayLike :likeProductList="likeProductList"></MayLike>
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
    export default class Space extends Vue {
        @Provide() likeProductList:Array<Object> = [
            {
                img: require('@/assets/fitness.png'),
                title: 'POWER FITNESS APP',
                time: '2018',
                link: '/power_fitness'
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

        @Provide() spaceList:Array<Object> = [
            {
                img: require('@/assets/main_page.png')
            },
            {
                img: require('@/assets/join_us.png')
            },
            {
                img: require('@/assets/about.png')
            }
        ];

        @Provide() currentIndex:Number = 0;

        changeIndex(index: Number) {
            this.currentIndex = index;
        }
    }
</script>

<style lang="scss" scoped>
    .space-box{
    }
    .space-box-1{
        width:100%;
        height:1653px;
        margin-top: 527px;
        background:#F8F7F4;
        .landingpage-img{
            position: absolute;
            left: 50%;
            top: 148px;
            margin-left: -544px;
            width: 1088px;
            img {
                width: 1088px;
            }
        }
    }
    .space-box-1-div{
        width: 1200px;
        margin: 0 auto;
        padding: 0 56px;
        box-sizing: border-box;
        padding-top: 426px;
        .space-box-1-title{
            font-size:16px;
            font-family:Gibson;
            font-weight:600;
            color: #333333;
            padding-bottom: 64px;
        }
        .space-box-2-title{
            padding-bottom: 56px;
        }
        .font-box{
            display: flex;
            justify-content: space-between;
            .font-box-left{
                .font-box-title{
                    color: #DFA519;
                    font-size:42px;
                    font-family:Arial Black;
                    line-height:59px;
                    padding-bottom: 12px;
                }
                .font-box-title-2{
                    color: #E1A600;
                    font-weight:600;
                    font-family:PingFang HK;
                }
                .font-box-content{
                    font-size:14px;
                    font-family:Helvetica;
                    color: #333333;
                }
            }
            .font-box-right{
                width: 457px;
                color: #333333;
                font-size:20px;
                font-family:Arial Black;
                line-height:30px;
                display: flex;
                justify-content: flex-end;
            }
            .font-box-right-2{
                font-family:PingFang HK;
                padding-right: 21px;
                box-sizing: border-box;
            }
        }
        .font-box-2{
            margin-top: 110px;
            margin-bottom: 108px;
        }
        .css-box{
            display: flex;
            justify-content: space-between;
            margin-bottom: 64px;
            .css-box-left{
            }
            .css-box-right{  
                width: 457px;
                display: flex;
                justify-content: flex-end;
                padding-right: 102px;
                box-sizing: border-box;
                .css-box-right-sub{
                    width: 262px;
                }
            }
            .css-box-top{
                margin-right: 175px;
                width: 262px;
                display: flex;
                justify-content:space-between;
                font-size:14px;
                color: #333333;
            }
            .css-box-bottom{
                display: flex;
                margin-top: 35px;
                .circle{
                    width:56px;
                    height:56px;
                    background:#FFFFFF;
                    box-shadow:0px 3px 6px rgba(240,240,233,1);
                    border-radius:50%;
                }
                .circle-1{
                    background:#F5F5F5;
                    box-shadow:0px 3px 6px rgba(213,213,199,1);
                }
                .circle-2{
                    background:#E3A700;
                    box-shadow:0px 3px 6px rgba(219,185,90,1);
                }
                .circle-3{
                    background:#333333;
                    box-shadow:0px 3px 6px rgba(132,132,132,1);
                }
                .circle-4{
                    background:#666666;
                    box-shadow:0px 3px 6px rgba(132,132,132,1);
                }
            }
        }
    }
    .space-box-2{
        width: 1200px;
        margin: 0 auto;
        padding: 0 56px;
        box-sizing: border-box;
        padding-top: 64px;
        img{
            width: 100%;
        }
    }
</style>

<style lang="scss">
    .space-box{
        .el-carousel__arrow{
            width: 100px;
            height: 100px;
            font-size: 50px;
        }
        .el-carousel__container{
            width: 1088px;
            // height: 5452px;
        }
        .carousel-0{
            height: 3598px;
            .el-carousel__container{
                height: 3598px;
            }
        }
        .carousel-1{
            height: 2976px;
            .el-carousel__container{
                height: 2976px;
            }
        }
        .carousel-2{
            height: 3006px;
            .el-carousel__container{
                height: 3006px;
            }
        }
        
        .el-carousel__item {
            width: 1088px;
            height: 3598px;
        }
        .carousel-item-0{
            height: 3598px;
        }
        .carousel-item-1{
            height: 2976px;
        }
        .carousel-item-2{
            height: 3006px;
        }
    }
</style>