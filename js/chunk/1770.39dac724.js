"use strict";(self.webpackChunkbalm_ui_pro=self.webpackChunkbalm_ui_pro||[]).push([[1770],{9713:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(3114);const l={class:"x-form-item"},a="input",i={name:"XFormItem"};var r=Object.assign(i,{props:{modelValue:{type:String,default:""}},emits:[a,"add"],setup(e,t){let{expose:o,emit:i}=t;const r=e,u=(0,n.reactive)({value:r.modelValue}),{value:c}=(0,n.toRefs)(u);function s(e){i(a,e.target.value)}return(0,n.watch)((()=>r.modelValue),(e=>{u.value=e})),o({test:function(){i("add","gg")}}),(e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.isRef)(c)?c.value=e:null),onInput:s},null,544),[[n.vModelText,(0,n.unref)(c)]])]))}})},1770:function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var n=o(3114),l=o(9713);var a={__name:"detail-view",setup(e){const t={XFormItem:l.Z};function o(e,t,o){console.log("onChange",e,t,o)}function a(e,t){console.log("onAction",e,t)}return(e,l)=>{const i=(0,n.resolveComponent)("ui-detail-view"),r=(0,n.resolveComponent)("ui-snippet"),u=(0,n.resolveComponent)("docs-page");return(0,n.openBlock)(),(0,n.createBlock)(u,{name:"detail-view","without-css":"","demo-count":"1"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(i,{title:"Detail View",model:"user","model-path":"model-config/b.js",to:{name:"components.list-view"},"form-view-attr-or-prop":{components:t},"onUpdate:x":o,onAction:a},{"custom-slot":(0,n.withCtx)((()=>[(0,n.createTextVNode)("gg")])),_:1},8,["to","form-view-attr-or-prop"]),(0,n.createVNode)(r,{code:e.$store.demos[1]},null,8,["code"])])),_:1})}}}}}]);