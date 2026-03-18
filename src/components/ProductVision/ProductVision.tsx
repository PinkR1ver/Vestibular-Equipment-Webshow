import { motion } from 'framer-motion';
import { Activity, Cloud, Home, Sparkles, Stethoscope } from 'lucide-react';

const products = [
  {
    id: 'home-capture',
    icon: <Activity className="w-5 h-5" />,
    eyebrow: 'HOME SCREENING',
    title: '居家检测眼动设备',
    subtitle: '在发作现场捕捉短暂而关键的眼动证据',
    desc: '面向梅尼埃病、前庭性偏头痛、阵发性眩晕等“到院即缓解”的场景，让患者在家中完成快速采集，把一次性症状转化为可回看的客观数据。',
    bullets: ['眼动/头动快速采集', '发作期即时记录', '为远程初筛提供客观线索'],
    accent: 'from-cyan-400/30 via-sky-500/10 to-transparent',
    glow: 'bg-cyan-400/20',
  },
  {
    id: 'home-rehab',
    icon: <Home className="w-5 h-5" />,
    eyebrow: 'HOME REHAB',
    title: '居家恢复训练设备',
    subtitle: '把前庭康复从“口头医嘱”升级为可量化训练',
    desc: '面向院外康复过程，强调训练引导、动作反馈与依从性跟踪，让前庭康复不再停留在纸面动作说明，而是真正形成连续的数据闭环。',
    bullets: ['训练任务引导', '动作质量反馈', '恢复进度长期追踪'],
    accent: 'from-violet-400/30 via-fuchsia-500/10 to-transparent',
    glow: 'bg-violet-400/20',
  },
  {
    id: 'clinical-station',
    icon: <Stethoscope className="w-5 h-5" />,
    eyebrow: 'CLINIC READY',
    title: '诊间快速评估设备',
    subtitle: '把复杂前庭检查压缩进更轻、更快的工作流',
    desc: '面向门诊、诊间和基层机构，用更轻量的硬件形态与更直接的软件界面完成快速检查，缩短操作路径，降低培训门槛。',
    bullets: ['更适合诊间部署', '更短检查路径', '更友好的标准化判读'],
    accent: 'from-emerald-400/30 via-teal-500/10 to-transparent',
    glow: 'bg-emerald-400/20',
  },
];

const platformNodes = [
  'Eye-motion capture',
  'AI interpretation',
  'Training feedback',
  'Cloud case sync',
];

const ProductVision = () => {
  return (
    <div className="w-full h-full bg-[#071018] relative overflow-hidden flex flex-col justify-center px-6 lg:px-12 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.14),transparent_30%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
          className="mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-medium tracking-[0.18em] mb-4 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
Product System Summary
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight">
            三类终端背后共享的是
            <br />
            <span className="text-gradient-brand">同一层产品能力</span>
          </h2>
          <p className="max-w-3xl text-sm md:text-lg text-gray-400 leading-relaxed">
            这不是三个互不相关的设备概念，而是一套能够在家庭筛查、居家康复与诊间评估之间连续运转的产品系统：前端形态不同，底层采集、分析、反馈与病例管理能力一致。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12, type: 'spring', bounce: 0.2 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group min-h-[420px] flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-80 pointer-events-none`} />
                <div className="absolute inset-x-6 top-6 h-40 rounded-[1.75rem] border border-white/10 bg-black/30 overflow-hidden">
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl ${product.glow}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
                  <div className="absolute inset-5 rounded-[1.25rem] border border-dashed border-white/15 flex flex-col items-center justify-center text-center px-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center text-brand-cyan mb-3">
                      {product.icon}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-2">Product Render Slot</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      这里后续替换为 hand-drawn / Gemini 生成的产品图
                    </div>
                  </div>
                </div>

                <div className="relative z-10 px-6 pt-[15.5rem] pb-6 flex flex-col h-full">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-3">{product.eyebrow}</div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">{product.title}</h3>
                  <div className="text-sm text-brand-cyan mb-4 leading-relaxed">{product.subtitle}</div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{product.desc}</p>

                  <div className="mt-auto space-y-2">
                    {product.bullets.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden p-6 lg:p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_28%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-3">Vestibular Intelligence Layer</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                三类终端，
                <span className="text-gradient-brand">共用一层智能能力</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                真正的差异化不只是硬件形态，而是同一套采集、分析、反馈与病例管理能力，能够根据家庭、康复、诊间三种场景灵活落地。
              </p>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[14%] rounded-full border border-brand-cyan/15" />
                <div className="absolute inset-[28%] rounded-full border border-violet-400/15" />

                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl border border-white/10 bg-black/40 text-xs tracking-[0.2em] uppercase text-gray-300">
                  Home Screening
                </div>
                <div className="absolute left-[2%] bottom-[18%] px-4 py-2 rounded-2xl border border-white/10 bg-black/40 text-xs tracking-[0.2em] uppercase text-gray-300">
                  Home Rehab
                </div>
                <div className="absolute right-[0%] bottom-[20%] px-4 py-2 rounded-2xl border border-white/10 bg-black/40 text-xs tracking-[0.2em] uppercase text-gray-300">
                  Clinic Device
                </div>

                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-px h-[16%] bg-gradient-to-b from-brand-cyan/70 to-transparent" />
                <div className="absolute left-[24%] bottom-[33%] w-[22%] h-px bg-gradient-to-r from-transparent to-violet-400/60 rotate-[22deg] origin-right" />
                <div className="absolute right-[24%] bottom-[33%] w-[22%] h-px bg-gradient-to-l from-transparent to-emerald-400/60 -rotate-[22deg] origin-left" />

                <div className="relative z-10 w-[52%] aspect-square rounded-[2rem] border border-white/12 bg-black/45 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.12)] flex flex-col items-center justify-center text-center px-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Cloud className="w-7 h-7" />
                  </div>
                  <div className="text-sm uppercase tracking-[0.22em] text-gray-500 mb-2">Shared Core</div>
                  <div className="text-xl font-black text-white leading-tight mb-4">Vestibular Platform</div>
                  <div className="space-y-2 text-xs text-gray-300">
                    {platformNodes.map((node, idx) => (
                      <div key={idx} className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03]">
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-gray-400">
                院外捕捉短时症状
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-gray-400">
                院外训练形成连续数据
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-gray-400">
                诊间评估走向标准化
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductVision;
