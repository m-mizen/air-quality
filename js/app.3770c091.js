(function(e){function t(t){for(var n,c,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1409afb0"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/air-quality/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"3bad":function(e,t,r){e.exports=r.p+"img/target-focus.d20bec82.svg"},4601:function(e,t,r){},"4c14":function(e,t,r){},"92d3":function(e,t,r){"use strict";r("4c14")},"9cdc":function(e,t,r){"use strict";r("c701")},"9eee":function(e,t,r){},b6d5:function(e,t,r){"use strict";r("4601")},b94f:function(e,t,r){e.exports=r.p+"img/arrow.c4bb6fdb.svg"},c701:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=Object(n["g"])("div",{class:"app-logo"}," Air Quality ",-1),o={id:"nav"},c=Object(n["f"])("My Air Quality"),i=Object(n["f"])(" | "),u=Object(n["f"])("About"),l=Object(n["g"])("footer",null,null,-1);function s(e,t){var r=Object(n["t"])("router-link"),s=Object(n["t"])("router-view");return Object(n["m"])(),Object(n["d"])("div",{id:"app",class:{"dark-theme":e.darkTheme}},[Object(n["g"])("header",null,[a,Object(n["g"])("nav",o,[Object(n["g"])(r,{to:"/"},{default:Object(n["z"])((function(){return[c]})),_:1}),i,Object(n["g"])(r,{to:"/about"},{default:Object(n["z"])((function(){return[u]})),_:1})])]),Object(n["g"])("main",null,[Object(n["g"])(s)]),l],2)}var b=Object(n["h"])({setup:function(){return{darkTheme:!1}}});r("9cdc");b.render=s;var d=b,f=r("9483");Object(f["a"])("".concat("/air-quality/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var p=r("8c4f"),v=Object(n["B"])("data-v-0b05692a");Object(n["p"])("data-v-0b05692a");var h={class:"home"},j={key:0,class:"intro"},O=Object(n["g"])("h1",null,"My Air Quality",-1);Object(n["n"])();var y=v((function(e,t){var r=Object(n["t"])("use-location"),a=Object(n["t"])("air-quality-result");return Object(n["m"])(),Object(n["d"])("div",h,[e.state.airQuality?Object(n["g"])(a,{key:1,"air-quality":e.state.airQuality},null,8,["air-quality"]):(Object(n["m"])(),Object(n["d"])("div",j,[O,Object(n["g"])(r,{"onUser-location":e.handleUserLocation},null,8,["onUser-location"])]))])})),g=(r("96cf"),r("1da1")),m=r("3bad"),w=r.n(m),k=Object(n["B"])("data-v-8f66fe10");Object(n["p"])("data-v-8f66fe10");var x=Object(n["g"])("span",null,"Use my location",-1),Q=Object(n["g"])("img",{src:w.a,alt:"Target"},null,-1),q=Object(n["g"])("div",{id:"location-description"},[Object(n["g"])("p",null,"Click above to view the pollution levels in your local area."),Object(n["g"])("p",null," For more accurate results please use this on a device with location services, otherwise it will estimate your location based on your IP. ")],-1);Object(n["n"])();var A,_=k((function(e,t){return Object(n["m"])(),Object(n["d"])("div",null,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return e.handleClick.apply(e,arguments)}),"aria-describedby":"location-description"},[x,Q]),q])}));function E(){return P.apply(this,arguments)}function P(){return P=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]&&r[0],t||!A){e.next=3;break}return e.abrupt("return",A);case 3:if(window.navigator.geolocation){e.next=6;break}return console.log("Geolocation not supported"),e.abrupt("return",null);case 6:return e.prev=6,e.next=9,new Promise((function(e,t){window.navigator.geolocation.getCurrentPosition((function(t){var r=t.coords;e(r)}),(function(e){t(e)}))}));case 9:return A=e.sent,e.abrupt("return",A);case 13:return e.prev=13,e.t0=e["catch"](6),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[6,13]])}))),P.apply(this,arguments)}var C=Object(n["h"])({emits:["user-location"],setup:function(e,t){var r=t.emit,n=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,t&&r("user-location",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleClick:n}}});r("b6d5");C.render=_,C.__scopeId="data-v-8f66fe10";var R=C,T=(r("a4d3"),r("e01a"),r("b94f")),U=r.n(T),M=Object(n["B"])("data-v-ab9b4ff2");Object(n["p"])("data-v-ab9b4ff2");var S={class:"air-quality-result"},I={class:"title"},L={class:"city"},B={class:"country"},H={key:0,class:"pollution"},F=Object(n["g"])("h2",null,"Air Quality Index",-1),G={class:"aqius"},N=Object(n["f"])(" (good) "),W={key:1,class:"aqi-explained"},z={key:1,class:"weather"},J=Object(n["g"])("h2",null,"Weather",-1),V=Object(n["g"])("dt",null,"Humidity:",-1),D=Object(n["g"])("dt",null,"Tempreture:",-1),K=Object(n["g"])("dt",null,"Wind:",-1),X=Object(n["g"])("dt",null,"Air Pressure:",-1);Object(n["n"])();var Y=M((function(e,t){var r,a,o,c,i,u;return Object(n["m"])(),Object(n["d"])("div",S,[Object(n["g"])("div",I,[Object(n["g"])("h1",L,Object(n["v"])(null===(r=e.airQuality)||void 0===r?void 0:r.city),1),Object(n["g"])("p",B,Object(n["v"])(null===(a=e.airQuality)||void 0===a?void 0:a.country),1)]),(null===(o=e.airQuality)||void 0===o||null===(c=o.current)||void 0===c?void 0:c.pollution)?(Object(n["m"])(),Object(n["d"])("div",H,[F,Object(n["g"])("span",G,Object(n["v"])(e.airQuality.current.pollution.aqius),1),N,e.state.showExplination?Object(n["e"])("",!0):(Object(n["m"])(),Object(n["d"])("a",{key:0,href:"#",onClick:t[1]||(t[1]=Object(n["A"])((function(t){return e.state.showExplination=!0}),["prevent"]))}," What is this? ")),e.state.showExplination?(Object(n["m"])(),Object(n["d"])("div",W,[(Object(n["m"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(e.aqiExplained,(function(e){return Object(n["m"])(),Object(n["d"])("p",{key:e.level},Object(n["v"])(e.description),1)})),128)),Object(n["g"])("a",{href:"#",onClick:t[2]||(t[2]=Object(n["A"])((function(t){return e.state.showExplination=!1}),["prevent"]))},"Close")])):Object(n["e"])("",!0)])):Object(n["e"])("",!0),(null===(i=e.airQuality)||void 0===i||null===(u=i.current)||void 0===u?void 0:u.weather)?(Object(n["m"])(),Object(n["d"])("div",z,[J,Object(n["g"])("dl",null,[V,Object(n["g"])("dd",null,Object(n["v"])(e.airQuality.current.weather.hu)+"%",1),D,Object(n["g"])("dd",null,Object(n["v"])(e.airQuality.current.weather.tp)+"℃",1),K,Object(n["g"])("dd",null,[Object(n["f"])(Object(n["v"])(e.airQuality.current.weather.wd)+"° ",1),Object(n["g"])("img",{class:"arrow",src:U.a,style:{transform:"rotate(".concat(e.airQuality.current.weather.wd,"deg)")}},null,4)]),Object(n["g"])("dd",null,Object(n["v"])(3.6*e.airQuality.current.weather.ws)+"km/h ",1),X,Object(n["g"])("dd",null,Object(n["v"])(e.airQuality.current.weather.pr)+"mb",1)])])):Object(n["e"])("",!0)])})),Z=Object(n["h"])({props:{airQuality:null},setup:function(e){var t=Object(n["q"])({showExplination:!1});Object(n["y"])((function(){return e.airQuality}),(function(){console.log(e.airQuality)}));var r=[{color:"rgb(0, 228, 0)",min:0,max:50,level:"Good",description:"Air quality is satisfactory, and air pollution poses little or no risk."},{color:"yellow",min:51,max:100,level:"Moderate",description:"Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."},{color:"rgb(255, 126, 0)",min:101,max:150,level:"Unhealthy for Sensitive Groups",description:"Members of sensitive groups may experience health effects. The general public is less likely to be affected."},{color:"red",min:151,max:200,level:"Unhealthy",description:"Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."},{color:"rgb(143, 63, 151)",min:201,max:300,level:"Very Unhealthy",description:"Health alert: The risk of health effects is increased for everyone."},{color:"rgb(126, 0, 35 )",min:301,max:1e6,level:"Unhealthy",description:"Health warning of emergency conditions: everyone is more likely to be affected."}];return{state:t,aqiExplained:r}}});r("e97f");Z.render=Y,Z.__scopeId="data-v-ab9b4ff2";var $=Z,ee=(r("99af"),"https://api.airvisual.com/v2");function te(e,t){return re.apply(this,arguments)}function re(){return re=Object(g["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ee,"/nearest_city?lat=").concat(t,"&lon=").concat(r,"&key=").concat("868fee32-8618-4fb8-8eb2-48e547cf8603"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,"success"===(null===a||void 0===a?void 0:a.status)){e.next=9;break}throw new Error("Error from server");case 9:return e.abrupt("return",a.data);case 12:return e.prev=12,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),re.apply(this,arguments)}function ne(){return ae.apply(this,arguments)}function ae(){return ae=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ee,"/nearest_city?&key=").concat("868fee32-8618-4fb8-8eb2-48e547cf8603"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,"success"===(null===r||void 0===r?void 0:r.status)){e.next=9;break}throw new Error("Error from server");case 9:return e.abrupt("return",r.data);case 12:return e.prev=12,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),ae.apply(this,arguments)}var oe=Object(n["h"])({components:{UseLocation:R,AirQualityResult:$},setup:function(){var e=Object(n["q"])({airQuality:null}),t=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(r){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=6;break}return t.next=3,ne();case 3:n=t.sent,t.next=10;break;case 6:return a=r.latitude,o=r.longitude,t.next=9,te(a,o);case 9:n=t.sent;case 10:e.airQuality=n;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{state:e,handleUserLocation:t}}});r("92d3");oe.render=y,oe.__scopeId="data-v-0b05692a";var ce=oe,ie=[{path:"/",name:"My Air Quality",component:ce},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],ue=Object(p["a"])({history:Object(p["b"])("/air-quality/"),routes:ie}),le=ue;Object(n["c"])(d).use(le).mount("#app")},e97f:function(e,t,r){"use strict";r("9eee")}});
//# sourceMappingURL=app.3770c091.js.map