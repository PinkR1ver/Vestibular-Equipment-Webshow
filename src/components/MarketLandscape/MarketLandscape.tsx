import { motion, useScroll, useTransform } from 'framer-motion';
import { XCircle, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';

const baseUrl = import.meta.env.BASE_URL;

const competitors = [
  {
    id: "vng",
    name: "高端 VNG/VOG",
    example: "VisualEyes 525 等",
    price: "4.5万 - 6万美元",
    features: ["帧率 220fps", "支持扭转追踪", "诊断金标准"],
    cons: ["仅适用三级医院", "需暗室环境", "极度昂贵"],
    refs: "[11][12]",
    image: `${baseUrl}devices/visualeyes_525.png`,
    bgGradient: "from-blue-900/20 to-black"
  },
  {
    id: "vhit",
    name: "视频头脉冲 (vHIT)",
    example: "EyeSeeCam, ICS Impulse",
    price: "1.3万 - 3万美元",
    features: ["高频评估", "便携性较好", "早期筛查"],
    cons: ["护目镜易滑动产生伪影", "功能单一"],
    refs: "[21][23]",
    image: `${baseUrl}devices/eyeseecam.png`,
    bgGradient: "from-emerald-900/20 to-black"
  },
  {
    id: "rotary",
    name: "旋转椅系统",
    example: "Orion 等",
    price: "8万 - 15万美元+",
    features: ["黄金标准", "全方位刺激", "双侧病变诊断"],
    cons: ["需独立暗室", "需加固地基", "占地极大"],
    refs: "[26]",
    image: `${baseUrl}devices/orion_rotary.png`,
    bgGradient: "from-purple-900/20 to-black"
  },
  {
    id: "srm",
    name: "自动化复位系统",
    example: "SRM-IV (中国特色)",
    price: "约 120万 人民币",
    features: ["大型多轴转椅", "全自动精准复位", "解决难治性BPPV"],
    cons: ["天价设备", "仅限头部三甲医院", "维护成本极高"],
    refs: "[32][35]",
    image: `${baseUrl}devices/srm_iv.png`,
    bgGradient: "from-red-900/20 to-black"
  }
];

const MarketLandscape = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 重要修复：由于外部是自建的滚动容器（overflow-y-auto），我们需要指定 container。
  // 注意：因为我们在 App 组件中给最外层容器加了 id="main-scroll-container"，这里我们需要获取它。
  // Framer Motion 允许传入 RefObject 作为 container。
  
  // 我们使用一个状态来安全地获取这个外部容器
  const [scrollContainer, setScrollContainer] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    setScrollContainer(document.getElementById('main-scroll-container'));
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer ? { current: scrollContainer } : undefined,
    offset: ["start start", "end end"]
  });

  // 将垂直滚动映射为横向位移（仅保留 4 个设备卡片，共 4 屏，所以移动 -75%）
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // 外层容器：不设置固定高度，也不设置 snap-start
    <section ref={containerRef} className="relative bg-surface">
      
      {/* 粘性容器：始终固定在屏幕内，内部执行横向位移。占用 100vh 的实际文档流高度 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#050505] z-10">
        
        {/* 全局背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-[#050505] to-[#050505] pointer-events-none" />

        {/* 侧边标题 (随滚动稍微改变透明度) */}
        <motion.div 
          className="absolute left-8 top-12 md:top-auto md:left-12 z-50 pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 0.3, 0.3, 1]) }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-500/30 bg-gray-500/10 text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            MARKET REALITY
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white drop-shadow-xl">
            笨重、昂贵、被巨头垄断的<br/>
            <span className="text-gray-500">传统设备现状</span>
          </h2>
        </motion.div>

        {/* 滚动提示指示器 */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-500 z-50 pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [1, 0]) }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Keep scrolling</span>
          <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* 水平滑动的轨道 */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          
          {/* 4 屏：单设备特写 (类似画廊画框) */}
          {competitors.map((comp) => (
            <div key={comp.id} className="w-[100vw] h-full flex items-center justify-center relative p-6 md:p-24">
              {/* 设备专属渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${comp.bgGradient} opacity-30`} />
              
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                {/* 左侧：巨大的设备抠图展示 */}
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700" />
                  <img 
                    src={comp.image} 
                    alt={comp.name} 
                    className="w-full max-h-[50vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-y-12 group-hover:rotate-y-0 transition-transform duration-700"
                  />
                </div>

                {/* 右侧：设备详细解构 */}
                <div className="flex flex-col">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">{comp.name}</h3>
                  <p className="text-xl text-gray-400 font-light mb-8 border-b border-white/10 pb-6">{comp.example}</p>
                  
                  <div className="mb-10">
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Market Price</div>
                    <div className="text-4xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">{comp.price}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs text-brand-cyan uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                        <Info className="w-4 h-4" /> Core Value
                      </div>
                      <ul className="space-y-3">
                        {comp.features.map((f, i) => (
                          <li key={i} className="text-sm md:text-base text-gray-300 flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" /> 
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs text-accent-red uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                        <AlertTriangle className="w-4 h-4" /> Constraints
                      </div>
                      <ul className="space-y-3">
                        {comp.cons.map((c, i) => (
                          <li key={i} className="text-sm md:text-base text-gray-400 flex items-start gap-3">
                            <XCircle className="w-4 h-4 text-accent-red/70 mt-0.5 shrink-0" /> 
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </motion.div>
      </div>

      {/* 幽灵占位符：补充 4 屏高度（总共 400vh），并提供 4 个停靠点 */}
      <div className="w-full h-screen snap-start snap-always pointer-events-none -mt-[100vh]" />
      <div className="w-full h-screen snap-start snap-always pointer-events-none" />
      <div className="w-full h-screen snap-start snap-always pointer-events-none" />
      <div className="w-full h-screen snap-start snap-always pointer-events-none" />

    </section>
  );
};

export default MarketLandscape;
