"use strict";(self.webpackChunkbalm_ui_pro=self.webpackChunkbalm_ui_pro||[]).push([[2039],{2039:function(e,n,o){o.r(n);n.default='<ul> <li><p><code>config/model.js</code></p> <pre><code class="language-js">import { isDev } from &#39;@/config&#39;;\n\nexport default {\n  methods: {\n    async getModelConfig(modelPath) {\n      let config = [];\n\n      try {\n        const module = await import(`@/views/${modelPath}`);\n        config = module.default;\n      } catch (err) {\n        isDev &amp;&amp; console.warn(err.toString());\n      }\n\n      return config;\n    }\n    // ...\n  }\n};\n</code></pre> </li> <li><p><code>components/views/detail-view.js</code></p> <pre><code class="language-js">import { useStore } from &#39;balm-ui&#39;;\n\nexport async function getModelConfigFn({ modelPath }) {\n  const store = useStore();\n\n  return await store.getModelConfig(modelPath);\n}\n\nexport async function getModelDetailDataFn({ model, keyName, $route }) {\n  let result = {};\n\n  const id = $route?.params[keyName];\n  if (id) {\n    const store = useStore();\n    const params = {};\n\n    params[keyName] = id;\n\n    result = await store.getModelDetail(model, params);\n  }\n\n  return result;\n}\n\nexport async function setModelDataFn({\n  model,\n  keyName,\n  formData,\n  formDataSource\n}) {\n  const store = useStore();\n\n  const id = formDataSource[keyName] || formData[keyName];\n  const fn = id ? &#39;updateModel&#39; : &#39;createModel&#39;;\n\n  return await store[fn](model, formData);\n}\n</code></pre> </li> </ul> <pre><code class="language-js">import {\n  getModelConfigFn,\n  getModelDetailDataFn,\n  setModelDataFn\n} from &#39;@/components/views/detail-view&#39;;\n\nVue.use(BalmUIPro, {\n  UiDetailView: {\n    getModelConfigFn,\n    getModelDataFn: getModelDetailDataFn,\n    setModelDataFn\n  }\n});\n</code></pre> <hr> <pre><code class="language-html">&lt;ui-detail-view\n  title=&quot;Detail View&quot;\n  model=&quot;user&quot;\n  model-path=&quot;model-config/demo.js&quot;\n&gt;&lt;/ui-detail-view&gt;\n</code></pre> '}}]);