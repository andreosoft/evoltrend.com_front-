(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6412bcc2"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,o,c=String(a(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=i(t),e=o(e,!0),s)try{return l(t,e)}catch(n){}if(c(t,e))return a(!r.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var r=n("9b43"),a=n("5ca1"),i=n("4bf8"),o=n("1fa8"),c=n("33a4"),s=n("9def"),l=n("f1ae"),u=n("27ee");a(a.S+a.F*!n("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,f,d=i(t),h="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,v=void 0!==p,m=0,y=u(d);if(v&&(p=r(p,b>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(e=s(d.length),n=new h(e);e>m;m++)l(n,m,v?p(d[m],m):d[m]);else for(f=y.call(d),n=new h;!(a=f.next()).done;m++)l(n,m,v?o(f,p,[a.value,m],!0):a.value);return n.length=m,n}})},"21a7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-block"},[n("div",{staticClass:"loader"})])}],i=n("2877"),o={},c=Object(i["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports},"37c8":function(t,e,n){e.f=n("2b4c")},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"38be":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form1",{attrs:{breadcrumbs:[{url:"#/",title:"Домой"},{url:"#/configs/content",title:"Тексты"},{url:"",title:t.data.name}],loading:t.loading},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.data.name))]},proxy:!0},{key:"right",fn:function(){return[n("div",{staticClass:"btn-block"},[n("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$root.goBack()}}},[t._v("Назад")]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"content_update",params:{id:t.data.id}}}},[t._v("Изменить")])],1)]},proxy:!0},{key:"body",fn:function(){return t._l(t.fields,(function(e,r){return n("view1",{key:r,attrs:{field:e,data:t.data}})}))},proxy:!0}])})},a=[],i=n("a3be"),o=n("a171"),c=n("8c49"),s=n("cccc"),l={mixins:[s["a"]],components:{form1:o["a"],view1:c["a"]},data:function(){return{loading:!1,api:i["a"].content,fields:this.$root.tables.content,data:{}}}},u=l,f=n("2877"),d=Object(f["a"])(u,r,a,!1,null,null,null);e["default"]=d.exports},"3a72":function(t,e,n){var r=n("7726"),a=n("8378"),i=n("2d00"),o=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:o.f(t)})}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,n){var r=n("ca5a")("meta"),a=n("d3f4"),i=n("69a8"),o=n("86cc").f,c=0,s=Object.isExtensible||function(){return!0},l=!n("79e5")((function(){return s(Object.preventExtensions({}))})),u=function(t){o(t,r,{value:{i:"O"+ ++c,w:{}}})},f=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";u(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;u(t)}return t[r].w},h=function(t){return l&&b.NEED&&s(t)&&!i(t,r)&&u(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),a=n("0bfb"),i=n("9e1e"),o="toString",c=/./[o],s=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)})):c.name!=o&&s((function(){return c.call(this)}))},"7bbc":function(t,e,n){var r=n("6821"),a=n("9093").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?c(t):a(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("9e1e"),o=n("5ca1"),c=n("2aba"),s=n("67ab").KEY,l=n("79e5"),u=n("5537"),f=n("7f20"),d=n("ca5a"),h=n("2b4c"),b=n("37c8"),p=n("3a72"),v=n("d4c0"),m=n("1169"),y=n("cb7c"),g=n("d3f4"),S=n("4bf8"),_=n("6821"),w=n("6a99"),O=n("4630"),C=n("2aeb"),x=n("7bbc"),L=n("11e9"),j=n("2621"),E=n("86cc"),k=n("0d58"),A=L.f,P=E.f,T=x.f,N=r.Symbol,M=r.JSON,$=M&&M.stringify,D="prototype",F=h("_hidden"),R=h("toPrimitive"),I={}.propertyIsEnumerable,G=u("symbol-registry"),J=u("symbols"),V=u("op-symbols"),H=Object[D],B="function"==typeof N&&!!j.f,K=r.QObject,W=!K||!K[D]||!K[D].findChild,Y=i&&l((function(){return 7!=C(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=A(H,e);r&&delete H[e],P(t,e,n),r&&t!==H&&P(H,e,r)}:P,q=function(t){var e=J[t]=C(N[D]);return e._k=t,e},z=B&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},Q=function(t,e,n){return t===H&&Q(V,e,n),y(t),e=w(e,!0),y(n),a(J,e)?(n.enumerable?(a(t,F)&&t[F][e]&&(t[F][e]=!1),n=C(n,{enumerable:O(0,!1)})):(a(t,F)||P(t,F,O(1,{})),t[F][e]=!0),Y(t,e,n)):P(t,e,n)},U=function(t,e){y(t);var n,r=v(e=_(e)),a=0,i=r.length;while(i>a)Q(t,n=r[a++],e[n]);return t},X=function(t,e){return void 0===e?C(t):U(C(t),e)},Z=function(t){var e=I.call(this,t=w(t,!0));return!(this===H&&a(J,t)&&!a(V,t))&&(!(e||!a(this,t)||!a(J,t)||a(this,F)&&this[F][t])||e)},tt=function(t,e){if(t=_(t),e=w(e,!0),t!==H||!a(J,e)||a(V,e)){var n=A(t,e);return!n||!a(J,e)||a(t,F)&&t[F][e]||(n.enumerable=!0),n}},et=function(t){var e,n=T(_(t)),r=[],i=0;while(n.length>i)a(J,e=n[i++])||e==F||e==s||r.push(e);return r},nt=function(t){var e,n=t===H,r=T(n?V:_(t)),i=[],o=0;while(r.length>o)!a(J,e=r[o++])||n&&!a(H,e)||i.push(J[e]);return i};B||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(V,n),a(this,F)&&a(this[F],t)&&(this[F][t]=!1),Y(this,t,O(1,n))};return i&&W&&Y(H,t,{configurable:!0,set:e}),q(t)},c(N[D],"toString",(function(){return this._k})),L.f=tt,E.f=Q,n("9093").f=x.f=et,n("52a7").f=Z,j.f=nt,i&&!n("2d00")&&c(H,"propertyIsEnumerable",Z,!0),b.f=function(t){return q(h(t))}),o(o.G+o.W+o.F*!B,{Symbol:N});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;rt.length>at;)h(rt[at++]);for(var it=k(h.store),ot=0;it.length>ot;)p(it[ot++]);o(o.S+o.F*!B,"Symbol",{for:function(t){return a(G,t+="")?G[t]:G[t]=N(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),o(o.S+o.F*!B,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ct=l((function(){j.f(1)}));o(o.S+o.F*ct,"Object",{getOwnPropertySymbols:function(t){return j.f(S(t))}}),M&&o(o.S+o.F*(!B||l((function(){var t=N();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=e=r[1],(g(e)||void 0!==t)&&!z(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,$.apply(M,r)}}),N[D][R]||n("32e9")(N[D],R,N[D].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"8c49":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return!0!==t.field.hidden&&"pass"!==t.field.type?n("div",[n("div",{staticClass:"row form-group"},[n("div",{staticClass:"col-sm-4 col-form-label text-right-sm"},[t._v(t._s(t.field.title)+":")]),n("div",{staticClass:"col-sm-8"},["text"==t.field.type?n("div",[n("div",{staticClass:"form-control",staticStyle:{overflow:"auto"},style:{height:t.field.data&&t.field.data.height?t.field.data.height+"px":"600px"},domProps:{innerHTML:t._s(t.data[t.field.name])}})]):"phones"==t.field.type?n("div",[n("table",{staticClass:"table table-bordered"},[t._m(0),n("tbody",t._l(t.jsonparse(t.data[t.field.name]),(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),n("td",[n("div",{staticClass:"form-control"},[t._v(t._s(e.number))])])])})),0)])]):"image"==t.field.type?n("div",[n("a",{attrs:{href:t.api.download+"/"+t.data[t.field.name],target:"_blank"}},[n("img",{staticStyle:{height:"100px"},attrs:{src:t.api.download+"/"+t.data[t.field.name]+"?width=200&height=200"}})])]):"avatar"==t.field.type?n("div",[n("img",{staticClass:"avatar",staticStyle:{height:"100px"},attrs:{src:t.api.download+"/"+t.data[t.field.name]+"?width=100&height=100"}})]):n("div",{staticClass:"form-control"},[t.field.options?[t._v("\n          "+t._s(t.field.options.find((function(e){return e.value==t.data[t.field.name]}))?t.field.options.find((function(e){return e.value==t.data[t.field.name]})).text:"")+"\n        ")]:[t._v(t._s(t.data[t.field.name]))]],2)])])]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),n("th",[t._v("Номер")])])])}],i=n("a3be"),o={props:{data:Object,field:Object},data:function(){return{api:i["a"]}},methods:{jsonparse:function(t){try{return JSON.parse(t)}catch(e){return{}}}}},c=o,s=n("2877"),l=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=l.exports},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},a171:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-fixed"},[n("div",{staticClass:"form-header"},[n("div",{staticClass:"clearfix"},[n("div",{staticClass:"float-left"},[n("div",{staticClass:"row mar-0"},[n("div",{staticClass:"d-none d-md-flex"},[n("h1",[t._t("title")],2),n("breadcrumb",{attrs:{data:t.breadcrumbs}})],1)])]),n("div",{staticClass:"float-right"},[n("div",[t._t("right")],2)])])]),t.loading?n("loader"):t._e(),n("div",{staticClass:"form-body"},[n("div",{staticClass:"form-body-inner"},[t._t("body")],2)])],1)},a=[],i=n("21a7"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumb"},[t._l(t.data,(function(e,r){return[n("li",{key:r,staticClass:"breadcrumb-item",class:{active:""===e.url}},[""!=e.url?n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))]):n("span",[t._v("\n          "+t._s(e.title)+"\n      ")])])]}))],2)},c=[],s={props:{data:Array}},l=s,u=n("2877"),f=Object(u["a"])(l,o,c,!1,null,null,null),d=f.exports,h={components:{loader:i["a"],breadcrumb:d},props:{breadcrumbs:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}}},b=h,p=Object(u["a"])(b,r,a,!1,null,null,null);e["a"]=p.exports},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),o=n("7726"),c=n("32e9"),s=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),d=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=a(h),p=0;p<b.length;p++){var v,m=b[p],y=h[m],g=o[m],S=g&&g.prototype;if(S&&(S[u]||c(S,u,d),S[f]||c(S,f,m),s[m]=d,y))for(v in r)S[v]||i(S,v,r[v],!0)}},cccc:function(t,e,n){"use strict";n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("7f7f");var r=n("bc3a"),a=n.n(r);function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e["a"]={data:function(){return{api:null,loading:!1,data:{}}},created:function(){var t,e=i(this.fields);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.$set(this.data,n.name,null)}}catch(r){e.e(r)}finally{e.f()}this.fetchData()},watch:{$route:"updateRoute"},updateRoute:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e=this.$route.params.id;e&&(this.loading=!0,a.a.get(this.api,{params:{id:e}}).then((function(e){t.loading=!1,Object.assign(t.data,e.data.data)})).catch((function(t){console.log(t)})))}}}},d4c0:function(t,e,n){var r=n("0d58"),a=n("2621"),i=n("52a7");t.exports=function(t){var e=r(t),n=a.f;if(n){var o,c=n(t),s=i.f,l=0;while(c.length>l)s.call(t,o=c[l++])&&e.push(o)}return e}},f1ae:function(t,e,n){"use strict";var r=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}}}]);
//# sourceMappingURL=chunk-6412bcc2.70800a92.js.map