<template>
    <div v-show="btnFlag" class="back_top" @click="backTop">
        <img src="@/assets/back-top.png"/>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';


@Component({
})
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
    .back_top{
        position: fixed;
        right: 50px;
        bottom: 100px;
        z-index: 2;
        cursor: pointer;
        img{
            width: 60px;
            height: 60px; 
        }
    }
</style>