# NPM包的发布

## 1. 想象中的npm包发布操作

- 初始化package.json, <code>npm init</code>
- 登录npm,设置用户名和邮箱, <code>npm login</code>
- 设置npm源, <code>npm config set registry</code>
- 修改package.json文件name version
- 发布，<code>npm publish</code>

```shell
npm init -y
npm login
npm config set registry https://registry.npmjs.org/
# version: 1.0.0 -> 1.0.1 
npm publish

```
![npm-init](./images/npmPackage/npm-init.jpg)

好像是这么一回事，但是项目中实战会怎么样呢？


接下来，我们一步步完成它。



## 开发一个UI组件库

```shell
# 安装vue脚手架
npm install -g @vue/cli
# 创建一个项目，跟着脚手架的提示一步一步完成
vue create hroa-ui

```

### 修改src->examples

### vue.config.js修改入口文件
### 新增文件packages

### 在packages中新增文件夹hr-button

### 在文件夹hr-button中新增index.js和hr-button.vue文件

### 在packages中新增index.js

### package.json新增lib命令





## 2. nrm介绍

nrm（NPM registry manager）是一个npm源管理工具，可以用来切换npm源，也可以用来查看npm源的地址。

```shell
# 安装nrm
npm i nrm -g 

# 列出npm源
nrm ls 

# 切换npm源 
# nrm use <registry>
nrm use cnpm  

# 新增npm源 
# nrm add <registry> <url> [home]
nrm add kye http://npm.company.com/ 

# 删除npm源
# nrm del <registry>
nrm del kye
```
![nrm-ls](./images/npmPackage/nrm-ls.jpg)


## 3. 登陆npm
没有帐号则需要先去 npm官网[https://www.npmjs.com/]注册一个账号。
然后执行命令登陆
```shell
npm login
```
![npm-login](./images/npmPackage/npm-login.jpg)

## 4. 发布npm包
需要在package.json中添加name、version、description等字段，然后执行命令
```shell
npm publish
```

## 5. 安装npm包
切换到需要安装的包的目录，执行命令
```bash 
npm i package-name
```

## 6. 升级npm包版本
如若该包进行更新后，需要再次发包，可 npm version 控制该版本进行升级，记住需要遵守 Semver 规范:
https://semver.org/lang/zh-CN/
```bash
# 增加一个修复版本号: 1.0.1 -> 1.0.2 (自动更改 package.json 中的 version 字段)
npm version patch

# 增加一个小的版本号: 1.0.1 -> 1.1.0 (自动更改 package.json 中的 version 字段)
npm version minor

# 将更新后的包发布到 npm 中
npm publish
```
## 项目中使用

### 在项目中使用组件

```shell
# 创建一个项目，跟着脚手架的提示一步一步完成
vue create use-our-npm

```

![vue-create](./images/npmPackage/vue-create.jpg)

### 在main.js文件中引入UI组件

```js

// 全局引入UI组件
import hroaUI from "hroa-ui";
// 引入样式
import 'hroa-ui/dist/hrui.css';
// 组册
Vue.use(hroaUI)

```

### 在.vue文件中使用组件

```html
  <hr-button>hhh</hr-button>
```




## 本地调试

- 可以改变需要调试库的package.json中main字段，main字段表示入口文件，相对路径。
- npm link

