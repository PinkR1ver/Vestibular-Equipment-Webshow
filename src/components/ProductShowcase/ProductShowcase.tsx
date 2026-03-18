import { motion } from 'framer-motion';
import { Activity, ArrowDown, Home, Stethoscope } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const chapters = [
  {
    id: 'intro',
    type: 'intro',
    eyebrow: 'OUR PRODUCT',
    title: '先把第一件产品讲清楚',
    desc: '这一段先聚焦 Chapter 01：居家检测眼动设备。我们先把最核心的家庭场景入口定义清楚，再继续展开后续恢复与诊间终端。',
    accent: 'from-cyan-400/16 via-sky-500/8 to-transparent',
    pageTone: 'from-[#08111d] via-[#071018] to-[#060b14]',
  },
  {
    id: 'home-capture',
    type: 'product',
    icon: <Activity className="w-5 h-5" />,
    eyebrow: 'CHAPTER 01 · HOME SCREENING',
    title: '居家检测眼动设备',
    tagline: '在症状出现的第一现场，捕捉最关键的眼动证据',
    description:
      '这是一套极简的手机耦合式眼动采集 kit：通过光学镜头、LED 补光与眼部贴合结构，在家庭场景中快速完成采集，并把短暂发作转化为可回看的客观记录。',
    keywords: ['clip-on kit', 'optics + LED', 'smartphone workflow', 'eye-motion report'],
    accent: 'from-cyan-400/20 via-sky-400/8 to-transparent',
    pageTone: 'from-[#08141d] via-[#071018] to-[#050b12]',
    glow: 'bg-cyan-400/25',
    image: `${baseUrl}concepts/home-eye-motion-hero.png`,
    sketch: false,
    featureList: [
      {
        title: '极简 kit 形态',
        text: '不是笨重主机，而是更接近手机外挂镜头附件的轻量化结构，降低家庭端使用门槛。',
      },
      {
        title: '面向发作期捕捉',
        text: '专门解决“到院即缓解”的问题，把难以复现的短时症状留存在手机端。',
      },
      {
        title: '直接进入分析流程',
        text: '采集完成后，手机端可直接进入算法分析与结构化报告输出，形成远程初筛基础。',
      },
    ],
    usageFlow: ['夹持 / 对位', '眼动采集', '手机分析', '生成报告'],
  },
  {
    id: 'home-rehab',
    type: 'teaser',
    icon: <Home className="w-5 h-5" />,
    eyebrow: 'NEXT CHAPTER · HOME REHAB',
    title: '居家恢复训练设备',
    tagline: '后续展开：把训练动作、依从性和恢复进展真正做成持续产品。',
    accent: 'from-violet-400/20 via-fuchsia-400/8 to-transparent',
    pageTone: 'from-[#140a1d] via-[#100816] to-[#07050d]',
    glow: 'bg-violet-400/25',
  },
  {
    id: 'clinic-device',
    type: 'teaser',
    icon: <Stethoscope className="w-5 h-5" />,
    eyebrow: 'NEXT CHAPTER · CLINIC READY',
    title: '诊间快速评估设备',
    tagline: '后续展开：把复杂的传统检查压缩进更适合诊间流转的标准化入口。',
    accent: 'from-emerald-400/20 via-teal-400/8 to-transparent',
    pageTone: 'from-[#081712] via-[#07110d] to-[#050a08]',
    glow: 'bg-emerald-400/25',
  },
];

