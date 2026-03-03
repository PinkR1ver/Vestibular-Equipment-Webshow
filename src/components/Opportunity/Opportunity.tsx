import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Stethoscope, ActivitySquare, Smartphone } from 'lucide-react'

// 用于渲染引用上标的小组件
const Citation = ({ number, link }: { number: string, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full hover:bg-blue-400/30 hover:text-blue-300 transition-colors"
    title="查看来源文献"
  >
    {number}
  </a>
)

export default function Opportunity() {
  const markets = [
    {
      title: "基层医疗筛查",
      value: "1.8",
      unit: "亿",
      desc: "社区卫生服务中心、乡镇诊所的简易 BPPV 筛查与复位。预估单价2.5万元，渗透率20%（约7200家）。",
      icon: <Stethoscope className="w-6 h-6 text-blue-400" />
    },
    {
      title: "急诊/诊间快查",
      value: "3.0",
      unit: "亿",
      desc: "急诊科快速排除恶性卒中(HINTS)。以需求量2万台、目标单价1.5万元进行测算。",
      icon: <ActivitySquare className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "居家与远程监测",
      value: "0.8",
      unit: "亿/年",
      desc: "慢性眩晕患者的可穿戴监测与基于云端的数字疗法(DTx)订阅。假设10万活跃用户，800元/年服务费。",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 w-full mt-10">
      <motion.div 
        // 向上淡入动画
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6">
          <TrendingUp className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
          下沉与便携的蓝海增量
        </h2>
        <p className="text-2xl font-mono text-blue-400 font-semibold mb-4">
          ~ 500,000,000 - 1,000,000,000 RMB
        </p>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          抛开被巨头卷成红海的三甲医院市场，针对下沉市场和家庭的轻量化设备，
          将释放超过传统市场数倍的巨大潜力。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {markets.map((market, index) => (
          <motion.div
            key={index}
            // 缩放弹出动画，带有一点回弹 (spring)
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative p-8 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col"
          >
            {/* 装饰性背景光晕，hover 时放大 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div className="mb-6 inline-block p-4 bg-slate-950 rounded-2xl relative z-10 self-start">
              {market.icon}
            </div>
            
            <h3 className="text-xl font-bold text-slate-200 mb-2 relative z-10">{market.title}</h3>
            <p className="text-sm text-slate-400 mb-6 relative z-10 flex-grow">{market.desc}</p>
            
            <div className="flex items-baseline gap-1 mt-auto relative z-10 pt-4 border-t border-slate-700/50">
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {market.value}
              </span>
              <span className="text-slate-400 font-bold">{market.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

