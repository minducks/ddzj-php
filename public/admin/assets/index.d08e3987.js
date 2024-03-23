import{u as L,Q as N,S as P,G as j,T as G}from"./element-plus.62ab1451.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang.ec3e131a.js";import{f as M,b as O}from"./index.7e7d93d0.js";import{c as Q,r as U}from"./role.bb62891e.js";import{u as q}from"./usePaging.0e69bc9a.js";import{_ as z}from"./edit.vue_vue_type_script_setup_true_lang.f630944d.js";import{_ as H}from"./auth.vue_vue_type_script_setup_true_lang.08080f41.js";import{d as J,s as F,r as E,o as a,c as g,V as t,M as i,a as w,O as c,L as r,T as h,u,k as K,S as D,n as y,ar as W}from"./@vue.3ddec1b2.js";import"./@vueuse.b3730649.js";import"./lodash-es.32bc9704.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.4237e19d.js";import"./dayjs.3f20994d.js";import"./axios.25713f9d.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.09c27007.js";import"./vue-router.70b81833.js";import"./pinia.4a4088b7.js";import"./css-color-function.6cac4cf2.js";import"./color.aa9d0e7b.js";import"./clone.467d5f2b.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.73f6d097.js";import"./vue-clipboard3.8191fcdc.js";import"./clipboard.e51d27f9.js";import"./echarts.db1d6bb4.js";import"./zrender.84752e5a.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.d7b1dc3a.js";import"./index.7a0b9c3a.js";import"./menu.b07e7f09.js";const X={class:"role-lists"},Y={class:"mt-4"},Z={class:"flex justify-end mt-4"},Ie=J({__name:"index",setup(ee){const d=F(),k=F(),_=E(!1),C=E(!1),{pager:m,getLists:p}=q({fetchFun:U}),B=async()=>{var o;_.value=!0,await y(),(o=d.value)==null||o.open("add")},$=async o=>{var e,n;_.value=!0,await y(),(e=d.value)==null||e.open("edit"),(n=d.value)==null||n.setFormData(o)},x=async o=>{var e,n;C.value=!0,await y(),(e=k.value)==null||e.open(),(n=k.value)==null||n.setFormData(o)},V=async o=>{await M.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Q({id:o}),p()};return p(),(o,e)=>{const n=O,f=L,l=N,A=P,R=I,S=j,v=W("perms"),T=G;return a(),g("div",X,[t(S,{class:"!border-none",shadow:"never"},{default:i(()=>[w("div",null,[c((a(),r(f,{type:"primary",onClick:B},{icon:i(()=>[t(n,{name:"el-icon-Plus"})]),default:i(()=>[h(" \u65B0\u589E\u89D2\u8272 ")]),_:1})),[[v,["auth.role/add"]]])]),c((a(),g("div",Y,[w("div",null,[t(A,{data:u(m).lists},{default:i(()=>[t(l,{prop:"id",label:"ID","min-width":"100"}),t(l,{prop:"name",label:"\u540D\u79F0","min-width":"150"}),t(l,{prop:"desc",label:"\u5907\u6CE8","min-width":"150","show-overflow-tooltip":""}),t(l,{prop:"sort",label:"\u6392\u5E8F","min-width":"100"}),t(l,{prop:"num",label:"\u7BA1\u7406\u5458\u4EBA\u6570","min-width":"100"}),t(l,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"180"}),t(l,{label:"\u64CD\u4F5C",width:"180",fixed:"right"},{default:i(({row:s})=>[c((a(),r(f,{link:"",type:"primary",onClick:b=>$(s)},{default:i(()=>[h(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),c((a(),r(f,{link:"",type:"primary",onClick:b=>x(s)},{default:i(()=>[h(" \u5206\u914D\u6743\u9650 ")]),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),c((a(),r(f,{link:"",type:"danger",onClick:b=>V(s.id)},{default:i(()=>[h(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["auth.role/delete"]]])]),_:1})]),_:1},8,["data"])]),w("div",Z,[t(R,{modelValue:u(m),"onUpdate:modelValue":e[0]||(e[0]=s=>K(m)?m.value=s:null),onChange:u(p)},null,8,["modelValue","onChange"])])])),[[T,u(m).loading]])]),_:1}),_.value?(a(),r(z,{key:0,ref_key:"editRef",ref:d,onSuccess:u(p),onClose:e[1]||(e[1]=s=>_.value=!1)},null,8,["onSuccess"])):D("",!0),C.value?(a(),r(H,{key:1,ref_key:"authRef",ref:k,onSuccess:u(p),onClose:e[2]||(e[2]=s=>C.value=!1)},null,8,["onSuccess"])):D("",!0)])}}});export{Ie as default};
