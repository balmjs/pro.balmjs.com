"use strict";(self.webpackChunkbalm_ui_pro=self.webpackChunkbalm_ui_pro||[]).push([[5211],{5211:function(e,n,o){o.r(n);n.default='<ul> <li><p>model config</p> <pre><code class="language-js">export default (data) =&gt; [\n  {\n    label: &#39;Label A&#39;,\n    component: &#39;ui-readonly-item&#39;,\n    key: &#39;a&#39;,\n    value: data.a\n  },\n  {\n    label: &#39;Label B&#39;,\n    component: &#39;ui-readonly-item&#39;,\n    key: &#39;b&#39;,\n    value: ({ b }) =&gt; b + &#39;!&#39;\n  }\n];\n</code></pre> </li> <li><p>page</p> <pre><code class="language-html">&lt;ui-form-view v-model=&quot;formData&quot; :model-config=&quot;modelConfig&quot;&gt;&lt;/ui-form-view&gt;\n</code></pre> <pre><code class="language-js">import modelConfig from &#39;@/model-config/demo&#39;;\n\nexport default {\n  data() {\n    return {\n      modelConfig,\n      formData: {\n        a: &#39;hello&#39;,\n        b: &#39;world&#39;\n      }\n    };\n  }\n};\n</code></pre> </li> </ul> '}}]);