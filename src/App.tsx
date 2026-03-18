import { useRef } from 'react';
import Hero from './components/Hero/Hero'
import PainPoints from './components/PainPoints/PainPoints'
import MarketLandscape from './components/MarketLandscape/MarketLandscape'
import Opportunity from './components/Opportunity/Opportunity'
import MarketSummary from './components/MarketSummary/MarketSummary'
import References from './components/References/References'

// 全面启用原生 CSS Scroll Snap 架构
// 这种架构不受页面数量限制，每一屏独立控制动画，完美支持任意数量的子 Section
function App() {
  // 重要修复：获取最外层滚动容器的引用
  const appContainerRef = useRef<HTMLDivElement>(null);

  return (
    // 为容器增加 id，以便子组件可以通过 querySelector 等方式找到，或者直接通过 Context/Props 传递
    <div id="main-scroll-container" ref={appContainerRef} className="bg-[#050505] text-slate-50 font-sans selection:bg-brand-blue/30 selection:text-white h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar relative">
      
      {/* 全局极客风背景网格，保持沉浸感 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="w-full h-screen snap-start snap-always relative z-10">
        <Hero />
      </section>

      {/* PainPoints 已经被拆分为多个全屏 Section，内部自带 snap-start */}
      <PainPoints />

      {/* MarketLandscape 将横向段收缩为 4 屏设备卡，避免把总结硬塞在横向滚动结尾。 */}
      <MarketLandscape />

      {/* 市场现有产品类型总结 */}
      <MarketSummary />

      {/* Opportunity + References（公开版收束到这里） */}
      <section className="w-full h-screen snap-start snap-always relative z-10 bg-[#0d0d0d] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5 flex flex-col justify-between">
        <div className="absolute inset-0 bg-brand-cyan/5 mix-blend-overlay pointer-events-none" />
        <div className="flex-grow flex flex-col justify-center">
          <Opportunity />
        </div>
        <div className="w-full bg-[#050505] border-t border-white/5">
          <References />
        </div>
      </section>

    </div>
  )
}

export default App;
