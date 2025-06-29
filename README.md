# FPSBoost 项目

这是一个基于 Astro 框架的前端项目，使用 Tailwind CSS 进行样式设计。

## 📦 项目依赖

### 核心依赖
- **astro**: ^5.10.1 - 现代化的静态站点生成器
- **tailwindcss**: ^4.1.11 - 实用优先的CSS框架
- **@tailwindcss/vite**: ^4.1.11 - Tailwind CSS的Vite插件

### 开发依赖
项目使用以下开发工具：
- **TypeScript** - 类型安全的JavaScript超集
- **Vite** - 快速的构建工具（通过Astro集成）

## 🚀 项目结构

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # 静态资源文件
│   ├── components/      # 可复用组件
│   ├── layouts/         # 页面布局组件
│   ├── pages/           # 页面文件
│   └── styles/          # 样式文件
├── astro.config.mjs     # Astro配置文件
├── package.json         # 项目依赖配置
├── tsconfig.json        # TypeScript配置
└── README.md           # 项目说明文档
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ 技术栈

- **框架**: Astro 5.10.1
- **样式**: Tailwind CSS 4.1.11
- **语言**: TypeScript
- **构建工具**: Vite (通过Astro集成)
- **包管理器**: npm

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)
