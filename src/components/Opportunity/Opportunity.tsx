import { motion } from 'framer-motion';
import { Stethoscope, Activity, Smartphone } from 'lucide-react';

const opportunities = [
  {
    icon: <Stethoscope className="w-8 h-8 text-brand-cyan" />,
    title: "基层医疗筛查",
    market: "~1.8亿",
    desc: "社区医院简易BPPV筛查与复位。假设20%渗透率(7200家)，单价2.5万元。",
    delay: 0.2
  },
  {
    icon: <Activity className="w-8 h-8 text-brand-blue" />,
    title: "急诊/诊间快查",
    market: "~3.0亿",
    desc: "快速排除卒中。约2万台需求，单价1.5万元。极速分诊，挽救生命。",
    delay: 0.4
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: "居家与远程监测",
    market: "~0.8亿/年",
    desc: "10万活跃用户，800元/年服务费。前庭康复(VRT)的数字化疗法(DTx)。",
    delay: 0.6
  }
];

const Opportunity = () => {
  return (
    <div className="w-full h-full bg-background relative overflow-hidden flex flex-col justify-center px-6 lg:px-12 py-12">
      {/* 极客风背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="text-brand-cyan font-mono text-lg md:text-xl tracking-widest uppercase">The Blue Ocean</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-gray-300"
          >
            下沉与便携：开启
          </motion.h2>
          
          {/* 巨大的跳动数字效果 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-6xl md:text-7xl lg:text-[10rem] font-black leading-none my-8"
          >
            <span className="text-gradient-brand drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">5亿</span>
            <span className="text-gray-600 text-4xl md:text-6xl">-</span>
            <span className="text-gradient-brand drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">10亿</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-400 tracking-widest uppercase"
          >
            元的蓝海增量市场
          </motion.p>
        </div>

        {/* 三大增量场景卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 perspective-1000">
          {opportunities.map((opp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100, rotateY: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 + (idx * 0.2), type: "spring", bounce: 0.4 }}
              className="glass-panel p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="bg-surface/80 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/5 shadow-lg">
                {opp.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{opp.title}</h3>
              <div className="text-2xl font-black font-mono text-brand-cyan mb-2">
                {opp.market}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {opp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Opportunity;
