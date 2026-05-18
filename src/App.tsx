/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Cloud, 
  Star, 
  Play, 
  Download, 
  Palette, 
  Youtube, 
  Gamepad2, 
  Heart,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const LOGO_VARIANTS = [
  {
    id: 1,
    src: "/src/assets/images/kids_zone_logo_1_1779102845624.png",
    name: "Classic Playful",
    tagline: "The original colorful mascot logo"
  },
  {
    id: 2,
    src: "/src/assets/images/kids_zone_logo_2_1779102860699.png",
    name: "Gamer Zone",
    tagline: "Perfect for gaming-focused content"
  },
  {
    id: 3,
    src: "/src/assets/images/kids_zone_logo_3_1779102874401.png",
    name: "Happy Friends",
    tagline: "Featuring our friendly channel mascots"
  },
  {
    id: 4,
    src: "/src/assets/images/kids_zone_logo_4_1779102889771.png",
    name: "Modern Minimal",
    tagline: "Clean, bold, and highly readable"
  },
  {
    id: 5,
    src: "/src/assets/images/kids_zone_logo_5_1779102903817.png",
    name: "Starry Night",
    tagline: "Soft colors for early learning vibes"
  }
];

const COLORS = [
  { name: "Sky Blue", hex: "#00E5FF", class: "bg-[#00E5FF]" },
  { name: "Sunshine Yellow", hex: "#FFD600", class: "bg-[#FFD600]" },
  { name: "Bubblegum Pink", hex: "#FF4081", class: "bg-[#FF4081]" },
  { name: "Tiger Orange", hex: "#FF6D00", class: "bg-[#FF6D00]" },
  { name: "Joyful Purple", hex: "#AA00FF", class: "bg-[#AA00FF]" },
  { name: "Eco Green", hex: "#00C853", class: "bg-[#00C853]" },
];

