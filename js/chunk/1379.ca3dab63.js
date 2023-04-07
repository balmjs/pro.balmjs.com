"use strict";(self.webpackChunkbalm_ui_pro=self.webpackChunkbalm_ui_pro||[]).push([[1379,8236],{9713:function(e,t,o){o.d(t,{Z:function(){return u}});var a=o(3114);const l={class:"x-form-item"},n="input",r={name:"XFormItem"};var u=Object.assign(r,{props:{modelValue:{type:String,default:""}},emits:[n,"add"],setup(e,t){let{expose:o,emit:r}=t;const u=e,i=(0,a.reactive)({value:u.modelValue}),{value:c}=(0,a.toRefs)(i);function m(e){r(n,e.target.value)}return(0,a.watch)((()=>u.modelValue),(e=>{i.value=e})),o({test:function(){r("add","gg")}}),(e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.isRef)(c)?c.value=e:null),onInput:m},null,544),[[a.vModelText,(0,a.unref)(c)]])]))}})},1379:function(e,t,o){o.r(t),o.d(t,{default:function(){return s}});var a=o(3114),l=o(2201),n=o(4811),r=o(9713),u=o(8236);const i=(0,a.createElementVNode)("hr",null,null,-1),c={for:"extra-option"},m=(0,a.createElementVNode)("hr",null,null,-1);var s={__name:"form-view",setup(e){const t={XFormItem:r.Z},o=(0,l.yj)(),s=(0,n.oR)(),d=[{type:"reset",text:"Reset",attrOrProp:{outlined:!0}},{type:"submit",text:"Submit",attrOrProp:{raised:!0}}];async function f(){const e=await s.getModelConfig("model-config/b.js");return console.log("hello test"),e}const p=(0,a.reactive)({formDataSource:{},formData:{a:"hello",b:"world"},modelConfig:u,message:"",extra:!1}),{formDataSource:g,formData:v,modelConfig:b,message:x,extra:V}=(0,a.toRefs)(p),C=(0,a.computed)((()=>o.params.id||0));function D(e){console.info("onLoaded",e)}function h(e,t){if(console.log("onAction",e,t),"submit"===e.type){const{valid:e,message:o}=t;p.message=o,e&&console.log("gg")}else p.message=""}function w(e,t){console.log("onChange",e,t),p.formDataSource[e]=t}return(0,a.onMounted)((async()=>{p.modelConfig=await s.getModelConfig("model-config/b.js"),C.value?(p.formDataSource=await s.getModelDetail("user",{id:C.value}),p.formData=Object.assign({},p.formDataSource)):setTimeout((()=>{p.formDataSource={a:"a1",b:"b1",c:"<p>c1</p>",d:1,f:5,g:[7,8],h:"2022-06-11",i:["2022-06-05","2022-06-15"],j:"off",k:30,l:1,m:11,n:111,o:"o1",p:"p1",x:"xyz"},p.formData=Object.assign({},p.formDataSource)}),1e3)})),(e,o)=>{const l=(0,a.resolveComponent)("ui-checkbox"),n=(0,a.resolveComponent)("ui-form-field"),r=(0,a.resolveComponent)("ui-alert"),u=(0,a.resolveComponent)("ui-form-view"),s=(0,a.resolveComponent)("ui-snippet"),p=(0,a.resolveComponent)("docs-page");return(0,a.openBlock)(),(0,a.createBlock)(p,{name:"form-view","without-css":"","demo-count":"1"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,{modelValue:(0,a.unref)(v),"onUpdate:modelValue":o[2]||(o[2]=e=>(0,a.isRef)(v)?v.value=e:null),components:t,"model-config":(0,a.unref)(b),"model-options":{extra:(0,a.unref)(V)},"action-config":d,test:f,onLoaded:D,onAction:h,"onUpdate:x":w},{"before-form-view":(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",null,"outer formData: "+(0,a.toDisplayString)((0,a.unref)(g)),1),i])),"form-item__ui-textfield--l":(0,a.withCtx)((()=>[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>(0,a.unref)(v).l=e)},null,512),[[a.vModelText,(0,a.unref)(v).l]])])),"custom-slot":(0,a.withCtx)((()=>[(0,a.createTextVNode)("gg")])),"after-form-view":(0,a.withCtx)((e=>{let{data:t}=e;return[(0,a.createVNode)(n,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("label",c," Extra options: select disabled ("+(0,a.toDisplayString)((0,a.unref)(V))+") ",1),(0,a.createVNode)(l,{modelValue:(0,a.unref)(V),"onUpdate:modelValue":o[1]||(o[1]=e=>(0,a.isRef)(V)?V.value=e:null),"input-id":"extra-option"},null,8,["modelValue"])])),_:1}),m,(0,a.createElementVNode)("div",null,"inner formData: "+(0,a.toDisplayString)(t),1),(0,a.unref)(x)?((0,a.openBlock)(),(0,a.createBlock)(r,{key:0,state:"warning"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(x)),1)])),_:1})):(0,a.createCommentVNode)("v-if",!0)]})),_:1},8,["modelValue","model-config","model-options"]),(0,a.createCommentVNode)(' <ui-button @click="clearFormData">Clear formData</ui-button>\n    <ui-button @click="setFormData">Set formData</ui-button> '),(0,a.createVNode)(s,{code:e.$store.demos[1]},null,8,["code"])])),_:1})}}}},8236:function(e){e.exports=JSON.parse('[{"label":"Textfield","component":"ui-textfield","key":"a","value":"","attrOrProp":{"placeholder":"aaa"}},{"label":"Autocomplete","component":"ui-autocomplete","key":"b","value":""},{"label":"Editor","component":"ui-editor","key":"c","value":""},{"label":"Select","component":"ui-select","key":"d","value":"","attrOrProp":{"placeholder":"bbb","defaultLabel":"default","options":[{"label":"A","value":1},{"label":"B","value":2}]}}]')}}]);