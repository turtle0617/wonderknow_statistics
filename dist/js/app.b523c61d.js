(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],s[i]&&p.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wonderKnowStatistic/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var a=n("199c"),s=n.n(a);e["default"]=s.a},"281d":function(t,e,n){"use strict";var a=n("3d9b"),s=n.n(a);s.a},2856:function(t,e,n){},"300e":function(t,e,n){"use strict";var a=n("600c"),s=n.n(a);s.a},"3d9b":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var a=n("dffb"),s=n("23be"),r=(n("5c0b"),n("2877")),i=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i.options.__file="App.vue",e["default"]=i.exports},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("3dfd"),s=n("2b0e"),r=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("MemberDisplay",{attrs:{talks:t.talks},on:{"send-member-List":t.receivememberList}}),n("div",{staticClass:"members_month"},[n("h1",[t._v("每月統計:")]),n("ve-line",{attrs:{data:t.all_Month_Talk.chartData,"data-zoom":t.dataZoom,"after-set-option":t.membersAfterOption}})],1),n("ul",t._l(t.member_List,function(e,a){return n("li",{key:a},[n("div",{staticClass:"speaker",on:{click:function(n){t.checkChart(e)}}},[n("img",{attrs:{src:e.photo,alt:""}}),t._v(" "+t._s(e.speaker)+"\n      ")]),n("h3",[t._v("總演講次數: "+t._s(e.talk_count))]),e.showChart?n("div",[n("ve-line",{attrs:{data:e.chartData,settings:t.chartSettings,"after-set-option":function(e){return t.memberOption(e,a)}}})],1):t._e()])}))],1)},o=[],l=(n("aabe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),c=[],u={props:["talks"],computed:{isData:function(){return 0!==this.talks.length}},mounted:function(){this.$nextTick(()=>{setTimeout(this.sendMember,2e3)})},methods:{sendMember:function(){let t=this.MemberTalkStatistics(),e=t[0],n=t[1],a=e.length;0!=a&&this.$emit("send-member-List",e,n)},MemberTalkStatistics:function(){let t,e,n=Array.from(this.talks),a={chartData:{columns:["month","month_talks_count"],rows:this.getMonthInYears()}};return e=this.generateMemberList(n),t=this.calculMemberAllTalk(a,e,n),t},generateMemberList:function(t){let e=[];return e=t.map(t=>{return t.speaker}).filter((t,e,n)=>{return n.indexOf(t)===e}).map(t=>{let e=this.getMonthInYears();return{speaker:t,talk_count:0,talks:[],chartData:{columns:["month","month_talks_count"],rows:e},showChart:!0}}),e},calculMemberAllTalk:function(t,e,n){return e=e.map(e=>{return n.forEach(n=>{let a=Object.keys(e).includes("photo"),s=e.speaker,r=n.speaker===s;if(r){let s=n.speech_date.slice(0,7);if(e.talks.push({class:n.class,title:n.title,message:n.message,speech_date:n.speech_date}),e.talk_count++,e.chartData.rows=this.calculMonthTalks(e.chartData.rows,s),!a){let t=n.speaker_img.includes("imgur");t||(n.speaker_img="/goodidea.png"),e.photo=n.speaker_img}t.chartData.rows=this.calculMonthTalks(t.chartData.rows,s)}}),e}),[e,t]},calculMonthTalks:function(t,e){return t.map(t=>{return t.month===e?(t.month_talks_count++,t):t})},getMonthInYears:function(){let t=new Date,e="2017",n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,a=t.getFullYear(),s=a-e,r=6+parseInt(n)+1,i=[],o=2017,l=6;s>1&&(r+=12);for(let c=0;c<r;c++)l<10&&(l="0"+l),l>12?(o++,l-=12,i.push({month:o+"-0"+l,month_talks_count:0}),l++):(i.push({month:o+"-"+l,month_talks_count:0}),l++);return i}}},d=u,p=(n("281d"),n("2877")),h=Object(p["a"])(d,l,c,!1,null,null,null);h.options.__file="Member.vue";var m=h.exports,f=n("bc3a"),_=n.n(f);let k="https://devche.com/api/speech/data";function v(){return _.a.get(k)}var b=v,g={name:"home",data:function(){return{talks:[],member_List:[],all_Month_Talk:[],chartSettings:{max:[20]},dataZoom:[{type:"slider",show:!0,start:0,end:100}]}},mounted:function(){b().then(t=>{this.talks=t.data.result})},components:{MemberDisplay:m},methods:{checkChart:function(t){t.showChart=!t.showChart},receivememberList:function(t,e){this.member_List=t,this.all_Month_Talk=e,this.calculMaxTalkCount(e)},calculMaxTalkCount:function(t){let e=t.chartData.rows.map(t=>{return t.month_talks_count}),n=e.reduce(function(t,e){return Math.max(t,e)});this.chartSettings.max=[n]},membersAfterOption:function(t){let e,n,a=t._dom,s=document.getElementById("app"),r=!1;t.on("dataZoom",t=>{e=parseInt(t.start),n=parseInt(t.end)}),a.addEventListener("mousedown",t=>{let e=t.offsetY>360;e&&(r=!r)}),s.addEventListener("mouseup",()=>{r&&(r=!r,this.dynamicZoomSlider(e,n))})},memberOption:function(t,e){this.member_List[e].echartInit=t},dynamicZoomSlider:function(t,e){let n={dataZoom:[{type:"slider",show:!1,start:t,end:e}]};this.member_List.forEach(t=>{t.echartInit.setOption(n)})}}},y=g,D=Object(p["a"])(y,i,o,!1,null,null,null);D.options.__file="Home.vue";var M=D.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontend"},[n("forntendDisplay",{attrs:{talks:t.talks}}),n("getData",{on:{"send-datas":t.receiveData}})],1)},w=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.frontendTalks,function(e,a){return n("li",{key:a},[n("h1",[t._v("主題："+t._s(e.title))]),n("div",{staticClass:"talk"},[n("div",{staticClass:"speaker"},[n("img",{attrs:{src:e.speaker_img,alt:""}}),n("span",[t._v(t._s(e.speaker))])]),n("div",{staticClass:"Summary"},[t._v("\n        "+t._s(e.message)+"\n      ")])]),n("label",[t._v("日期："+t._s(e.speech_date))])])}))},T=[],x={props:["talks"],methods:{isFrontend:function(t){const e=["Front-end","CSS","HTML","Vue"];let n=t.speaker_img;return t.speaker_img=this.checkPhoto(n),e.includes(t.class)},checkPhoto:function(t){let e=t.includes("imgur");return e?t:(t="/goodidea.png",t)}},computed:{frontendTalks:function(){let t=this.talks.filter(this.isFrontend);return t.reverse()}}},S=x,j=Object(p["a"])(S,C,T,!1,null,null,null);j.options.__file="forntendDisplay.vue";var E=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},L=[];let P="https://devche.com/api/speech/data";var I={created:function(){_.a.get(P).then(t=>{this.$emit("send-datas",t.data.result)})}},A=I,B=Object(p["a"])(A,$,L,!1,null,null,null);B.options.__file="getData.vue";var F=B.exports,Z={name:"frontend",data:function(){return{talks:[]}},components:{forntendDisplay:E,getData:F},methods:{receiveData:function(t){this.talks=t}}},Y=Z,J=Object(p["a"])(Y,O,w,!1,null,null,null);J.options.__file="frontend.vue";var H=J.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backend"},[n("backendDisplay",{attrs:{talks:t.talks}}),n("getData",{on:{"send-datas":t.receiveData}})],1)},K=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.backendTalks,function(e,a){return n("li",{key:a},[n("h1",[t._v("主題："+t._s(e.title))]),n("div",{staticClass:"talk"},[n("div",{staticClass:"speaker"},[n("img",{attrs:{src:e.speaker_img,alt:""}}),n("span",[t._v(t._s(e.speaker))])]),n("div",{staticClass:"Summary"},[t._v("\n        "+t._s(e.message)+"\n      ")])]),n("label",[t._v("日期："+t._s(e.speech_date))])])}))},V=[],q={props:["talks"],methods:{isBackend:function(t){const e=["Backend-end","backend-end","Security","NodeJS"];let n=t.speaker_img;return t.speaker_img=this.checkPhoto(n),e.includes(t.class)},checkPhoto:function(t){let e=t.includes("imgur");return e?t:(t="/goodidea.png",t)}},computed:{backendTalks:function(){let t=this.talks.filter(this.isBackend);return t.reverse()}}},G=q,Q=(n("300e"),Object(p["a"])(G,N,V,!1,null,"492d0f49",null));Q.options.__file="backendDisplay.vue";var R=Q.exports,U={name:"backend",data:function(){return{talks:[]}},components:{backendDisplay:R,getData:F},methods:{receiveData:function(t){this.talks=t}}},W=U,X=Object(p["a"])(W,z,K,!1,null,null,null);X.options.__file="backend.vue";var tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backend"},[n("iosDisplay",{attrs:{talks:t.talks}}),n("getData",{on:{"send-datas":t.receiveData}})],1)},nt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.iosTalks,function(e,a){return n("li",{key:a},[n("h1",[t._v("主題："+t._s(e.title))]),n("div",{staticClass:"talk"},[n("div",{staticClass:"speaker"},[n("img",{attrs:{src:e.speaker_img,alt:""}}),n("span",[t._v(t._s(e.speaker))])]),n("div",{staticClass:"Summary"},[t._v("\n        "+t._s(e.message)+"\n      ")])]),n("label",[t._v("日期："+t._s(e.speech_date))])])}))},st=[],rt={props:["talks"],methods:{isIOS:function(t){const e=["IOS"];let n=t.speaker_img;return t.speaker_img=this.checkPhoto(n),e.includes(t.class)},checkPhoto:function(t){let e=t.includes("imgur");return e?t:(t="/goodidea.png",t)}},computed:{iosTalks:function(){let t=this.talks.filter(this.isIOS);return t.reverse()}}},it=rt,ot=(n("68e7"),Object(p["a"])(it,at,st,!1,null,"df1daa10",null));ot.options.__file="iosDisplay.vue";var lt=ot.exports,ct={name:"backend",data:function(){return{talks:[]}},components:{iosDisplay:lt,getData:F},methods:{receiveData:function(t){this.talks=t}}},ut=ct,dt=Object(p["a"])(ut,et,nt,!1,null,null,null);dt.options.__file="ios.vue";var pt=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backend"},[n("androidDisplay",{attrs:{talks:t.talks}}),n("getData",{on:{"send-datas":t.receiveData}})],1)},mt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.androidTalks,function(e,a){return n("li",{key:a},[n("h1",[t._v("主題："+t._s(e.title))]),n("div",{staticClass:"talk"},[n("div",{staticClass:"speaker"},[n("img",{attrs:{src:e.speaker_img,alt:""}}),n("span",[t._v(t._s(e.speaker))])]),n("div",{staticClass:"Summary"},[t._v("\n        "+t._s(e.message)+"\n      ")])]),n("label",[t._v("日期："+t._s(e.speech_date))])])}))},_t=[],kt={props:["talks"],methods:{isAndroid:function(t){const e=["Android"];let n=t.speaker_img;return t.speaker_img=this.checkPhoto(n),e.includes(t.class)},checkPhoto:function(t){let e=t.includes("imgur");return e?t:(t="/goodidea.png",t)}},computed:{androidTalks:function(){let t=this.talks.filter(this.isAndroid);return t.reverse()}}},vt=kt,bt=(n("ee09"),Object(p["a"])(vt,ft,_t,!1,null,"cf11ac98",null));bt.options.__file="androidDisplay.vue";var gt=bt.exports,yt={name:"backend",data:function(){return{talks:[]}},components:{androidDisplay:gt,getData:F},methods:{receiveData:function(t){this.talks=t}}},Dt=yt,Mt=Object(p["a"])(Dt,ht,mt,!1,null,null,null);Mt.options.__file="android.vue";var Ot=Mt.exports;s["a"].use(r["a"]);var wt=new r["a"]({routes:[{path:"/",name:"home",component:M},{path:"/Frontend",name:"Frontend",component:H},{path:"/Backend",name:"Backend",component:tt},{path:"/ios",name:"ios",component:pt},{path:"/android",name:"android",component:Ot}]}),Ct=n("2819"),Tt=n.n(Ct);s["a"].use(Tt.a),s["a"].config.productionTip=!1,new s["a"]({router:wt,render:t=>t(a["default"])}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),s=n.n(a);s.a},"600c":function(t,e,n){},"68e7":function(t,e,n){"use strict";var a=n("b127"),s=n.n(a);s.a},b127:function(t,e,n){},be1c:function(t,e,n){},dffb:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Members")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/Frontend"}},[t._v("Front-end")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/Backend"}},[t._v("Back-end")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/ios"}},[t._v("IOS")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/android"}},[t._v("Android")]),t._v(" |\n  ")],1),n("router-view")],1)},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},ee09:function(t,e,n){"use strict";var a=n("be1c"),s=n.n(a);s.a}});
//# sourceMappingURL=app.b523c61d.js.map