(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bd014d6"],{"4c48":function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("form1",{attrs:{breadcrumbs:[{url:"#/",title:"Домой"},{url:"#/configs/shop_products",title:"Товары"},{url:"",title:t.data.id?t.data.name:"Новый товар"}],loading:t.loading},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.data.id?t.data.name:"Новый товар"))]},proxy:!0},{key:"right",fn:function(){return[a("div",{staticClass:"btn-block"},[a("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.$root.goBack()}}},[t._v("Назад")]),a("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.submitForm()}}},[t._v("Записать")]),a("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.remove()}}},[t._v("Удалить")])])]},proxy:!0},{key:"body",fn:function(){return t._l(t.fields,(function(n,r){return a("edit1",{key:r,attrs:{field:n,values:t.data,error:t.errors[n.name]},on:{input:function(a){Object.assign(t.data,a),t.validate(n.name)}}})}))},proxy:!0}])})},e=[],o=a("a3be"),i=a("a171"),c=a("bc3a"),u=a.n(c),s=a("d665"),l=a("ba05"),d=a("66bf"),f=a("cccc"),h={mixins:[f["a"],l["a"]],components:{form1:i["a"],edit1:d["a"]},data:function(){return{api:o["a"].shop_products,fields:this.$root.tables.shop_products}},methods:{remove:function(){var t=this;confirm("Вы уверены, что хотите удалить?")&&(this.loading=!0,u()({method:"delete",url:this.api,data:{ids:[this.data.id]},params:{}}).then((function(n){t.loading=!1,t.$root.$emit("show-info",{text:"Элемент удален",class:"alert"}),s["a"].push({name:"shop_products",params:{}})})).catch((function(t){console.log(t)})))}}},p=h,b=a("2877"),m=Object(b["a"])(p,r,e,!1,null,null,null);n["default"]=m.exports},cccc:function(t,n,a){"use strict";a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("7f7f");var r=a("bc3a"),e=a.n(r);function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,e,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,e=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw e}}}}function i(t,n){if(t){if("string"===typeof t)return c(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,n):void 0}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var a=0,r=new Array(n);a<n;a++)r[a]=t[a];return r}n["a"]={data:function(){return{api:null,loading:!1,data:{}}},created:function(){var t,n=o(this.fields);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.$set(this.data,a.name,null)}}catch(r){n.e(r)}finally{n.f()}this.fetchData()},watch:{$route:"updateRoute"},updateRoute:function(){this.fetchData()},methods:{fetchData:function(){var t=this,n=this.$route.params.id;n&&(this.loading=!0,e.a.get(this.api,{params:{id:n}}).then((function(n){t.loading=!1,Object.assign(t.data,n.data.data)})).catch((function(t){console.log(t)})))}}}}}]);
//# sourceMappingURL=chunk-0bd014d6.3435b245.js.map