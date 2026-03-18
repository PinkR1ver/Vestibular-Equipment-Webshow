import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const productTypes = [
  {
    id: 'vng',
    name: '高端 VNG / VOG 系统',
    positioning: '综合性前庭检查平台',
    price: '4.5万 - 6万美元',
    summary:
      '以高帧率视频眼动追踪、冷热试验、位置试验与多模块整合能力为核心，长期被视为完整前庭评估的主力配置。适合具备专科医生、独立检查室和较高预算的三级医院。',
    strengths: ['功能覆盖广', '支持高阶眼震观察', '适合作为科室级标准平台'],
    limits: ['采购成本高', '依赖暗室与专门空间', '操作与判读门槛高'],
    refs: '[11][12]'
  },
  {
    id: 'vhit',
    name: '视频头脉冲（vHIT）设备',
    positioning: '高频前庭功能快查工具',
    price: '1.3万 - 3万美元',
    summary:
      '强调便携化与高频半规管评估能力，适合门诊、诊间和部分急诊筛查场景。相比完整 VNG 平台更轻，但仍依赖稳定佩戴、标准化操作与专业判读。',
    strengths: ['部署相对灵活', '适合快速检查', '对特定场景效率较高'],
    limits: ['护目镜滑动易产生伪影', '覆盖能力较单一', '难独立承担完整诊断流程'],
    refs: '[21][23]'
  },
  {
    id: 'rotary',
    name: '旋转椅系统',
    positioning: '高规格前庭实验室设备',
    price: '8万 - 15万美元+',
    summary:
      '适用于更高阶、系统性的前庭刺激与双侧病变评估，常被视为前庭实验室级配置。优势在于检查深度，但代价是空间、施工、维护和资金门槛都很高。',
    strengths: ['刺激方式完整', '适合复杂病例', '对双侧病变评估价值高'],
    limits: ['需独立暗室', '常涉及地基/安装要求', '基层机构几乎无采购可能'],
    refs: '[26]'
  },
  {
    id: 'srm',
    name: '自动化复位系统（SRM-IV 类）',
    positioning: '耳石症自动化诊疗/复位设备',
    price: '约 120万 人民币',
    summary:
      '面向耳石症尤其是复杂或难治病例，强调多轴姿态控制、自动化流程和更标准化的复位路径。它解决的是特定病种治疗效率问题，而不是广泛基层筛查的普适入口。',
    strengths: ['针对 BPPV 场景价值明确', '流程标准化程度高', '适合头部专科中心'],
    limits: ['价格极高', '场景专用性强', '难以外溢到基层广泛部署'],
    refs: '[32][35]'
  }
];

const MarketSummary = () => {
  return (
    <section className="w-full min-h-screen snap-start snap-always relative z-10 flex items-center justify-center bg-[#090909] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden py-16">
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom,rgba(239,68,68,0.08),transparent_30%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-500/30 bg-gray-500/10 text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            PRODUCT TYPE SUMMARY
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">市场现有产品类型总结</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            当前前庭相关设备并非没有产品，而是已经被几类典型系统切分：一类追求全功能与实验室级能力，
            一类追求特定检查效率，一类面向高规格专病诊疗。它们共同的问题不是“做不到”，而是
            <span className="text-white font-semibold"> 成本高、场景重、操作复杂、难以下沉</span>。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productTypes.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 md:p-7 bg-black/40 border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">{item.positioning}</div>
                  <h3 className="text-2xl font-black text-white leading-tight">{item.name}</h3>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-1">Market Price</div>
                  <div className="text-lg md:text-xl font-mono font-black text-brand-cyan">{item.price}</div>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">{item.summary}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div className="text-xs text-brand-cyan uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> 代表价值
                  </div>
                  <ul className="space-y-2">
                    {item.strengths.map((point, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs text-accent-red uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                    <AlertTriangle className="w-4 h-4" /> 下沉阻力
                  </div>
                  <ul className="space-y-2">
                    {item.limits.map((point, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-red mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-gray-500">
                Ref: {item.refs}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSummary;
