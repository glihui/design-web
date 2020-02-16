<template>
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
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class MayLike extends Vue {
    @Prop({
        type: Array,
        default: () => {
            return [
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
            ];
        }
    }) private likeProductList !: Array<Object>;
}    
</script>

<style lang="scss" scoped>
    .other-like{
        .other-like-title{
            max-width: 1088px;
            margin: 0 auto;
            box-sizing: border-box;
            color: #333333;
            font-size: 20px;
            padding: 108px 0px 48px 0px;
            font-family:Gibson;
            font-weight:600;
        }
        .like-item-box{
            max-width: 1088px;
            margin: 0 auto;
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
</style>