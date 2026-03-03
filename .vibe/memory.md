# 项目记忆与上下文 (Project Memory & Context)

## 项目背景 (Context)
* **产品线**：前庭神经系统智能评估设备
* **目的**：制作面向投资人与合作伙伴的路演级（Pitch）单页网页。
* **设计风格**：现代、极客暗黑风、高对比度、滚动动画丰富、苹果风卡片式展示。
* **框架选择**：React + Vite + Tailwind CSS + Framer Motion。

## 开发规范 (Coding Rules)
1. **组件化开发**：页面划分成四大独立区块组件：`PainPoints`, `MarketLandscape`, `Opportunity`, `ProductVision`，存放在 `src/components/` 目录下。
2. **README.md 要求**：每个组件文件夹内，必须配有一个 `README.md`，用于描述该组件的设计意图、使用的核心动画逻辑。
3. **代码注释 (Vibe Coding Friendly)**：写 function 或重要动效时（特别是 Framer Motion 的 `variants` 和视口滚动逻辑），需要用中文清晰注释，便于后续 Cursor AI 继续读懂上下文和微调。
4. **纯静态化**：不需要服务端渲染（SSR）或复杂的请求接口。所有展示数据均写死在客户端。

## 核心依赖版本记录
* react: ^18.2.0
* tailwindcss: ^3.3.2
* framer-motion: ^10.16.4
* lucide-react: ^0.284.0
