# ev

> An electron-vue project

```bash
# 安装依赖
npm install
# 开发
npm run dev
# 打包
npm run build
```

# Windows 用户注意事项

如果在 npm install 期间遇到关于 node-gyp 的错误，那么你很有可能没有在你的系统上安装正确的构建工具。构建工具包括 Python 和 Visual Studio 等等。

请确保 npm 的版本是最新的。这个可以使用 npm-windows-upgrade 来完成。如果你使用 yarn，则可以跳过此项检查。

若上一项检查完成，我们可以继续设置所需的构建工具。使用 windows-build-tools 来为我们完成大部分烦人的工作。全局安装此工具将依次设置 Visual C++ 软件包、Python 等等。

到现在为止，所有工具都应该成功安装了，如果没有，那么你就会需要安装一个干净的 Visual Studio。请注意，这些并不是 electron-vue 自身的问题 (Windows 有时候可能会很难用)。

# 项目结构

## 文件树

```bash
my-project
├─ .electron-vue
│ └─ <build/development>.js files
├─ build
│ └─ icons/
├─ dist
│ ├─ electron/
│ └─ web/
├─ node_modules/
├─ src
│ ├─ main
│ │ ├─ index.dev.js
│ │ └─ index.js
│ ├─ renderer
│ │ ├─ components/
│ │ ├─ router/
│ │ ├─ store/
│ │ ├─ App.vue
│ │ └─ main.js
│ └─ index.ejs
├─ static/
├─ test
│ ├─ e2e
│ │ ├─ specs/
│ │ ├─ index.js
│ │ └─ utils.js
│ ├─ unit
│ │ ├─ specs/
│ │ ├─ index.js
│ │ └─ karma.config.js
│ └─ .eslintrc
├─ .babelrc
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ package.json
└─ README.md
```

## 产品构建

```bash
app.asar
├─ dist
│ └─ electron
│ ├─ static/
│ ├─ index.html
│ ├─ main.js
│ └─ renderer.js
├─ node_modules/
└─ package.json
```

# 开发规范

## vue 组件

组件存放在 src/renderer/components 里。

创建子组件时，将它们放置在一个使用其父组件名称的新文件夹中。

src/renderer/components
├─ ParentA
│ ├─ ChildA.vue
│ └─ ChildB.vue
└─ ParentA.vue

## vue 路由

路由存放在 src/renderer/router 里。

不要使用 HTML5 历史模式。 此模式严格用于通过 http 协议提供文件，并且不能正常使用 file 协议，但是 electron 在产品构建中使用此协议提供文件。默认的 hash 模式正是我们所需要的。

## vuex 模块

路由存放在 src/renderer/store 里。

# 使用技巧

## Sass/SCSS 全局变量的使用

* 安装 sass-loader node-sass
* 在 ./src/renderer/styles/globals.scss 中定义变量 $bg-color: blue;
* 在 .electron-vue/webpack.renderer.config.js 里编辑 vue-loader 的配置

```script
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/styles/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/styles/globals";'
}
```

* 使用你的全局变量

```html
<style lang="scss">
  body { color: $bg-color; }
</style>
```

# 脚手架说明

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)
