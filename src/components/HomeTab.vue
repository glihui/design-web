<template>
    <div class="tab_div">
        <div class="tab_box">
            <div class="logo" @click="jumpToPage('/')">
                KRISTEN SHEN
            </div>
            <div class="tab-list">
                <ul class="tab-list-left">
                    <li :class="{'active-li':currentRoute === 'power_fitness'}" @click="jumpToPage('/power_fitness')">POWER</li>
                    <li :class="{'active-li':currentRoute === 'pet'}" @click="jumpToPage('/pet')">WEPET</li>
                    <li :class="{'active-li':currentRoute === 'space'}" @click="jumpToPage('/space')">SPACE</li>
                    <li :class="{'active-li':currentRoute === 'iiiustration'}" @click="jumpToPage('/iiiustration')">ILLUSTRATION</li>
                    <li :class="{'active-li':currentRoute === ''}" @click="jumpToPage('/icon')">ICON</li>
                </ul>
                <div class="tab-list-right">
                    <a class="tab-list-right-a" href="mailto:nanshen415@gmail.com?subject=Hey Kristen, Let’s meet up!">LET'S TALK</a>
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
export default class HomeTab extends Vue {
    
    
    created() {
        console.log('---',this.$route)
    }
    jumpToPage(value: string) {
      if (this.$route.path != value) {
          this.$router.push(value);
      }
    }

    get currentRoute() {
        let currentName = this.$route.name;
        return currentName;
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
            cursor: pointer;
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
                .active-li{
                    color: #333333;
                    font-weight:bold;
                }
            }
            .tab-list-right{
               width: 115px;
               height: 38px;
               text-align: center;
               line-height: 40px;
               border: 2px solid #F3A951;
               border-radius: 22px;
               margin: 14px 0 0 24px;
               .tab-list-right-a{
                    color: #333333;
                    cursor: pointer;
                    font-size:14px;
                    font-weight:600;
                    font-family:Gibson;
               }
            }
        }
    }
</style>

