import{o as e,b as t,w as l,p as a,j as r}from"./index.5b37717f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var i=s({name:"u-form",props:{model:{type:Object,default:()=>({})},errorType:{type:Array,default:()=>["message","toast"]},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:()=>({})},inputAlign:{type:String,default:"left"},clearable:{type:Boolean,default:!0}},provide(){return{uForm:this}},data:()=>({rules:{}}),created(){this.fields=[]},methods:{setRules(e){this.rules=e},resetFields(){this.fields.map((e=>{e.resetField()}))},validate(e){return new Promise((t=>{let l=!0,a=0,r=[],s=[];this.fields.map((i=>{i.validation("",((i,o)=>{i&&(l=!1,r.push(i),s.push(o)),++a===this.fields.length&&(t(l,s[0]),-1===this.errorType.indexOf("none")&&this.errorType.indexOf("toast")>=0&&r.length&&this.$u.toast(r[0]),"function"==typeof e&&e(l,s[0]))}))}))}))}}},[["render",function(s,i,o,d,n,p){const u=r;return e(),t(u,{class:"u-form"},{default:l((()=>[a(s.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-0aa1ec35"]]);export{i as _};
