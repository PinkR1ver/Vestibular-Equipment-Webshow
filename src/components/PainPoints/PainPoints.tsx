import { motion } from 'framer-motion';
import { DollarSign, BrainCircuit, Home, Activity, ArrowDown } from 'lucide-react';

const painPointsData = [
  {
    id: "cost",
    icon: <DollarSign className="w-16 h-16 text-accent-red" />,
    title: "天价与场地墙",
    subtitle: "动辄百万的设备，基层如何承担？",
    desc: "传统眼震视图仪(VNG) 15-40万，若配置旋转椅可超百万。不仅如此，设备还需要专门的暗室环境，回报周期极长，导致基层机构采购意愿几乎为零。",
    ref: "[4][5][6]",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    stats: "15万-100万+",
    statsLabel: "传统设备采购成本"
  },
  {
    id: "complex",
    icon: <BrainCircuit className="w-16 h-16 text-accent-orange" />,
    title: "极高的判读门槛",
    subtitle: "波形复杂如天书，易致误诊",
    desc: "传统设备操作繁琐（如冷热试验容易引发患者不适），输出的眼震波形图极其复杂。区分中枢性与外周性眼震需要资深的神经科或耳鼻喉科专家，基层医生由于缺乏培训，误诊率极高。",
    ref: "[7]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stats: "高度依赖",
    statsLabel: "专家经验判读"
  },
  {
    id: "home",
    icon: <Home className="w-16 h-16 text-brand-blue" />,
    title: "家庭监测的盲区",
    subtitle: "突发突止，就医即缓解",
    desc: "梅尼埃病、前庭性偏头痛等疾病常突发突止。患者历经千辛万苦赶到医院时，症状往往已经缓解，导致传统设备检查出现假阴性。此外，前庭康复(VRT)极度缺乏居家设备的量化监控。",
    ref: "[8][9]",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e4a4d651?q=80&w=2070&auto=format&fit=crop",
    stats: "0",
    statsLabel: "传统设备的居家覆盖率"
  },
  {
    id: "triage",
    icon: <Activity className="w-16 h-16 text-brand-cyan" />,
    title: "急诊分诊生死速递",
    subtitle: "前庭神经炎 还是 恶性卒中？",
    desc: "在急诊室，急性前庭综合征患者急需快速区分是良性的前庭神经炎还是可能致命的后循环卒中。目前极度依赖医生的手法检查（HINTS），缺乏自动化的客观筛查工具，延误可能致命。",
    ref: "[10]",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    stats: "分秒必争",
    statsLabel: "急诊中枢排查"
  }
];

const PainPoints = () => {
  return (
    <>
      {/* 序章 Section: 抛出问题 */}
      <section className="w-full h-screen snap-start snap-always relative z-10 flex items-center justify-center bg-[#080808] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-accent-red/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/10 rounded-full blur-[150px] opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent-red/50 bg-accent-red/20 text-accent-red text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              Core Dilemma
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-8">
              60岁以上超 <span className="text-accent-red drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">30%</span> 人群<br className="hidden md:block"/>经历过眩晕
            </h2>
            <p className="text-2xl md:text-4xl text-gray-400 font-light tracking-wide">
              但为什么基层医疗却始终<span className="text-white font-bold border-b-2 border-accent-red">束手无策</span>？
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-20 flex flex-col items-center gap-3 text-accent-red/60"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest">四大结构性痛点</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 遍历渲染四大痛点，每个痛点独占一整屏 */}
      {painPointsData.map((item, index) => (
        <section 
          key={item.id}
          className="w-full h-screen snap-start snap-always relative z-10 flex items-center justify-center bg-[#0a0a0a] border-t border-white/5 overflow-hidden group"
        >
          {/* 全屏背景图与极其强烈的遮罩，保证沉浸感 */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
            style={{ backgroundImage: `url(${item.image})` }}
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* 左侧文字区 */}
            <motion.div
              initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-mono font-black text-gray-700">0{index + 1}</span>
                <div className="w-12 h-1 bg-gray-700" />
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                {item.icon}
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
                {item.title}
              </h3>
              <h4 className="text-xl md:text-2xl text-accent-red font-medium mb-8">
                {item.subtitle}
              </h4>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
                {item.desc}
              </p>
              <div className="inline-block px-3 py-1 bg-black/50 border border-white/10 rounded text-xs font-mono text-gray-500 uppercase tracking-widest">
                Citation: {item.ref}
              </div>
            </motion.div>

            {/* 右侧数字暴击区 (Big Typography) */}
            <motion.div
              className="hidden lg:flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.2 }}
            >
              <div className="text-6xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 text-center tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                {item.stats}
              </div>
              <div className="text-xl text-gray-400 tracking-widest uppercase font-medium">
                {item.statsLabel}
              </div>
            </motion.div>

          </div>
        </section>
      ))}
    </>
  );
};

export default PainPoints;
