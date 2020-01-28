<template>
    <div class="tab_div">
        <div class="tab_box">
            <div class="logo">
                KRISTEN SHEN
            </div>
            <div class="tab-list">
                <ul class="tab-list-left">
                    <li>APP</li>
                    <li>WEB</li>
                    <li>ICON</li>
                    <li>MOTION</li>
                    <li>IIIUSTRATION</li>
                </ul>
                <div class="tab-list-right">LET'S TALK</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class HomeTab extends Vue {
    
    
    created() {

       
    }
}
</script>
<style lang="scss" scoped>
    .tab_div{
        width: 100%; 
        height: 70px;
    }
    .tab_box{
        width: 1200px;
        height: 70px;
        margin: 0 auto;
        padding: 0 56px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .logo{
            line-height: 70px;
            font-size:14px;
            font-family:Andale Mono;
            color: #707070;
        }
        .tab-list{
            display: flex;
            .tab-list-left{
                display: flex;
                line-height: 70px;
                li{
                   margin-left: 37px; 
                   font-family:Helvetica;
                   font-size:14px;
                   color: #666666;
                   cursor: pointer;
                }
            }
            .tab-list-right{
               width: 115px;
               height: 38px;
               text-align: center;
               line-height: 40px;
               border: 1px solid #F3A951;
               border-radius: 22px;
               margin: 15px 0 0 24px;
               font-size:14px;
               font-weight:600;
               font-family:Gibson;
               color: #333333;
               cursor: pointer;
            }
        }
    }
</style>

