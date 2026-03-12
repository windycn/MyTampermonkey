# 🐒 MyTampermonkey Scripts

欢迎来到 **MyTampermonkey**！这里存放了由 [@windycn](https://github.com/windycn) 编写和维护的一系列实用 Tampermonkey（油猴）脚本。这些脚本旨在优化特定网站的 UI、增强浏览体验或提供便捷的自动化功能。

## 🛠️ 通用安装与使用指南

无论您想使用本仓库中的哪一个脚本，请按照以下标准步骤进行操作：

### 1. 安装 Tampermonkey 扩展插件

如果您尚未安装油猴插件，请根据您使用的浏览器点击下方链接进行安装：

* [Chrome / Edge (Chromium 内核)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)

### 2. 安装本仓库的脚本

找到您需要的脚本（见下方列表），点击进入对应的 `.user.js` 文件页面：

1. 在 GitHub 文件浏览界面，点击右上角的 **"Raw"** 按钮（或直接点击上表中的文件链接）。
2. 浏览器会跳转到脚本的原始代码页面（URL 以 `https://raw.githubusercontent.com/...` 开头）。
3. Tampermonkey 扩展会自动检测到用户脚本并弹出安装界面。
4. 点击 **"安装"**（或 "重新安装"）即可。

&gt; **💡 更新提示**：大部分脚本默认支持自动更新。如果发现脚本失效，您也可以随时回到这里重新点击 "Raw" 获取最新版本。

---

## 📦 脚本列表与详细介绍

### 1. 🌐 Wandb (Weights & Biases) 界面深度汉化脚本

**文件**: [`Wandb (Weights & Biases) 界面深度汉化脚本-1.0.user.js`](https://github.com/windycn/MyTampermonkey/blob/main/Wandb%20(Weights%20%26%20Biases)%20%E7%95%8C%E9%9D%A2%E6%B7%B1%E5%BA%A6%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC-1.0.user.js) 

#### 💡 为什么需要这个脚本？

Weights & Biases (wandb.ai) 是机器学习领域极其强大的实验追踪和可视化工具。但是，官方禁用了浏览器自带的整页翻译（如 Google 翻译），因为整页翻译会破坏底层 React 虚拟 DOM，导致页面崩溃或图表无法渲染。同时，传统的机器翻译会把 `Loss`、`Epoch` 等专业术语强制翻译，导致"炼丹"体验极差。

本脚本通过底层文本节点精准替换技术与 `MutationObserver` 动态监听，完美解决了这些痛点。

#### ✨ 核心特性

* **🚀 安全的局部汉化**：全面覆盖主页、工作区视图、图表设置（Panel Settings）、表格筛选等核心模块。不破坏 React 结构，图表渲染丝滑流畅。
* **🧠 专有名词保护**：内置精准匹配字典。自动保留 `Loss`, `Accuracy`, `Epoch`, `Batch Size`, `Step` 等核心 ML 专业词汇和您自定义的项目名称/变量名。
* **⚡ 动态内容适配**：完美适配单页应用（SPA）的无刷新跳转和动态数据加载，汉化毫秒级自动跟进。
* **🛠️ 极简自定义**：代码结构清晰。您可以在油猴脚本编辑器中找到 `translations` 字典，按照 `"英文": "中文"` 的格式，随时添加自己常用的特定词汇。

---

## 📜 协议与支持

本项目所有脚本均采用 **MIT 协议** 开源。

如果您在使用中遇到问题或者有关于新脚本的好点子，欢迎提交 **Pull Request** 或在 Issues 中留言交流！
