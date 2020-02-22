<template>
    <div class="iiiustration">
        <div class="title">
            Illustrations
        </div>
        <div class="des">
            In 2019, I joined an online illustration class and took the 21-Day drawing challenge. I kept drawing illustrations for 21 consecutive days. Here are some of<br/> 
            the studies I did during that time. Some of the copies and just for personal practice.
        </div>
        <div class="week-msg">
            <el-carousel :class="[`carousel-${currentIndex}`]" :autoplay="false" arrow="always" @change="changeIndex">
                <el-carousel-item :class="[`carousel-item-${currentIndex}`]" v-for="(item,index) in weekMsgList" :key="index">
                    <img :src="item.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <MayLike></MayLike>
        <back-top></back-top>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import MayLike from '@/components/MayLike.vue';
import BackTop from '@/components/BackTop.vue';



@Component({
    components: {
        MayLike,
        BackTop
    }
})
export default class Iiiustration extends Vue {
    @Provide() weekMsgList:Array<Object> = [
        {
            img: require('@/assets/week_msg1.png')
        },
        {
            img: require('@/assets/week_msg2.png')
        },
        {
            img: require('@/assets/week_msg3.png')
        },
        {
            img: require('@/assets/week_msg4.png')
        },
        {
            img: require('@/assets/week_msg5.png')
        }
    ];

    @Provide() currentIndex:Number = 0;

    changeIndex(index: Number) {
        this.currentIndex = index;
    }

}
</script>

<style lang="scss" scoped>
.iiiustration{
    width: 1200px;
    margin: 0 auto;
    padding: 0 56px;
    box-sizing: border-box;
    .title{
        font-size:42px;
        color: #333333;
        font-family:Gibson;
        font-weight:600;
        padding: 148px 0 40px 0;
        text-align: center;
    }
    .des {
        color:#666666;
        font-size: 16px;
        line-height:60px;
        text-align: center;
    }
    .week-msg{
        width: 1088px;
        // height: 5452px;
        margin: 0 auto;
        margin-top: 34px;
        img{
            width: 1088px;
        }
    }
}
</style>
<style lang="scss">
    .iiiustration{
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
            height: 5452px;
            .el-carousel__container{
                height: 5452px;
            }
        }
        .carousel-1{
            height: 4956px;
            .el-carousel__container{
                height: 4956px;
            }
        }
        .carousel-2{
            height: 5061px;
            .el-carousel__container{
                height: 5061px;
            }
        }
        .carousel-3{
            height: 6030px;
            .el-carousel__container{
                height: 6030px;
            }
        }
        .carousel-4{
            height: 3388px;
            .el-carousel__container{
                height: 3388px;
            }
        }
        .el-carousel__item {
            width: 1088px;
            height: 5452px;
        }
        .carousel-item-0{
            height: 5452px;
        }
        .carousel-item-1{
            height: 4956px;
        }
        .carousel-item-2{
            height: 5061px;
        }
        .carousel-item-3{
            height: 6030px;
        }
        .carousel-item-4{
            height: 3388px;
        }
    }
</style>