import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Eye, Cloud } from 'lucide-react'

// 用于渲染引用上标的小组件
const Citation = ({ number, link }: { number: string, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-semibold text-emerald-800 bg-emerald-400/80 rounded-full hover:bg-emerald-300 hover:text-emerald-900 transition-colors"
    title="查看来源文献"
  >
    {number}
  </a>
)

export default function ProductVision() {
  const features = [
    {
      icon: <Eye className="w-10 h-10 text-emerald-400" />,
      title: "便携化硬件 + 手机级采集",
      desc: (
        <>
          彻底抛弃沉重的灯杆与大型暗室。利用超低成本便携外设结合现代智能手机的高清摄像头和高精度传感器，实现随时随地采集患者高质量的眼震数据
          <Citation number="1" link="#ref-1" />
          <Citation number="2" link="#ref-2" />。
        </>
      )
    },
    {
      icon: <Cpu className="w-10 h-10 text-emerald-400" />,
      title: "AI 辅助判读算法中心",
      desc: (
        <>
          将繁杂波形交给机器。基于海量临床数据训练的卷积神经网络 (CNN)
          <Citation number="43" link="#ref-43" />，精准提取眼震特征，自动输出 HINTS 筛查建议及耳石定位，赋能基层医生「零门槛」操作。
        </>
      )
    },
    {
      icon: <Cloud className="w-10 h-10 text-emerald-400" />,
      title: "云端数字疗法 (DTx) 闭环",
      desc: (
        <>
          不仅是筛查，更是治疗闭环。为眩晕患者提供居家动态监测穿戴
          <Citation number="44" link="#ref-44" />，数据实时同步云端，并量化评估前庭康复(VRT)训练效果，开创慢性眩晕的管理模式
          <Citation number="45" link="#ref-45" />。
        </>
      )
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 w-full mt-10">
      <motion.div 
        // 整体区块的大型淡入动画
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-900 border border-emerald-900/50 relative overflow-hidden"
      >
        {/* 极简苹果风发布会式排版 */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2 
            // 标题向上浮现
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-50 tracking-tight"
          >
            重塑前庭评估
          </motion.h2>
          <motion.p 
            // 副标题稍微延迟浮现
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-emerald-400/90 font-medium max-w-2xl mx-auto"
          >
            轻量化智能硬件 × AI 判读大模型
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              // 卡片依次带有回弹效果的向上弹出
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 背景光影效果：制造出绿色的极客光晕 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-emerald-500/20 blur-[100px] pointer-events-none rounded-full"></div>
      </motion.div>
    </section>
  )
}
