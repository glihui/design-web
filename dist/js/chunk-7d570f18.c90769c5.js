(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d570f18"],{"121b":function(t,s,i){"use strict";var a=i("1244"),e=i.n(a);e.a},1244:function(t,s,i){},"12f1":function(t,s,i){t.exports=i.p+"img/join_us.4aaba8c6.png"},1873:function(t,s,i){t.exports=i.p+"img/pet.302e528e.png"},2192:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"other-like"},[i("div",{staticClass:"other-like-title"},[t._v(" YOU MAY ALSO LIKE ")]),i("div",{staticClass:"like-item-box"},t._l(t.likeProductList,(function(s,a){return i("div",{key:a,staticClass:"like-item",on:{click:function(i){return t.jumpToPage(s.link)}}},[i("div",{staticClass:"product-img"},[i("img",{attrs:{src:s.img}})]),i("div",{staticClass:"product-name"},[t._v(" "+t._s(s.title)+" ")]),i("div",{staticClass:"product-time"},[t._v(" "+t._s(s.time)+" ")])])})),0)])},e=[],c=i("d4ec"),o=i("bee2"),n=i("99de"),l=i("7e84"),r=i("262e"),p=i("9ab4"),d=i("60a3"),v=function(t){function s(){return Object(c["a"])(this,s),Object(n["a"])(this,Object(l["a"])(s).apply(this,arguments))}return Object(r["a"])(s,t),Object(o["a"])(s,[{key:"jumpToPage",value:function(t){this.$route.path!=t&&this.$router.push(t)}}]),s}(d["d"]);p["a"]([Object(d["b"])({type:Array,default:function(){return[{img:i("1873"),title:"WEPET - ANDROID APP DESIGN",time:"2018",link:"/pet"},{img:i("b5a0"),title:"ILLUSTRATION",time:"2019-2020",link:"/iiiustration"},{img:i("4392"),title:"SPACE - WEB DESIGN",time:"2019",link:"/space"}]}})],v.prototype,"likeProductList",void 0),v=p["a"]([d["a"]],v);var b=v,u=b,f=(i("47ab"),i("2877")),x=Object(f["a"])(u,a,e,!1,null,"10395e69",null);s["a"]=x.exports},3365:function(t,s,i){"use strict";var a=i("cab6"),e=i.n(a);e.a},"42c4":function(t,s,i){t.exports=i.p+"img/fitness.ed7b726a.png"},4392:function(t,s,i){t.exports=i.p+"img/web_furniture.f2e88fde.png"},"47ab":function(t,s,i){"use strict";var a=i("9b6e"),e=i.n(a);e.a},"772c":function(t,s,i){t.exports=i.p+"img/landingpage.9b6212f0.png"},8615:function(t,s,i){t.exports=i.p+"img/about.7fc3d479.png"},9208:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.btnFlag,expression:"btnFlag"}],staticClass:"back_top",on:{click:t.backTop}},[a("img",{attrs:{src:i("a53e")}})])},e=[],c=i("d4ec"),o=i("bee2"),n=i("99de"),l=i("7e84"),r=i("262e"),p=i("9ab4"),d=i("60a3"),v=function(t){function s(){var t;return Object(c["a"])(this,s),t=Object(n["a"])(this,Object(l["a"])(s).apply(this,arguments)),t.btnFlag=!1,t.scrollTop=0,t}return Object(r["a"])(s,t),Object(o["a"])(s,[{key:"mounted",value:function(){window.addEventListener("scroll",this.scrollToTop)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.scrollToTop)}},{key:"backTop",value:function(){var t=this,s=setInterval((function(){var i=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+i,0===t.scrollTop&&clearInterval(s)}),16)}},{key:"scrollToTop",value:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.scrollTop>70?this.btnFlag=!0:this.btnFlag=!1}}]),s}(d["d"]);p["a"]([Object(d["c"])()],v.prototype,"btnFlag",void 0),p["a"]([Object(d["c"])()],v.prototype,"scrollTop",void 0),v=p["a"]([Object(d["a"])({})],v);var b=v,u=b,f=(i("de0d"),i("2877")),x=Object(f["a"])(u,a,e,!1,null,"41e5a579",null);s["a"]=x.exports},"9b6e":function(t,s,i){},"9d8f":function(t,s,i){},a53e:function(t,s,i){t.exports=i.p+"img/back-top.6957921c.png"},b5a0:function(t,s,i){t.exports=i.p+"img/illustration.f30aee9b.png"},c24f:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"space-box"},[t._m(0),i("div",{staticClass:"space-box-2"},[i("el-carousel",{class:["carousel-"+t.currentIndex],attrs:{autoplay:!1,arrow:"always"},on:{change:t.changeIndex}},t._l(t.spaceList,(function(s,a){return i("el-carousel-item",{key:a,class:["carousel-item-"+t.currentIndex]},[i("img",{attrs:{src:s.img}})])})),1)],1),i("MayLike",{attrs:{likeProductList:t.likeProductList}}),i("back-top")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"space-box-1"},[a("div",{staticClass:"space-box-1-div"},[a("div",{staticClass:"space-box-1-title"},[t._v(" Typography & Font Size ")]),a("div",{staticClass:"font-box"},[a("div",{staticClass:"font-box-left"},[a("div",{staticClass:"font-box-title"},[t._v("Arial Black")]),a("div",{staticClass:"font-box-content"},[t._v("28px 24px 22px 16px 14px")])]),a("div",{staticClass:"font-box-right"},[t._v(" A B C D E F G H I J K L M N O P Q "),a("br"),t._v(" R S T U V W X Y Z a b c d e f g h I "),a("br"),t._v(" j k l m n o p q r s t u v w x y z 1 2 "),a("br"),t._v(" 3 4 5 6 7 8 9 0 ; : “ “ ‘ , . / < > ? ~ !"),a("br"),t._v(" @ # $ % ^ & * ( ) ")])]),a("div",{staticClass:"font-box font-box-2"},[a("div",{staticClass:"font-box-left"},[a("div",{staticClass:"font-box-title font-box-title-2"},[t._v("PingFang HK")]),a("div",{staticClass:"font-box-content"},[t._v("28px 24px 22px 16px 14px 12px")])]),a("div",{staticClass:"font-box-right font-box-right-2"},[t._v(" A B C D E F G H I J K L M N O P Q "),a("br"),t._v(" R S T U V W X Y Z a b c d e f g h I "),a("br"),t._v(" j k l m n o p q r s t u v w x y z 1 2 "),a("br"),t._v(" 3 4 5 6 7 8 9 0 ; : “ “ ‘ , . / < > ? ~ ! "),a("br"),t._v(" @ # $ % ^ & * ( ) ")])]),a("div",{staticClass:"space-box-1-title space-box-2-title"},[t._v(" Typography & Font Size ")]),a("div",{staticClass:"css-box"},[a("div",{staticClass:"css-box-left"},[a("div",{staticClass:"css-box-top"},[a("span",[t._v("Main Background Color:")]),a("span",[t._v("#FFFFFF")])]),a("div",{staticClass:"css-box-bottom"},[a("div",{staticClass:"circle"})])]),a("div",{staticClass:"css-box-right"},[a("div",{staticClass:"css-box-right-sub"},[a("div",{staticClass:"css-box-top"},[a("div",[t._v("Second Background Color:")]),a("div",[t._v("#F5F5F5")])]),a("div",{staticClass:"css-box-bottom"},[a("div",{staticClass:"circle circle-1"})])])])]),a("div",{staticClass:"css-box"},[a("div",{staticClass:"css-box-left"},[a("div",{staticClass:"css-box-top"},[a("span",[t._v("Main UI Color:")]),a("span",[t._v("#E3A700")])]),a("div",{staticClass:"css-box-bottom"},[a("div",{staticClass:"circle circle-2"})])])]),a("div",{staticClass:"css-box"},[a("div",{staticClass:"css-box-left"},[a("div",{staticClass:"css-box-top"},[a("span",[t._v("Text #1 Color:")]),a("span",[t._v("#333333")])]),a("div",{staticClass:"css-box-bottom"},[a("div",{staticClass:"circle circle-3"})])]),a("div",{staticClass:"css-box-right"},[a("div",{staticClass:"css-box-right-sub"},[a("div",{staticClass:"css-box-top"},[a("div",[t._v("Text #2 Color:")]),a("div",[t._v("#666666")])]),a("div",{staticClass:"css-box-bottom"},[a("div",{staticClass:"circle circle-4"})])])])])]),a("div",{staticClass:"landingpage-img"},[a("img",{attrs:{src:i("772c")}})])])}],c=i("d4ec"),o=i("bee2"),n=i("99de"),l=i("7e84"),r=i("262e"),p=i("9ab4"),d=i("60a3"),v=i("2192"),b=i("9208"),u=function(t){function s(){var t;return Object(c["a"])(this,s),t=Object(n["a"])(this,Object(l["a"])(s).apply(this,arguments)),t.likeProductList=[{img:i("42c4"),title:"POWER FITNESS APP",time:"2018",link:"/power_fitness"},{img:i("b5a0"),title:"ILLUSTRATION",time:"2019-2020",link:"/iiiustration"},{img:i("4392"),title:"SPACE - WEB DESIGN",time:"2019",link:"/space"}],t.spaceList=[{img:i("d305")},{img:i("12f1")},{img:i("8615")}],t.currentIndex=0,t}return Object(r["a"])(s,t),Object(o["a"])(s,[{key:"changeIndex",value:function(t){this.currentIndex=t}}]),s}(d["d"]);p["a"]([Object(d["c"])()],u.prototype,"likeProductList",void 0),p["a"]([Object(d["c"])()],u.prototype,"spaceList",void 0),p["a"]([Object(d["c"])()],u.prototype,"currentIndex",void 0),u=p["a"]([Object(d["a"])({components:{MayLike:v["a"],BackTop:b["a"]}})],u);var f=u,x=f,g=(i("121b"),i("3365"),i("2877")),m=Object(g["a"])(x,a,e,!1,null,"d6871250",null);s["default"]=m.exports},cab6:function(t,s,i){},d305:function(t,s,i){t.exports=i.p+"img/main_page.b80a3948.png"},de0d:function(t,s,i){"use strict";var a=i("9d8f"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-7d570f18.c90769c5.js.map