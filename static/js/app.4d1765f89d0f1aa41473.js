webpackJsonp([1],{"+2YM":function(e,t){},"5W1q":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"app"},s,!1,function(e){n("oE69")},null,null).exports,a=n("/ocq"),r=n("Ubyc"),c={data:function(){return{isShow:!1,p5obj:null}},methods:{onComplete:function(){this.isShow=!0},enterBolg:function(){window.location.href="content/archives"},onP5Created:function(e){this.p5obj=e}},components:{VueTyper:r.VueTyper},mounted:function(){new(n("NY8I"))(function(e){var t=2,n=0,o=e.createVector(0,0),s=(e.createVector(0,0),e.createVector(0,0));e.setup=function(t){e.createCanvas(window.innerWidth,300),e.ellipse(e.width/2,e.height/2,500,500)},e.draw=function(i){s=e.createVector(e.mouseX,e.mouseY),e.background(30,144,255);var a=3*e.frameCount,r=50*e.sin(e.radians(a));e.push(),e.translate(0,e.height/2),e.fill(124),e.ellipse(n,r,50,50),e.pop(),((n+=t)>e.width||n<0)&&(t*=-1),e.fill(0),o.add(s.sub(o).normalize().mult(7)),e.ellipse(o.x,o.y,20,20)}})}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4 is-offset-1"},[n("section",{staticClass:"section is-primary"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title"},[e._v("When you are old ")]),e._v(" "),n("h2",[n("vue-typer",{attrs:{text:"\nWhen you are old and grey and full of sleep. \nAnd nodding by the fire, take down this book. \nAnd slowly read, and dream of the soft look \nYour eyes had once, and of their shadows deep. \nHow many loved your moments of glad grace. \nAnd loved your beauty with love false or true. \nBut one man loved the pilgrim soul in you. \nAnd loved the sorrows of your changing face; \nAnd bending down beside the glowing bars, \nMurmur, a little sadly, how Love fled \nAnd paced upon the mountains overhead \nAnd hid his face amid a crowd of stars.",repeat:"0",typeDelay:"10"},on:{completed:e.onComplete}})],1)])])]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"column is-2 "},[n("section",{staticClass:"section is-primary"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"rows"},[n("div",{staticClass:"row is-6 is-offset-5"},[n("a",{staticClass:"button is-primary myButton",on:{click:e.enterBolg}},[e._v("进入博客")])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column is-4"},[t("section",{staticClass:"section is-primary"},[t("div",{attrs:{calss:"hero-body"}},[t("img",{attrs:{src:"/static/imgs/manli.jpg"}})])])])}]};var d=n("VU/8")(c,l,!1,function(e){n("+2YM")},null,null).exports;o.a.use(a.a);var u=new a.a({routes:[{path:"/",name:"BolgIndex",component:d}]});n("5W1q");o.a.config.productionTip=!1,new o.a({el:"#app",router:u,template:"<App/>",components:{App:i}})},oE69:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4d1765f89d0f1aa41473.js.map