const ProductShowcase = () => {
  return (
    <>
      {chapters.map((chapter, idx) => {
        const isIntro = chapter.type === 'intro';
        const isProduct = chapter.type === 'product';
        const isTeaser = chapter.type === 'teaser';
        const hasPrevPeek = idx > 0;

        return (
          <section
            key={chapter.id}
            className="w-full h-screen snap-start snap-always relative z-10 overflow-hidden border-t border-white/5"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${chapter.pageTone}`} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className={`absolute inset-0 bg-gradient-to-br ${chapter.accent} pointer-events-none`} />

            {hasPrevPeek && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[94%] h-8 rounded-b-[2rem] bg-white/[0.03] border-x border-b border-white/8 opacity-70 pointer-events-none" />
            )}

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 py-10 flex items-center">
              <div className="w-full rounded-[2.2rem] border border-white/10 bg-black/25 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden relative min-h-[82vh] flex items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_22%)] pointer-events-none" />

                {isIntro && (
                  <div className="relative z-10 w-full h-full px-8 md:px-12 lg:px-16 py-12 flex flex-col justify-center items-center text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8 }}
                      className="max-w-4xl"
                    >
                      <div className="inline-block px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-[0.22em] uppercase mb-5">
                        {chapter.eyebrow}
                      </div>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                        先把第一件产品
                        <br />
                        <span className="text-gradient-brand">做得足够成立</span>
                      </h2>
                      <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-400 leading-relaxed mb-10">
                        {chapter.desc}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mt-2"
                    >
                      <div className="rounded-[1.6rem] border border-cyan-300/20 bg-cyan-400/[0.05] p-5 text-left md:-translate-y-4 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                        <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300/70 mb-3">FOCUS NOW</div>
                        <div className="text-xl font-black text-white mb-2">居家检测眼动设备</div>
                        <div className="text-sm text-gray-300 leading-relaxed">先把家庭入口、采集形态和手机分析 workflow 讲清楚。</div>
                      </div>
                      <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 text-left opacity-70">
                        <div className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-3">NEXT</div>
                        <div className="text-xl font-black text-white mb-2">居家恢复训练设备</div>
                        <div className="text-sm text-gray-400 leading-relaxed">后续再展开训练动作、依从性和长期恢复数据。</div>
                      </div>
                      <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 text-left opacity-70">
                        <div className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-3">LATER</div>
                        <div className="text-xl font-black text-white mb-2">诊间快速评估设备</div>
                        <div className="text-sm text-gray-400 leading-relaxed">后续再收敛为诊间部署版本与标准化检查路径。</div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="mt-10 flex flex-col items-center gap-2 text-gray-500"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                      <span className="text-xs uppercase tracking-[0.28em]">Scroll to Chapter 01</span>
                      <ArrowDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                )}

                {isProduct && (
                  <div className="relative z-10 w-full h-full px-8 md:px-10 lg:px-12 py-10 grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 0.8 }}
                      className="order-2 xl:order-1"
                    >
                      <div className="text-[11px] uppercase tracking-[0.26em] text-gray-500 mb-4">{chapter.eyebrow}</div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">{chapter.title}</h3>
                      <div className="text-lg md:text-xl text-brand-cyan mb-5 leading-relaxed">{chapter.tagline}</div>
                      <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">{chapter.description}</p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {chapter.keywords?.map((keyword, i) => (
                          <span key={i} className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs md:text-sm font-mono text-gray-300">
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-3xl">
                        {chapter.featureList?.map((item, i) => (
                          <div key={i} className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4">
                            <div className="text-sm font-bold text-white mb-2">{item.title}</div>
                            <div className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.text}</div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.6rem] border border-cyan-300/15 bg-cyan-400/[0.04] p-5 md:p-6 max-w-2xl mb-4">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/70 mb-3">Why this product matters</div>
                        <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                          把“发作时有症状、到院时已缓解”的问题转化为可在家庭场景中主动捕捉的客观证据，是整个产品线最关键的第一入口。
                        </div>
                      </div>

                      <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-5 md:p-6 max-w-2xl">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-3">User workflow</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {chapter.usageFlow?.map((step, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center">
                              <div className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mb-2">0{i + 1}</div>
                              <div className="text-sm text-gray-200">{step}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40, scale: 0.97 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 0.85, delay: 0.08 }}
                      className="order-1 xl:order-2"
                    >
                      <div className="relative rounded-[2rem] border border-white/10 bg-black/30 overflow-hidden min-h-[28rem] lg:min-h-[36rem]">
                        <div className={`absolute left-1/2 top-10 -translate-x-1/2 w-52 h-52 rounded-full blur-3xl ${chapter.glow}`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_58%)]" />
                        <img src={chapter.image} alt={chapter.title} className="absolute inset-0 w-full h-full object-cover opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/25 to-transparent" />
                        <div className="absolute inset-5 rounded-[1.5rem] border border-white/12" />
                        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full border border-white/12 bg-black/35 backdrop-blur-md text-[10px] uppercase tracking-[0.25em] text-gray-200">
                          Hero Render
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {isTeaser && (
                  <div className="relative z-10 w-full h-full px-8 md:px-12 lg:px-16 py-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8 }}
                      className="max-w-4xl opacity-75"
                    >
                      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-xs font-bold tracking-[0.22em] uppercase mb-5">
                        {chapter.icon}
                        {chapter.eyebrow}
                      </div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 text-white">{chapter.title}</h3>
                      <p className="max-w-3xl text-base md:text-xl text-gray-400 leading-relaxed mb-8">{chapter.tagline}</p>
                      <div className="inline-block px-4 py-2 rounded-2xl border border-white/10 bg-black/25 text-sm text-gray-500">
                        暂时作为后续章节占位，当前优先把 Chapter 01 做完整。
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductShowcase;
