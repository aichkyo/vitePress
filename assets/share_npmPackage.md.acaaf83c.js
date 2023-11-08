import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.4719a631.js";const l="/assets/npm-init.845f4a62.jpg",o="/assets/修改目录结构.ecac4536.jpg",e="/assets/vue-config-js.4945d7cb.jpg",t="/assets/hr-button.3cc70635.jpg",c="/assets/hr-button-js.74599990.jpg",r="/assets/packages-index-js.6416dc5f.jpg",i="/assets/nrm-ls.6809d564.jpg",y="/assets/npm-login.3a6fa00c.jpg",E="/assets/vue-create.381c8f8c.jpg",B=JSON.parse('{"title":"NPM包的发布","description":"","frontmatter":{},"headers":[],"relativePath":"share/npmPackage.md","filePath":"share/npmPackage.md"}'),h={name:"share/npmPackage.md"},d=p(`<h1 id="npm包的发布" tabindex="-1">NPM包的发布 <a class="header-anchor" href="#npm包的发布" aria-label="Permalink to &quot;NPM包的发布&quot;">​</a></h1><h2 id="想象中的npm包发布操作" tabindex="-1">想象中的npm包发布操作 <a class="header-anchor" href="#想象中的npm包发布操作" aria-label="Permalink to &quot;想象中的npm包发布操作&quot;">​</a></h2><ul><li>初始化package.json, <code>npm init</code></li><li>登录npm,设置用户名和邮箱, <code>npm login</code></li><li>设置npm源, <code>npm config set registry</code></li><li>修改package.json文件name version</li><li>发布，<code>npm publish</code></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#6A737D;"># version: 1.0.0 -&gt; 1.0.1 </span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#6A737D;"># version: 1.0.0 -&gt; 1.0.1 </span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span></span></code></pre></div><p><img src="`+l+`" alt="npm-init"></p><p>好像是这么一回事，但是项目中实战会怎么样呢？</p><p>接下来，我们一步步完成它。</p><h2 id="开发一个ui组件库" tabindex="-1">开发一个UI组件库 <a class="header-anchor" href="#开发一个ui组件库" aria-label="Permalink to &quot;开发一个UI组件库&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装vue脚手架</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vue/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 创建一个项目，跟着脚手架的提示一步一步完成</span></span>
<span class="line"><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hroa-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装vue脚手架</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vue/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 创建一个项目，跟着脚手架的提示一步一步完成</span></span>
<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hroa-ui</span></span></code></pre></div><h3 id="修改src-examples" tabindex="-1">修改src-&gt;examples <a class="header-anchor" href="#修改src-examples" aria-label="Permalink to &quot;修改src-&gt;examples&quot;">​</a></h3><p>常规项目源文件会在src目录下，组件库项目的入口文件不在此，故为了区分两者的差别，我们将src改为examples，后续可以在examples引入我们自己写的UI组件进行引用调试。</p><p><code>目录结构</code><img src="`+o+'" alt="修改目录结构"></p><h3 id="vue-config-js修改入口文件" tabindex="-1">vue.config.js修改入口文件 <a class="header-anchor" href="#vue-config-js修改入口文件" aria-label="Permalink to &quot;vue.config.js修改入口文件&quot;">​</a></h3><p>因为项目目录结构默认入口为 src/main.js，我们修改后src项目可能跑不起来，所以需要在配置文件中修改项目的入口文件指向 entry。</p><p>如图所示，此为vue-cli3版本的修改示例，其他版本同理。</p><p><code>vue.config.js</code><img src="'+e+'" alt="vue-config-js"></p><h3 id="新增文件packages" tabindex="-1">新增文件packages <a class="header-anchor" href="#新增文件packages" aria-label="Permalink to &quot;新增文件packages&quot;">​</a></h3><p>packages为我们组件库的文件夹，我们可以在此创建多个组件。</p><p>比如，我们现在需要做一个按钮的公共组件，就得为每一个组件创建一个文件夹，方便我们管理后续导出。</p><p>在packages中新增文件夹hr-button，名字可以根据功能或者规范自己取。</p><h3 id="在文件夹hr-button中新增index-js和hr-button-vue文件" tabindex="-1">在文件夹hr-button中新增index.js和hr-button.vue文件 <a class="header-anchor" href="#在文件夹hr-button中新增index-js和hr-button-vue文件" aria-label="Permalink to &quot;在文件夹hr-button中新增index.js和hr-button.vue文件&quot;">​</a></h3><p>在hr-button文件中创建组件。我这里创建把.vue文件放在src中，后续组件变大好维护。</p><p><code>hr-button/src/hr-button.vue</code><img src="'+t+'" alt="hr-button-vue" width="300px"></p><p>定义一个导出这个<code>hr-button</code>vue组件的js文件。为什么要创建这个文件下面解释</p><p><code>hr-button/index.js</code><img src="'+c+'" alt="hr-button-js"></p><h3 id="在packages中新增index-js" tabindex="-1">在packages中新增index.js <a class="header-anchor" href="#在packages中新增index-js" aria-label="Permalink to &quot;在packages中新增index.js&quot;">​</a></h3><p>在我们写完组件后，怎么去使用它呢。</p><p>vue引入组件的方式就两种，一种是局部引入import xxx form &#39;xxx&#39;，一种是全局注册Vue.components。</p><p>所以我们就需要给组件定义一个install方法，方便引入组件的时候使用Vue.use注册组件。</p><p><code>packages/index.js</code><img src="'+r+`" alt="packages-index-js"></p><p>到此为止，我们的组件库开发基础工作已经完成了，剩下就是完善其他组件、打包、发布。</p><h3 id="package-json新增lib命令" tabindex="-1">package.json新增lib命令 <a class="header-anchor" href="#package-json新增lib命令" aria-label="Permalink to &quot;package.json新增lib命令&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;lib&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vue-cli-service build --target lib --name hrui ./packages/index.js&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;lib&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vue-cli-service build --target lib --name hrui ./packages/index.js&quot;</span></span></code></pre></div><p><code> --target lib</code>意思是让脚手架帮我们打包成各个模块化规范的库文件。</p><p><code> --name hrui ./packages/index.js</code>意思是从package/index.js入口文件中打包生成 hrui名称的文件。 如 hrui.common.js、hrui.umd.js、hrui.css</p><p>执行 lib 命令 <code> npm run lib </code>，等待打包结束看 dist 文件夹</p><p>除此之外，还需要在package.json中新增字段。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/hrui.common.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定项目的入口文件地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hroa-ui&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关于这个包的描述文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: [ </span><span style="color:#6A737D;">// 发布包需要带上文件，否则会根据.gitignore、.npmignore忽略掉文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;examples&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;packages&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;prepublishOnly&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run lib&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 执行npm publish的前置钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./dist/hrui.common.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定项目的入口文件地址</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hroa-ui&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关于这个包的描述文件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#6A737D;">// 发布包需要带上文件，否则会根据.gitignore、.npmignore忽略掉文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;examples&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;packages&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;prepublishOnly&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;npm run lib&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 执行npm publish的前置钩子</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="发布npm包操作" tabindex="-1">发布NPM包操作 <a class="header-anchor" href="#发布npm包操作" aria-label="Permalink to &quot;发布NPM包操作&quot;">​</a></h2><p>磨刀不误砍柴工，先认识nrm帮我们更方便操作。</p><h3 id="nrm介绍" tabindex="-1">nrm介绍 <a class="header-anchor" href="#nrm介绍" aria-label="Permalink to &quot;nrm介绍&quot;">​</a></h3><p>nrm（NPM registry manager）是一个npm源管理工具，可以用来切换npm源，也可以用来查看npm源的地址。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装nrm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出npm源</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换npm源 </span></span>
<span class="line"><span style="color:#6A737D;"># nrm use &lt;registry&gt;</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新增npm源 </span></span>
<span class="line"><span style="color:#6A737D;"># nrm add &lt;registry&gt; &lt;url&gt; [home]</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kye</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://npm.company.com/</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除npm源</span></span>
<span class="line"><span style="color:#6A737D;"># nrm del &lt;registry&gt;</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">del</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kye</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装nrm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出npm源</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换npm源 </span></span>
<span class="line"><span style="color:#6A737D;"># nrm use &lt;registry&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新增npm源 </span></span>
<span class="line"><span style="color:#6A737D;"># nrm add &lt;registry&gt; &lt;url&gt; [home]</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kye</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://npm.company.com/</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除npm源</span></span>
<span class="line"><span style="color:#6A737D;"># nrm del &lt;registry&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">del</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kye</span></span></code></pre></div><p><img src="`+i+'" alt="nrm-ls"></p><h3 id="_3-登陆npm" tabindex="-1">3. 登陆npm <a class="header-anchor" href="#_3-登陆npm" aria-label="Permalink to &quot;3. 登陆npm&quot;">​</a></h3><p>没有帐号则需要先去 npm官网[<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a>]注册一个账号。 然后执行命令登陆</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span></span></code></pre></div><p><img src="'+y+`" alt="npm-login"></p><h3 id="_4-发布npm包" tabindex="-1">4. 发布npm包 <a class="header-anchor" href="#_4-发布npm包" aria-label="Permalink to &quot;4. 发布npm包&quot;">​</a></h3><p>需要在package.json中添加name、version、description等字段，然后执行命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span></span></code></pre></div><h3 id="_5-安装npm包" tabindex="-1">5. 安装npm包 <a class="header-anchor" href="#_5-安装npm包" aria-label="Permalink to &quot;5. 安装npm包&quot;">​</a></h3><p>切换到需要安装的包的目录，执行命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package-name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package-name</span></span></code></pre></div><h3 id="_6-升级npm包版本" tabindex="-1">6. 升级npm包版本 <a class="header-anchor" href="#_6-升级npm包版本" aria-label="Permalink to &quot;6. 升级npm包版本&quot;">​</a></h3><p>如若该包进行更新后，需要再次发包，可 npm version 控制该版本进行升级，记住需要遵守 Semver 规范: <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">https://semver.org/lang/zh-CN/</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 增加一个修复版本号: 1.0.1 -&gt; 1.0.2 (自动更改 package.json 中的 version 字段)</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加一个小的版本号: 1.0.1 -&gt; 1.1.0 (自动更改 package.json 中的 version 字段)</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">minor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将更新后的包发布到 npm 中</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 增加一个修复版本号: 1.0.1 -&gt; 1.0.2 (自动更改 package.json 中的 version 字段)</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#032F62;">patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加一个小的版本号: 1.0.1 -&gt; 1.1.0 (自动更改 package.json 中的 version 字段)</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#032F62;">minor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将更新后的包发布到 npm 中</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span></span></code></pre></div><h2 id="项目中使用" tabindex="-1">项目中使用 <a class="header-anchor" href="#项目中使用" aria-label="Permalink to &quot;项目中使用&quot;">​</a></h2><h3 id="在项目中使用组件" tabindex="-1">在项目中使用组件 <a class="header-anchor" href="#在项目中使用组件" aria-label="Permalink to &quot;在项目中使用组件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建一个项目，跟着脚手架的提示一步一步完成</span></span>
<span class="line"><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use-our-npm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建一个项目，跟着脚手架的提示一步一步完成</span></span>
<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use-our-npm</span></span></code></pre></div><p><img src="`+E+`" alt="vue-create"></p><h3 id="在main-js文件中引入ui组件" tabindex="-1">在main.js文件中引入UI组件 <a class="header-anchor" href="#在main-js文件中引入ui组件" aria-label="Permalink to &quot;在main.js文件中引入UI组件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局引入UI组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> hroaUI </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hroa-ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入样式</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hroa-ui/dist/hrui.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组册</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(hroaUI)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局引入UI组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> hroaUI </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hroa-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入样式</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hroa-ui/dist/hrui.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组册</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(hroaUI)</span></span></code></pre></div><h3 id="在-vue文件中使用组件" tabindex="-1">在.vue文件中使用组件 <a class="header-anchor" href="#在-vue文件中使用组件" aria-label="Permalink to &quot;在.vue文件中使用组件&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">hr-button</span><span style="color:#E1E4E8;">&gt;hhh&lt;/</span><span style="color:#85E89D;">hr-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">hr-button</span><span style="color:#24292E;">&gt;hhh&lt;/</span><span style="color:#22863A;">hr-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="本地调试" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试" aria-label="Permalink to &quot;本地调试&quot;">​</a></h2><ul><li>可以改变需要调试库的package.json中main字段，main字段表示入口文件，相对路径。</li><li>npm link</li></ul><h2 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h2><ul><li>钩子</li><li>工具生成 changelog</li></ul>`,69),u=[d];function m(g,F,b,v,k,C){return a(),n("div",null,u)}const j=s(h,[["render",m]]);export{B as __pageData,j as default};