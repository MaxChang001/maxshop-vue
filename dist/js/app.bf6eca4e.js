(function(){"use strict";var e={7534:function(e,t,r){var s=r(9242),o=r(3396);function i(e,t,r,s,i,n){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a)])}var n={name:"App",components:{}},a=r(89);const l=(0,a.Z)(n,[["render",i]]);var u=l,c=(r(7658),r(2483));const d={class:"login-page"},m=(0,o._)("h1",null,"Login",-1),p={class:"form-group"},f=(0,o._)("label",{for:"email"},"UserNo",-1),h={class:"form-group"},g=(0,o._)("label",{for:"password"},"Password",-1),v={class:"btn"};function w(e,t,r,i,n,a){return(0,o.wg)(),(0,o.iD)("div",d,[m,(0,o._)("form",null,[(0,o._)("div",p,[f,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.userNo=e),required:""},null,512),[[s.nr,n.userNo]])]),(0,o._)("div",h,[g,(0,o.wy)((0,o._)("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[s.nr,n.password]])]),(0,o._)("div",v,[(0,o._)("button",{type:"submit",class:"btn-primary",onClick:t[2]||(t[2]=(0,s.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))}," Submit "),(0,o._)("button",{type:"regist",class:"btn-primary",onClick:t[3]||(t[3]=(0,s.iM)(((...e)=>a.regist&&a.regist(...e)),["prevent"]))}," Regist ")])])])}var _=r(4161),b={data(){return{userNo:"",password:""}},methods:{login(){_.Z.get("https://mybbswebapi20231008132930.azurewebsites.net/Login/"+this.userNo+"/"+this.password,{headers:{"Ocp-Apim-Subscription-Key":"8171626a36c746eabb90fb1518a0e703"}}).then((e=>{console.log(e.data);var t={UserNo:e.data.userNo,UserName:e.data.userName,Email:e.data.email,UserLevel:e.data.userLevel,id:e.data.id};console.log("query=",t),this.$router.push({name:"ProductList",query:t})})).catch((e=>{console.log(e)}))},regist(){let e={UserNo:this.userNo,UserName:this.userNo,Email:this.userNo+"@gmail.com",Password:this.password};_.Z.post("https://mybbswebapi20231008132930.azurewebsites.net/Login?userNo="+e.UserNo+"&userName="+e.UserName+"&email="+e.Email+"&password="+e.Password,{headers:{"Ocp-Apim-Subscription-Key":"8171626a36c746eabb90fb1518a0e703"}}).then((e=>{var t=e.data;"注册成功！"==t&&alert("注册成功！")})).catch((e=>{console.log(e)}))}}};const y=(0,a.Z)(b,[["render",w]]);var I=y;const k=e=>((0,o.dD)("data-v-d5ff47be"),e=e(),(0,o.Cn)(),e),C={class:"bottom-nav"},U=k((()=>(0,o._)("div",{class:"icon"},"🛍",-1))),N=k((()=>(0,o._)("div",null,"商品",-1))),D=[U,N],q=k((()=>(0,o._)("div",{class:"icon"},"🛒",-1))),P=k((()=>(0,o._)("div",null,"购物车",-1))),E=[q,P],L=k((()=>(0,o._)("div",{class:"icon"},"👤",-1))),O=k((()=>(0,o._)("div",null,"用户",-1))),j=[L,O];function x(e,t,r,s,i,n){const a=(0,o.up)("ProductsComponent"),l=(0,o.up)("CartComponent"),u=(0,o.up)("user-info");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.showProducts?((0,o.wg)(),(0,o.j4)(a,{key:0,items:i.productItems,onAddToCart:n.handleAddCart},null,8,["items","onAddToCart"])):(0,o.kq)("",!0),i.showCart?((0,o.wg)(),(0,o.j4)(l,{key:1,cartItems:i.myCartItems,onRemoveFromCart:n.handleRemove},null,8,["cartItems","onRemoveFromCart"])):(0,o.kq)("",!0),i.showProfile?((0,o.wg)(),(0,o.j4)(u,{key:2,userInfo:i.userInfo,onSaveUserInfo:n.editUser},null,8,["userInfo","onSaveUserInfo"])):(0,o.kq)("",!0),(0,o._)("footer",C,[(0,o._)("div",{class:"nav-item",onClick:t[0]||(t[0]=e=>n.show("products"))},D),(0,o._)("div",{class:"nav-item",onClick:t[1]||(t[1]=e=>n.show("cart"))},E),(0,o._)("div",{class:"nav-item",onClick:t[2]||(t[2]=e=>n.show("profile"))},j)])],64)}var z=r(7139);const A={class:"products-container"},Z=["src","onClick"],R={class:"product-info"},$={class:"product-price"},F=["onClick"],K=["src"];function S(e,t,r,s,i,n){return(0,o.wg)(),(0,o.iD)("div",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.productRows,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"product-row",key:"row-"+t},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:e.id},[(0,o._)("img",{src:e.image,alt:"Product Image",class:"product-image",onClick:t=>n.showLargeImage(e.image)},null,8,Z),(0,o._)("div",R,[(0,o._)("h2",null,(0,z.zw)(e.name),1),(0,o._)("p",$,(0,z.zw)(e.price)+" 元",1),(0,o._)("button",{class:"add-to-cart-btn",onClick:t=>n.addCart(e)},"添加到购物车",8,F)])])))),128))])))),128)),i.largeImage?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"modal-background",onClick:t[0]||(t[0]=(...e)=>n.closeLargeImage&&n.closeLargeImage(...e))},[(0,o._)("img",{src:i.largeImage,alt:"Large Product Image",class:"large-image"},null,8,K)])):(0,o.kq)("",!0)])}var H={props:{items:{type:Array,default:()=>[],required:!0}},data(){return{largeImage:null}},computed:{productRows(){let e=[];for(let t=0;t<this.items.length;t+=3)e.push(this.items.slice(t,t+3));return e}},methods:{showLargeImage(e){this.largeImage=e},closeLargeImage(){this.largeImage=null},addCart(e){this.$emit("add-to-cart",e)}}};const T=(0,a.Z)(H,[["render",S]]);var V=T;const Y=e=>((0,o.dD)("data-v-39aef612"),e=e(),(0,o.Cn)(),e),M={class:"cart-container"},W=Y((()=>(0,o._)("h2",null,"购物车",-1))),B={key:0},G=Y((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"商品图片"),(0,o._)("th",null,"商品名称"),(0,o._)("th",null,"商品价格"),(0,o._)("th",null,"编辑")])],-1))),J=["src"],Q=["onClick"],X={key:1};function ee(e,t,r,s,i,n){return(0,o.wg)(),(0,o.iD)("div",M,[W,r.cartItems.length?((0,o.wg)(),(0,o.iD)("table",B,[G,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.cartItems,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,[(0,o._)("img",{src:e.image,alt:"商品图片",width:"50",height:"50"},null,8,J)]),(0,o._)("td",null,(0,z.zw)(e.name),1),(0,o._)("td",null,(0,z.zw)(e.price)+"元",1),(0,o._)("td",null,[(0,o._)("button",{onClick:t=>n.removeFromCart(e.id)},"删除",8,Q)])])))),128))])])):((0,o.wg)(),(0,o.iD)("p",X,"购物车为空"))])}var te={props:{cartItems:{type:Array,default:()=>[]}},methods:{removeFromCart(e){this.$emit("remove-from-cart",e)}}};const re=(0,a.Z)(te,[["render",ee],["__scopeId","data-v-39aef612"]]);var se=re;const oe={class:"user-info-container"},ie=(0,o._)("h2",{class:"user-info-title"},"用户信息",-1),ne={class:"user-info-item"},ae=(0,o._)("label",{class:"user-info-label"},"UserNo:",-1),le={class:"user-info-value"},ue={key:0,class:"user-info-item"},ce=(0,o._)("label",{class:"user-info-label"},"UserName:",-1),de={class:"user-info-value"},me={key:1,class:"user-info-item"},pe=(0,o._)("label",{class:"user-info-label"},"UserName:",-1),fe={key:2,class:"user-info-item"},he=(0,o._)("label",{class:"user-info-label"},"Email:",-1),ge={class:"user-info-value"},ve={key:3,class:"user-info-item"},we=(0,o._)("label",{class:"user-info-label"},"Email:",-1);function _e(e,t,r,i,n,a){return(0,o.wg)(),(0,o.iD)("div",oe,[ie,(0,o._)("div",ne,[ae,(0,o._)("span",le,(0,z.zw)(r.userInfo.UserNo),1)]),n.isEditing?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ue,[ce,(0,o._)("span",de,(0,z.zw)(r.userInfo.UserName),1)])),n.isEditing?((0,o.wg)(),(0,o.iD)("div",me,[pe,(0,o.wy)((0,o._)("input",{class:"user-info-value","onUpdate:modelValue":t[0]||(t[0]=e=>n.editedUserInfo.UserName=e)},null,512),[[s.nr,n.editedUserInfo.UserName]])])):(0,o.kq)("",!0),n.isEditing?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",fe,[he,(0,o._)("span",ge,(0,z.zw)(r.userInfo.Email),1)])),n.isEditing?((0,o.wg)(),(0,o.iD)("div",ve,[we,(0,o.wy)((0,o._)("input",{class:"user-info-value","onUpdate:modelValue":t[1]||(t[1]=e=>n.editedUserInfo.Email=e)},null,512),[[s.nr,n.editedUserInfo.Email]])])):(0,o.kq)("",!0),n.isEditing?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:4,onClick:t[2]||(t[2]=e=>n.isEditing=!0)},"编辑")),n.isEditing?((0,o.wg)(),(0,o.iD)("button",{key:5,onClick:t[3]||(t[3]=(...e)=>a.saveUserInfo&&a.saveUserInfo(...e))},"保存")):(0,o.kq)("",!0)])}var be={name:"UserInfo",props:{userInfo:{type:Object,required:!0}},data(){return{isEditing:!1,editedUserInfo:{UserName:this.userInfo.UserName,Email:this.userInfo.Email,UserNo:this.userInfo.UserNo}}},methods:{saveUserInfo(){this.$emit("save-user-info",this.editedUserInfo),this.isEditing=!1}}};const ye=(0,a.Z)(be,[["render",_e]]);var Ie=ye,ke={components:{ProductsComponent:V,CartComponent:se,UserInfo:Ie},data(){return{showProducts:!0,showCart:!1,showProfile:!1,productItems:[{id:1,name:"商品1",price:199.99,image:"https://via.placeholder.com/150"},{id:2,name:"商品2",price:299.99,image:"https://via.placeholder.com/150"},{id:3,name:"商品3",price:399.99,image:"https://via.placeholder.com/150"}],myCartItems:[{id:1,name:"商品1",price:199.99,quantity:2,image:"https://via.placeholder.com/50"},{id:2,name:"商品2",price:299.99,quantity:1,image:"https://via.placeholder.com/50"}],userInfo:{UserNo:"2018302110220",UserName:"张三",Email:"max@gmail.com",UserLevel:1}}},mounted(){console.log("this.$route.query=",this.$route.query)},methods:{show(e){this.showProducts=!1,this.showCart=!1,this.showProfile=!1,"products"===e&&(this.showProducts=!0),"cart"===e&&(this.showCart=!0),"profile"===e&&(this.showProfile=!0)},handleRemove(e){this.myCartItems=this.myCartItems.filter((t=>t.id!==e))},editUser(e){this.userInfo=e},handleAddCart(e){const t=this.myCartItems.find((t=>t.id===e.id));t?t.quantity++:this.myCartItems.push({id:e.id,name:e.name,price:e.price,quantity:1,image:e.image})}}};const Ce=(0,a.Z)(ke,[["render",x],["__scopeId","data-v-d5ff47be"]]);var Ue=Ce;const Ne=[{path:"/",name:"loginPage",component:I},{path:"/ProductList",name:"ProductList",component:Ue}],De=(0,c.p7)({history:(0,c.PO)(),routes:Ne}),qe=De.push;De.push=function(e,t,r){return t||r?qe.call(this,e,t,r):qe.call(this,e).catch((e=>e))};var Pe=De;const Ee=(0,s.ri)(u);Ee.use(Pe),Ee.mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,i){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<n&&(n=i));if(a){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,n=s[0],a=s[1],l=s[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var c=l(r)}for(t&&t(s);u<n.length;u++)i=n[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},s=self["webpackChunkmax_shop"]=self["webpackChunkmax_shop"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(7534)}));s=r.O(s)})();
//# sourceMappingURL=app.bf6eca4e.js.map