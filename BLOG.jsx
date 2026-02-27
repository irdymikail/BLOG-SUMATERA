import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

// --- DATA ARTIKEL TUNGGAL ---
const article = {
  date: '27 Februari 2026',
  title: {
    id: 'Seni Mengajukan Pertanyaan "Mengapa"',
    en: 'The Art of Asking "Why"'
  },
  content: {
    id: `
      <p>Dalam dunia yang serba cepat, kita dilatih untuk mencari jawaban instan. Namun, pemahaman sejati jarang ditemukan pada lapisan pertama sebuah masalah.</p>
      <p>Metode <em>"Five Whys"</em> (Lima Mengapa) yang dipopulerkan oleh Sakichi Toyoda adalah alat yang sederhana namun luar biasa kuat. Ketika kamu menghadapi sebuah masalah, jangan langsung mencari solusi. Tanyakan "mengapa" masalah itu terjadi. Lalu, dari jawaban tersebut, tanyakan "mengapa" lagi. Lakukan ini setidaknya lima kali.</p>
      <p>Proses ini seperti mengupas bawang. Mungkin membuat mata sedikit pedih karena menyadari kesalahan mendasar, tetapi pada akhirnya, kamu akan menemukan akar masalah yang sebenarnya, bukan sekadar gejalanya.</p>
      <p>Berhenti menerima asumsi pertama yang muncul di kepalamu. Latih otot berpikirmu untuk selalu menggali satu lapisan lebih dalam. Di sanalah kejernihan yang sesungguhnya bersembunyi.</p>
    `,
    en: `
      <p>In a fast-paced world, we are trained to seek instant answers. However, true understanding is rarely found at the first layer of a problem.</p>
      <p>The <em>"Five Whys"</em> method, popularized by Sakichi Toyoda, is a simple yet incredibly powerful tool. When you face a problem, do not immediately look for a solution. Ask "why" the problem occurred. Then, from that answer, ask "why" again. Do this at least five times.</p>
      <p>This process is like peeling an onion. It might make your eyes sting a bit as you realize fundamental flaws, but ultimately, you will find the actual root cause, not just the symptoms.</p>
      <p>Stop accepting the first assumption that pops into your head. Train your thinking muscles to always dig one layer deeper. That is where true clarity hides.</p>
    `
  }
};

export default function App() {
  const [lang, setLang] = useState('id'); // 'id' atau 'en'

  // Teks antarmuka berdasarkan bahasa
  const uiTexts = {
    id: {
      siteTitle: 'Ruang Refleksi',
      footer: 'Dibuat untuk melatih kejernihan berpikir.',
    },
    en: {
      siteTitle: 'Reflection Space',
      footer: 'Crafted to train clarity of thought.',
    }
  };

  const ui = uiTexts[lang];

  return (
    // Tambahkan padding-bottom (pb-32) agar teks paling bawah tidak tertutup panel melayang
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 font-serif selection:bg-blue-100 pb-32 relative">
      
      {/* HEADER MINIMALIS */}
      <header className="py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-400">
          <BookOpen className="w-5 h-5" />
          <span className="font-sans font-medium tracking-widest uppercase text-xs">
            {ui.siteTitle}
          </span>
        </div>
      </header>

      {/* AREA ARTIKEL UTAMA */}
      <main className="max-w-2xl mx-auto px-6 py-10">
        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-12 text-center">
            <span className="font-sans text-sm font-medium text-slate-400 block mb-4 tracking-wide">
              {article.date}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6 transition-all duration-300">
              {article.title[lang]}
            </h1>
            <div className="w-16 h-1 bg-slate-200 mx-auto rounded-full"></div>
          </header>

          {/* Konten Artikel */}
          <div 
            className="prose prose-lg sm:prose-xl prose-slate max-w-none 
                       prose-p:leading-relaxed prose-p:text-slate-700 prose-p:mb-8
                       prose-em:text-slate-900 prose-em:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content[lang] }}
          />
        </article>
      </main>

      {/* FLOATING LANGUAGE TOGGLE (KONTROL BAHASA MELAYANG) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-500">
        {/* Glassmorphism effect: transparan + blur di latar belakang */}
        <div className="bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/50 rounded-full p-1.5 flex items-center font-sans">
          
          <button
            onClick={() => setLang('id')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              lang === 'id' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
            }`}
          >
            Indonesia
          </button>
          
          <button
            onClick={() => setLang('en')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              lang === 'en' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
            }`}
          >
            English
          </button>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 font-sans mt-10">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
          <p>© 2026 {ui.siteTitle}. {ui.footer}</p>
        </div>
      </footer>
    </div>
  );
}
