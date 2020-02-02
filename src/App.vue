<template>
  <div id="app">
    <div id="nav">
      <HomeTab/>
    </div>
    <div class="view-content">
      <router-view/>
    </div>
    <Foot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTab from '@/components/HomeTab.vue';
import Foot from '@/components/Foot.vue';

@Component({
  components: {
    HomeTab,
    Foot
  },
})
export default class App extends Vue {
  created() { 
  }
}
</script>

<style lang="scss">
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
a{text-decoration:none}
a:hover{text-decoration:none}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: #fff;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.view-content{
  margin-top: 70px;
}
ul li{
  list-style: none;
}
</style>
