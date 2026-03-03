# PainPoints 组件

## 作用
这是路演页面的“开局即高潮”模块。直接抛出市场的核心痛点，抛弃了无意义的欢迎首屏。

## 动画与交互设计
1. **标题区域**：当滚动进入视口（`whileInView`）时，通过 `framer-motion` 执行简单的从下至上的淡入效果。使用了文字渐变色强化视觉冲击。
2. **卡片组 (Staggering)**：使用了 `containerVariants` 与 `staggerChildren`。确保 4 个痛点卡片不是同时生硬地出现，而是随着滚动依次（延迟 0.2s）滑入，增加丝滑感。
3. **视觉风格**：深色模式的玻璃拟态（Glassmorphism），半透明背景 `bg-slate-800/50` 配合微微的边框 `border-slate-700/50`。
