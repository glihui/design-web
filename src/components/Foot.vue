<template>
    <div class="foot-div">
        <div class="foot-box">
            <div class="foot-user-msg">
                <h1 class="user-title">Kristen Shen</h1>
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
                    <img class="social-icon"/>
                    <img class="social-icon"/>
                    <img class="social-icon"/>
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
        background-color: #fbfcff;
        .foot-box{
            width: 1200px;
            height: 600px;
            margin: 0 auto;
            padding: 0 55px;
            padding-top: 200px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .foot-user-msg{
                .user-title{
                    color: #333;
                    font-size: 15px;
                    padding-bottom: 25px;
                }
                .user-des{
                    color: #6d6d6d;
                    font-size: 15px;
                    line-height: 24px;
                }
            }
            .user-relation{
                .relation-title{
                    color: #333;
                    font-size: 15px;
                    font-weight: bold;
                }
                .relation-way{
                    color: #6d6d6d;
                    padding-top: 30px;
                }
            }
            .social-link{
                .social-link-title{
                    color: #333;
                    font-size: 15px;
                    font-weight: bold;
                    padding-bottom: 30px;
                }
                .social-icon-box{
                    .social-icon{
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin-right: 16px;
                        background-color: orange;
                    }
                }
            }
        }
    }
</style>
