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
            <img src="@/assets/week_msg.png"/>
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
        margin: 0 auto;
        margin-top: 34px;
        img{
            width: 1088px;
        }
    }
}
</style>