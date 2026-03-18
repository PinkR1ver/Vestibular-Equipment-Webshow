const referencesData = [
  { id: "[1]", text: "Smith J. et al. Smartphone-based videonystagmography: A systematic review. J Neurol. 2023." },
  { id: "[2]", text: "Doe A. Low-cost hardware for vestibular assessment in primary care. Otol Neurotol. 2022." },
  { id: "[4]", text: "Market Report: Global Vestibular Testing Equipment Market 2023-2028." },
  { id: "[5]", text: "Hospital Procurement Database 2023: Average cost of Rotary Chair Systems." },
  { id: "[6]", text: "Primary Care Survey: Barriers to adopting vestibular diagnostic tools. 2022." },
  { id: "[7]", text: "Johnson K. Misdiagnosis rates of central vs peripheral vertigo in emergency settings. Stroke. 2021." },
  { id: "[8]", text: "Meniere's Disease Society. The challenge of false negatives in episodic vertigo. 2023." },
  { id: "[9]", text: "Vestibular Rehabilitation Therapy (VRT) compliance and outcomes. Phys Ther. 2022." },
  { id: "[10]", text: "Kattah JC et al. HINTS to diagnose stroke in the acute vestibular syndrome. Stroke. 2009." },
  { id: "[11]", text: "VisualEyes 525 Product Specifications and Pricing Guide. 2023." },
  { id: "[12]", text: "Comparison of high-frame-rate VOG systems. J Vestib Res. 2022." },
  { id: "[21]", text: "EyeSeeCam vHIT clinical validation study. 2021." },
  { id: "[23]", text: "ICS Impulse pricing and market penetration report. 2022." },
  { id: "[26]", text: "Orion Rotary Chair installation requirements and cost analysis. 2023." },
  { id: "[32]", text: "SRM-IV BPPV automated treatment system clinical efficacy. Chin Med J. 2021." },
  { id: "[35]", text: "China Medical Equipment Bidding Data 2022: SRM-IV." },
  { id: "[43]", text: "Deep learning for nystagmus classification and HINTS automation. Artif Intell Med. 2023." },
  { id: "[44]", text: "Digital Therapeutics (DTx) in vestibular rehabilitation. NPJ Digit Med. 2023." },
  { id: "[45]", text: "Cloud-based monitoring of remote VRT patients. Telemed J E Health. 2022." },
];

const References = () => {
  return (
    <section className="py-20 bg-background border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-400 mb-8 tracking-wider uppercase text-center">
          References & Citations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-500 font-mono">
          {referencesData.map((ref, idx) => (
            <div key={idx} className="flex gap-3 hover:text-gray-300 transition-colors">
              <span className="text-brand-cyan shrink-0">{ref.id}</span>
              <span className="leading-relaxed">{ref.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-xs text-gray-600">
          <p>© 2026 Vestibular Wisdom Pitch Deck. All data and citations are for demonstration purposes.</p>
        </div>
      </div>
    </section>
  );
};

export default References;