export default function App() {
  const [selectedLogo, setSelectedLogo] = useState(LOGO_VARIANTS[0]);

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-slate-900 font-sans selection:bg-pink-200">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 text-sky-400"
        >
          <Cloud size={80} fill="currentColor" />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 text-yellow-400"
        >
          <Star size={40} fill="currentColor" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-40 left-1/4 text-pink-400"
        >
          <Heart size={30} fill="currentColor" />
        </motion.div>
      </div>

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-sky-200">
              <Sparkles size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-purple-600">
              Kids Zone <span className="font-light text-slate-400">Branding</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#assets" className="hover:text-sky-600 transition-colors">Assets</a>
            <a href="#palette" className="hover:text-sky-600 transition-colors">Color Palette</a>
            <a href="#preview" className="hover:text-sky-600 transition-colors">Previews</a>
            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all font-semibold flex items-center gap-2 group">
              Download Kit <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Intro */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={12} fill="currentColor" />
              Professional Creator Identity
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Playful Branding for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                Future Leaders
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              The 'Kids Zone' identity is designed to be vibrant, accessible, and instantly recognizable. 
              Built with soft shapes and engaging mascot elements to connect with children aged 4-12.
            </p>
          </motion.div>

          {/* Hero Logo Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/50 to-purple-100/50 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLogo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 flex items-center justify-center"
                >
                  <img 
                    src={selectedLogo.src} 
                    alt={selectedLogo.name} 
                    className="w-full h-full object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Identity</h2>
                <p className="text-slate-500">{selectedLogo.tagline}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-900">Vector Quality</h3>
                    <p className="text-sm text-sky-700">Ultra-high resolution suitable for 4K video overlays and physical merchandise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white shrink-0">
                    <Palette size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900">Consistent Palette</h3>
                    <p className="text-sm text-purple-700">Specifically chosen colors to maintain high contrast and energy across devices.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex gap-4">
                <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
                  <Download size={18} />
                  PNG (Transparent)
                </button>
                <button className="flex-1 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                  SVG Vector
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Variations Gallery */}
        <section id="assets" className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-3">Identity Variations</h2>
              <p className="text-slate-500">Five unique directions exploring the 'Kids Zone' playful aesthetic.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {LOGO_VARIANTS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedLogo(item)}
                className={`group relative p-3 rounded-3xl transition-all border-2 ${
                  selectedLogo.id === item.id 
                    ? "bg-white border-sky-400 shadow-xl shadow-sky-100" 
                    : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200"
                }`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-3 border border-slate-100">
                  <img src={item.src} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left px-2">
                  <h3 className="text-sm font-bold truncate group-hover:text-sky-600 transition-colors">{item.name}</h3>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Style v{item.id}.0</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section id="palette" className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-4">Color DNA</h2>
            <p className="text-slate-500 mb-8">A vibrant spectrum chosen to evoke happiness, energy, and creativity.</p>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Primary Accent</p>
                  <p className="font-bold text-slate-900">Kids Zone Sky Blue</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Secondary Accent</p>
                  <p className="font-bold text-slate-900">Bubblegum Energy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {COLORS.map((color) => (
              <div key={color.name} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className={`aspect-video rounded-2xl ${color.class} mb-4 shadow-inner relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-bold text-slate-900">{color.name}</p>
                <p className="text-xs font-mono text-slate-400">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Preview Mockup */}
        <section id="preview" className="mb-24">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative border border-white/10">
             {/* Abstract Glows */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="w-16 h-1 w-16 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mb-8" />
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    Optimized for the <br />
                    <span className="text-sky-400">YouTube Experience</span>
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Every variation is tested for clarity at small sizes. 
                    From mobile notifications to TV apps, your brand remains sharp.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3 text-slate-300">
                      <Youtube className="text-red-500" size={20} />
                      Perfect circular cropping for profile pictures
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Gamepad2 className="text-emerald-400" size={20} />
                      Playful aesthetics for gaming & learning
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Heart className="text-pink-400" size={20} />
                      Safe, friendly, and parent-approved feel
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-700/50">
                    {/* Mock YouTube UI */}
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-3 h-3 rounded-full bg-slate-700" />
                       <div className="w-3 h-3 rounded-full bg-slate-700" />
                       <div className="w-3 h-3 rounded-full bg-slate-700" />
                    </div>
                    
                    <div className="space-y-8">
                      {/* Banner Placeholder */}
                      <div className="h-32 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                           <div className="grid grid-cols-8 gap-4 p-4 transform -rotate-12">
                              {Array.from({length: 16}).map((_, i) => (
                                <Star key={i} size={24} className="text-white" />
                              ))}
                           </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 px-4">
                        <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-white shadow-xl flex items-center justify-center p-2">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <img 
                              src={selectedLogo.src} 
                              alt="Channel Avatar" 
                              className="w-full h-full object-cover" 
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                        <div className="text-center md:text-left pb-2">
                          <h3 className="text-2xl font-bold text-white mb-1">Kids Zone</h3>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm">
                            <span>@KidsZoneTV</span>
                            <span>•</span>
                            <span>1.2M Subscribers</span>
                          </div>
                        </div>
                        <div className="md:ml-auto pb-2 flex gap-4">
                          <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm">Subscribe</button>
                          <button className="px-6 py-2 bg-slate-700 text-white rounded-full font-bold text-sm">Join</button>
                        </div>
                      </div>

                      {/* Mock Video Grid */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
                        {Array.from({length: 3}).map((_, i) => (
                          <div key={i} className="space-y-2">
                            <div className="aspect-[16/9] bg-slate-700 rounded-xl flex items-center justify-center">
                              <Play className="text-slate-500" size={32} />
                            </div>
                            <div className="h-3 w-full bg-slate-700 rounded-full" />
                            <div className="h-3 w-2/3 bg-slate-700 rounded-full opacity-50" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-20 border-t border-slate-100">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-center -space-x-4">
              {LOGO_VARIANTS.map((item, i) => (
                <div 
                  key={item.id} 
                  className="w-16 h-16 rounded-full border-4 border-[#FDFCF0] bg-white overflow-hidden shadow-lg"
                  style={{ zIndex: 10 - i }}
                >
                  <img src={item.src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <h2 className="text-4xl font-black">Ready to launch?</h2>
            <p className="text-slate-500 text-lg">
              Download the complete branding kit including all logo variations, color guides, and asset templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-[2rem] font-black text-xl shadow-xl shadow-sky-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Grab the Full Toolkit <ChevronRight size={24} />
              </button>
            </div>
            <p className="text-slate-400 text-sm font-medium">Free for personal use • Attribution required</p>
          </div>
        </section>
      </main>

      {/* Basic Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 grayscale">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400">
              <Sparkles size={16} />
            </div>
            <span className="text-slate-400 font-bold tracking-tight">Kids Zone Branding</span>
          </div>
          <p className="text-slate-400 text-sm">© 2026 Kids Zone Identity System. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400 text-sm font-medium">
             <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
             <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
             <a href="#" className="hover:text-slate-600 transition-colors">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
