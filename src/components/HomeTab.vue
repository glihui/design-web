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
        padding: 0 55px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .logo{
            line-height: 70px;
        }
        .tab-list{
            display: flex;
            .tab-list-left{
                display: flex;
                line-height: 69px;
                li{
                   margin-left: 40px; 
                   cursor: pointer;
                }
            }
            .tab-list-right{
               width: 120px;
               height: 38px;
               text-align: center;
               line-height: 38px;
               border: 1px solid #f3a951;
               border-radius: 19px;
               margin: 14.5px 0 0 30px;
               cursor: pointer;
            }
        }
    }
</style>

