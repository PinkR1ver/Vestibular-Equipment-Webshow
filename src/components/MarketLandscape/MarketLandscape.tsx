import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Monitor, Glasses, Rotate3D, Armchair } from 'lucide-react'

// 用于渲染引用上标的小组件
const Citation = ({ number, link }: { number: string, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-5 h-5 ml-1 text-[10px] font-bold text-blue-400 bg-blue-400/10 rounded-full hover:bg-blue-400/30 hover:text-blue-300 transition-colors"
    title="查看来源文献"
  >
    {number}
  </a>
)

export default function MarketLandscape() {
  const devices = [
    {
      icon: <Monitor className="w-6 h-6 text-slate-300" />,
      name: "高端眼震视图仪 (VNG/VOG)",
      cost: "￥300,000 - 450,000",
      limit: "必须有专业暗室环境，配置高帧率和扭转追踪，仅限三甲中心",
      citations: [
        { num: "11", link: "#ref-11" },
        { num: "12", link: "#ref-12" }
      ]
    },
    {
      icon: <Glasses className="w-6 h-6 text-slate-300" />,
      name: "视频头脉冲测试 (vHIT)",
      cost: "￥90,000 - 210,000",
      limit: "虽用于高频评估，但穿戴极易发生滑动伪影，对操作手法要求极高",
      citations: [
        { num: "21", link: "#ref-21" },
        { num: "23", link: "#ref-23" }
      ]
    },
    {
      icon: <Armchair className="w-6 h-6 text-slate-300" />,
      name: "大型旋转椅系统 (Rotary Chair)",
      cost: "￥600,000 - 1,000,000+",
      limit: "极度昂贵，需要独立暗室舱体和加固地基工程，仅作科研或大型医疗中心使用",
      citations: [
        { num: "26", link: "#ref-26" }
      ]
    },
    {
      icon: <Rotate3D className="w-6 h-6 text-slate-300" />,
      name: "自动化耳石症诊疗系统",
      cost: "约 ￥1,200,000",
      limit: "中国特色的大型多轴转椅系统，主要解决难治性BPPV，中标价极高",
      citations: [
        { num: "32", link: "#ref-32" },
        { num: "35", link: "#ref-35" }
      ]
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 w-full mt-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
          <AlertTriangle className="text-yellow-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            现状：笨重、昂贵、被巨头垄断
          </h2>
        </div>
        <p className="text-lg text-slate-400 text-center md:text-left">
          纵观当前临床市场，所有的精准前庭评估设备依然停留在重型工业仪器阶段，被少数海外与国内巨头把持。
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {devices.map((device, index) => (
          <motion.div
            key={index}
            // 每张卡片从左侧滑入，通过 delay 控制先后顺序
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-5/12">
              <div className="p-3 bg-slate-700 rounded-lg shrink-0">
                {device.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                {device.name}
                <span className="inline-flex ml-1">
                  {device.citations.map((cite, i) => (
                    <Citation key={i} number={cite.num} link={cite.link} />
                  ))}
                </span>
              </h3>
            </div>
            
            <div className="w-full md:w-3/12 text-left md:text-center mb-4 md:mb-0">
              <span className="text-sm text-slate-400 block mb-1">估算造价</span>
              <span className="text-xl md:text-2xl font-mono font-bold text-red-400">{device.cost}</span>
            </div>

            <div className="w-full md:w-4/12 md:text-right">
              <p className="inline-block px-4 py-3 bg-slate-900 text-slate-300 text-sm rounded-xl border border-slate-700 text-left">
                {device.limit}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

