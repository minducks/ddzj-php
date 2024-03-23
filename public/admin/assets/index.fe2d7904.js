import{_ as A}from"./index.9d07e45b.js";import{r as g,b as I,d as U}from"./index.7e7d93d0.js";import{D as T,F as N,A as R,B as z,G,u as L,y as $,Q as q,S as M}from"./element-plus.62ab1451.js";import{d as O,_ as Q,e as W,o as c,c as p,V as e,M as t,a,T as i,W as j,aa as H,u as J,O as K,L as P,b7 as X,b6 as Y,ar as Z,U as ee}from"./@vue.3ddec1b2.js";import"./@vueuse.b3730649.js";import"./lodash.09c27007.js";import"./axios.25713f9d.js";import"./vue-router.70b81833.js";import"./pinia.4a4088b7.js";import"./css-color-function.6cac4cf2.js";import"./color.aa9d0e7b.js";import"./clone.467d5f2b.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.4237e19d.js";import"./nprogress.73f6d097.js";import"./vue-clipboard3.8191fcdc.js";import"./clipboard.e51d27f9.js";import"./echarts.db1d6bb4.js";import"./zrender.84752e5a.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.d7b1dc3a.js";import"./lodash-es.32bc9704.js";import"./async-validator.fb49d0f5.js";import"./dayjs.3f20994d.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function te(){return g.get({url:"/setting.hot_search/getConfig"})}function oe(r){return g.post({url:"/setting.hot_search/setConfig",params:r})}const d=r=>(X("data-v-44fd681f"),r=r(),Y(),r),ae={class:"hot-search"},se=d(()=>a("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),ne={class:"lg:flex"},le={class:"flex-1 min-w-0"},re={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},ue=d(()=>a("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),ie={class:"hot-search-phone-content"},ce={class:"search-com"},de={class:"search-con flex items-center px-[15px]"},me=d(()=>a("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),_e=d(()=>a("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),pe={class:"hot-search-text"},he=O({__name:"index",setup(r){const n=Q({status:1,data:[]}),v=W(()=>n.data.filter(o=>o.name).sort((o,l)=>l.sort-o.sort)),h=async()=>{try{const o=await te();for(const l in n)n[l]=o[l]}catch(o){console.log("\u83B7\u53D6=>",o)}},E=()=>{n.data.push({name:"",sort:0})},F=o=>{n.data.splice(o,1)},x=async()=>{try{await oe(n),h()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return h(),(o,l)=>{const f=T,C=N,B=R,y=z,D=G,m=L,b=$,_=q,V=M,w=I,k=A,S=Z("perms");return c(),p("div",ae,[e(D,{class:"!border-none",shadow:"never"},{default:t(()=>[e(y,{ref:"formRef",model:n,"label-width":"100px"},{default:t(()=>[e(B,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:t(()=>[a("div",null,[e(C,{modelValue:n.status,"onUpdate:modelValue":l[0]||(l[0]=s=>n.status=s)},{default:t(()=>[e(f,{label:1},{default:t(()=>[i("\u5F00\u542F")]),_:1}),e(f,{label:0},{default:t(()=>[i("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),se])]),_:1})]),_:1},8,["model"])]),_:1}),e(D,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[a("div",ne,[a("div",le,[e(m,{type:"primary",class:"mb-4",onClick:E},{default:t(()=>[i("\u6DFB\u52A0")]),_:1}),e(V,{size:"large",data:n.data},{default:t(()=>[e(_,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(b,{modelValue:s.name,"onUpdate:modelValue":u=>s.name=u,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(_,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(b,{modelValue:s.sort,"onUpdate:modelValue":u=>s.sort=u,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(_,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:t(({$index:s})=>[e(m,{type:"danger",link:"",onClick:u=>F(s)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a("div",re,[ue,a("div",ie,[a("div",ce,[a("div",de,[e(w,{name:"el-icon-Search",size:17}),me])]),_e,a("div",pe,[(c(!0),p(j,null,H(J(v),(s,u)=>(c(),p("span",{key:u},ee(s.name),1))),128))])])])])]),_:1}),K((c(),P(k,null,{default:t(()=>[e(m,{type:"primary",onClick:x},{default:t(()=>[i("\u4FDD\u5B58")]),_:1})]),_:1})),[[S,["setting.hot_search/setConfig"]]])])}}});const Ke=U(he,[["__scopeId","data-v-44fd681f"]]);export{Ke as default};
