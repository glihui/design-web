<template>
    <div class="foot-div">
        <div class="foot-box">
            <div class="foot-user-msg">
                <div class="user-title">Kristen Shen</div>
                <div class="user-des">
                    A professional and personable<br/>
                    User Experience / User Interface<br/>
                    Designer with a passion of design.<br/>
                    Experience using design techniques<br/>
                    such as personas, storyboards,<br/>
                    design sketching and prototyping.
                </div>
            </div>
            <div class="user-relation">
                <div class="relation-title">Let's Talk</div>
                <div class="relation-way">1(437)-243-3388</div>
                <div class="relation-way">nanshen415@gmail.com</div>
                <div class="relation-way">Resume</div>
            </div>
            <div class="social-link">
                <div class="social-link-title">Social Links</div>
                <div class="social-icon-box">
                    <a href="https://dribbble.com/KristenShen" target="_blank">
                        <img class="social-icon" src="../assets/dribbble.png"/>
                    </a>
                    <a href="https://www.behance.net/shennan4154482" target="_blank">
                        <img class="social-icon" src="../assets/behance.png"/>
                    </a>
                    <a href="https://www.weibo.com/2236588723/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank">
                      <img class="social-icon" src="../assets/weibo.png"/>  
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component
export default class Foot extends Vue{
    
}
</script>

<style lang="scss" scoped>
    .foot-div{
        width: 100%;
        background-color: #FBFCFF;
        .foot-box{
            width: 1200px;
            height: 600px;
            margin: 0 auto;
            padding: 0 56px;
            padding-top: 209px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .foot-user-msg{
                .user-title{
                    color: #333;
                    font-size: 16px;
                    line-height:21px;
                    font-weight:bold;
                    padding-bottom: 30px;
                }
                .user-des{
                    color: #999999;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
            .user-relation{
                .relation-title{
                    color: #333;
                    font-size: 16px;
                    font-weight: bold;
                }
                .relation-way{
                    color: #666666;
                    font-size: 16px;
                    line-height:21px;
                    padding-top: 30px;
                }
            }
            .social-link{
                .social-link-title{
                    color: #333;
                    font-size: 16px;
                    font-weight: bold;
                    line-height:21px;
                    padding-bottom: 30px;
                }
                .social-icon-box{
                    .social-icon{
                        width: 43px;
                        height: 43px;
                        margin-right: 17px;
                    }
                }
            }
        }
    }
</style>
