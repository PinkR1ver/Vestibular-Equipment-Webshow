import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, BrainCircuit, Home, Activity } from 'lucide-react'

// 定义统一的卡片出现动画（从下方轻微划入）
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  }
}

// 容器动画：控制内部子元素的交错展示（stagger）
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // 每个卡片延迟 0.2s 出现
  }
}

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

export default function PainPoints() {
  const painPoints = [
    {
      icon: <DollarSign className="w-8 h-8 text-red-400" />,
      title: "天价与场地墙",
      desc: (
        <>
          传统眼震视图仪(VNG)系统售价高达 15-40万<Citation number="4" link="#ref-4" />，若配置旋转椅甚至超百万<Citation number="5" link="#ref-5" />。
          <br/><br/>
          设备要求专门的暗室以消除视觉干扰，极大地增加了空间成本。此外，公立医院前庭检查收费相对较低且耗时，基层机构几乎没有采购意愿和能力<Citation number="6" link="#ref-6" />。
        </>
      )
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-orange-400" />,
      title: "极高的操作与判读门槛",
      desc: (
        <>
          诸如冷热试验需精准控制温度与灌注，操作不当会导致误差或患者剧烈呕吐。
          <br/><br/>
          VNG输出的波形图极为复杂，区分中枢性与外周性眼震需要深厚的专业知识储备。基层医生由于缺乏系统培训，常常导致误诊<Citation number="7" link="#ref-7" />。
        </>
      )
    },
    {
      icon: <Home className="w-8 h-8 text-yellow-400" />,
      title: "家庭监测的盲区",
      desc: (
        <>
          梅尼埃病或前庭性偏头痛常突发突止。患者就医时症状往往已经缓解，导致检查结果出现假阴性，目前市场极度缺乏可穿戴设备进行动态监测<Citation number="8" link="#ref-8" />。
          <br/><br/>
          前庭康复(VRT)高度依赖居家训练，却无法量化患者的训练质量与依从性<Citation number="9" link="#ref-9" />。
        </>
      )
    },
    {
      icon: <Activity className="w-8 h-8 text-pink-400" />,
      title: "急诊分诊的生死速递",
      desc: (
        <>
          急诊科面临着巨大的时间压力，需要快速区分致命的脑卒中与普通的孤立性前庭综合征（如前庭神经炎）。
          <br/><br/>
          目前 HINTS 检查主要依赖医生的主观手法经验，缺乏自动化、标准化的客观筛查工具来辅助生死攸关的临床决策<Citation number="10" link="#ref-10" />。
        </>
      )
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 w-full">
      {/* 标题部分使用淡入动画 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
          60岁以上超30%人群经历眩晕，<br className="hidden md:block"/> 但基层诊断为何束手无策？
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          前庭系统诊断深度依赖“刺激-反应”模式。传统的前庭神经评估完全依赖昂贵且笨重的中心化设备，导致医疗资源严重错配，患者被迫集中在三级医院。
        </p>
      </motion.div>

      {/* 痛点卡片网格，使用容器交错动画 */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {painPoints.map((point, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors flex flex-col"
          >
            <div className="bg-slate-900/50 p-4 rounded-xl inline-block mb-6 self-start">
              {point.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-100">{point.title}</h3>
            <p className="text-slate-400 leading-relaxed flex-grow">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

