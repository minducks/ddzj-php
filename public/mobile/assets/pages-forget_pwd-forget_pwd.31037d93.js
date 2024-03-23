import{d as e,v as o,W as a,x as l,o as s,b as r,w as t,e as d,g as u,D as m,t as i,am as c,an as p,aP as n,a6 as f,j as b,r as _,a as x,i as w}from"./index.5b37717f.js";import{_ as v}from"./u-input.81163783.js";import{_ as h}from"./u-form-item.282419c2.js";import{_ as V}from"./u-verification-code.c2779b9c.js";import{_ as j}from"./u-form.58f87cc9.js";import{_ as g}from"./u-button.71edba3f.js";import{v as y}from"./util.920cc201.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.14dc2ec9.js";var B=$(e({__name:"forget_pwd",setup(e){const $=o(),B=a(""),C=l({mobile:"",code:"",password:"",password_confirm:""}),U=e=>{B.value=e},k=async()=>{var e,o;C.mobile&&(null==(e=$.value)?void 0:e.canGetCode)&&(await c({scene:p.FIND_PASSWORD,mobile:C.mobile}),uni.$u.toast("发送成功"),null==(o=$.value)||o.start())},D=async()=>C.mobile?C.password?C.password_confirm?C.password!=C.password_confirm?uni.$u.toast("两次输入的密码不一致"):y(C.password)&&y(C.password_confirm)?(await n(C),uni.$u.toast("操作成功"),void f()):uni.$u.toast("密码应为6-20位数字+英文"):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入手机号码");return(e,o)=>{const a=b,l=_(x("u-input"),v),c=_(x("u-form-item"),h),p=_(x("u-verification-code"),V),n=w,f=_(x("u-form"),j),y=_(x("u-button"),g);return s(),r(a,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[100rpx] box-border"},{default:t((()=>[d(a,{class:"w-full"},{default:t((()=>[d(a,{class:"text-2xl font-medium mb-[60rpx]"},{default:t((()=>[u("忘记登录密码")])),_:1}),d(f,{borderBottom:"","label-width":150},{default:t((()=>[d(c,{label:"手机号",borderBottom:""},{default:t((()=>[d(l,{class:"flex-1",modelValue:C.mobile,"onUpdate:modelValue":o[0]||(o[0]=e=>C.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),d(c,{label:"验证码",borderBottom:""},{default:t((()=>[d(l,{class:"flex-1",modelValue:C.code,"onUpdate:modelValue":o[1]||(o[1]=e=>C.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),d(a,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3 w-[180rpx]",onClick:k},{default:t((()=>[d(p,{ref_key:"uCodeRef",ref:$,seconds:60,onChange:U,"change-text":"x秒"},null,512),d(n,{class:m(C.mobile?"text-primary":"text-muted")},{default:t((()=>[u(i(B.value),1)])),_:1},8,["class"])])),_:1})])),_:1}),d(c,{label:"新密码",borderBottom:""},{default:t((()=>[d(l,{class:"flex-1",type:"password",modelValue:C.password,"onUpdate:modelValue":o[2]||(o[2]=e=>C.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),d(c,{label:"确认密码",borderBottom:""},{default:t((()=>[d(l,{class:"flex-1",type:"password",modelValue:C.password_confirm,"onUpdate:modelValue":o[3]||(o[3]=e=>C.password_confirm=e),placeholder:"再次输入新密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[100rpx]"},{default:t((()=>[d(y,{type:"primary",shape:"circle",onClick:D},{default:t((()=>[u(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-10e3dfcf"]]);export{B as default};
