import React from 'react'

export default function References() {
  const references = [
    {
      id: "1",
      title: "Portable Nystagmus Detection and Monitoring Device for Diagnosis and Management of Vestibular Disorders",
      source: "Explore Technologies - Stanford",
      link: "https://techfinder.stanford.edu/technology/portable-nystagmus-detection-and-monitoring-device-diagnosis-and-management-vestibular"
    },
    {
      id: "2",
      title: "Smartphones versus goggles for video-oculography: current status and future direction",
      source: "Research in Vestibular Science",
      link: "https://e-rvs.org/journal/view.php?number=976"
    },
    {
      id: "4",
      title: "VNG / VHIT equipment for sale",
      source: "AudiologyOnline",
      link: "https://www.audiologyonline.com/general/vng-vhit-equipment-for-sale"
    },
    {
      id: "5",
      title: "Vestibular Assessment: VNG, Rotary Chair, vHIT, & VEMP Protocols and Practice",
      source: "The American Institute of Balance ®",
      link: "https://dizzy.com/product/vestibular-assessment-vng-vemp-vhit-protocols-and-practice/"
    },
    {
      id: "6",
      title: "医疗服务项目价格公示表",
      source: "Public Health Data",
      link: "https://www.ygrhhospital.com/Upload/file/20250303/20250303163013_1128.pdf"
    },
    {
      id: "7",
      title: "Needs and supporting tools for primary care physicians to improve care of patients with vertigo and dizziness: a national survey",
      source: "PubMed Central",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10495563/"
    },
    {
      id: "8",
      title: "The challenges of managing vestibular disorders: a qualitative study of clinicians’ experiences associated with low referral rates for vestibular rehabilitation",
      source: "PubMed",
      link: "https://pubmed.ncbi.nlm.nih.gov/19832817/"
    },
    {
      id: "9",
      title: "Clinical application of virtual reality for vestibular rehabilitation",
      source: "Research in Vestibular Science",
      link: "https://www.e-rvs.org/journal/view.php?number=985"
    },
    {
      id: "10",
      title: "Dizziness: Approach to Evaluation and Management",
      source: "AAFP",
      link: "https://www.aafp.org/pubs/afp/issues/2017/0201/p154.html"
    },
    {
      id: "11",
      title: "Technical Specifications - VisualEyes",
      source: "Interacoustics",
      link: "https://www.interacoustics.com/images/files/specifications/D-0134112-B_2024_11_VisualEyes_Technical_Specifications.pdf"
    },
    {
      id: "12",
      title: "VisualEyes™ | Videonystagmography (VNG) system",
      source: "Interacoustics",
      link: "https://www.interacoustics.com/balance-testing-equipment/visualeyes"
    },
    {
      id: "21",
      title: "EyeSeeCam vHIT | vHIT system and goggles",
      source: "Interacoustics",
      link: "https://www.interacoustics.com/balance-testing-equipment/eyeseecam-vhit"
    },
    {
      id: "23",
      title: "ICS IMPULSE - Natus Hearing & Balance",
      source: "MedicalExpo",
      link: "https://pdf.medicalexpo.com/pdf/natus-hearing-balance/ics-impulse/70796-154192.html"
    },
    {
      id: "26",
      title: "Interacoustics Orion Models",
      source: "e3 Diagnostics",
      link: "https://e3diagnostics.com/products/interacoustics-orion"
    },
    {
      id: "32",
      title: "SRM-IV Vestibular Function Diagnosis and Treatment System",
      source: "SRMTEC",
      link: "http://en.srmtec.com/"
    },
    {
      id: "35",
      title: "驻马店市中心医院良性阵发性位置性眩晕诊疗系统中标公告",
      source: "河南省政府采购网",
      link: "https://zhongyuan.zfcg.henan.gov.cn/henan/content?infoId=1868916&channelCode=H780602"
    },
    {
      id: "43",
      title: "Smartphone video nystagmography using convolutional neural networks: ConVNG",
      source: "PMC",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10129923/"
    },
    {
      id: "44",
      title: "Wearable sensor and smartphone assisted vestibular physical therapy for multiple sclerosis: usability and outcomes",
      source: "Frontiers",
      link: "https://www.frontiersin.org/journals/rehabilitation-sciences/articles/10.3389/fresc.2024.1406926/full"
    },
    {
      id: "45",
      title: "Digital Therapeutics in China: Comprehensive Review",
      source: "PubMed",
      link: "https://pubmed.ncbi.nlm.nih.gov/40424619/"
    }
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 w-full mt-24 border-t border-slate-800 pt-12">
      <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
        参考文献 & 数据来源
      </h3>
      <div className="space-y-4">
        {references.map((ref) => (
          <div key={ref.id} id={`ref-${ref.id}`} className="text-sm flex gap-3 text-slate-500 group">
            <span className="font-mono text-slate-600 select-none">[{ref.id}]</span>
            <p className="leading-relaxed">
              {ref.title}. <em className="text-slate-400">{ref.source}</em>.{" "}
              <a 
                href={ref.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500/70 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors break-all"
              >
                [Link]
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
