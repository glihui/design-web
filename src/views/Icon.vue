<template>
    <div class="icon-box">
        <div class="icon-info">
            <img src="../assets/icon.png"/>
        </div>
        <MayLike :likeProductList="likeProductList"></MayLike>
        <div v-show="btnFlag" class="back_top" @click="backTop">
            <img src="../assets/up_arrows.png"/>
        </div>
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
export default class Icon extends Vue {
    @Provide() btnFlag:Boolean  = false;
    @Provide() scrollTop:number = 0;

    @Provide() likeProductList:Array<Object> = [
        {
            img: require('@/assets/fitness.png'),
            title: 'POWER FITNESS APP',
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
    .icon-box{
       .icon-info{
            width: 1200px;
            margin: 0 auto;
            padding: 0 56px;
            padding-top: 148px;
            box-sizing: border-box;
            background-color: #fff;  
            img{
                width: 100%;
            }
       }
    }
</style>