import React from 'react'
import PainPoints from './components/PainPoints/PainPoints'
import MarketLandscape from './components/MarketLandscape/MarketLandscape'
import Opportunity from './components/Opportunity/Opportunity'
import ProductVision from './components/ProductVision/ProductVision'
import References from './components/References/References'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* 采用暗黑极客风背景，整个应用就是一个纯粹的垂直滚动流 */}
      <main className="flex flex-col gap-24 py-20 pb-20">
        <PainPoints />
        <MarketLandscape />
        <Opportunity />
        <ProductVision />
        <References />
      </main>
    </div>
  )
}

export default App
