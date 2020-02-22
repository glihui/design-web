<template>
    <div class="icon-box">
        <div class="icon-info">
            <img src="../assets/icon.png"/>
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
export default class Icon extends Vue {

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