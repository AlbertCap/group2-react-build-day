import { fortunes } from '../src/Data/fortunesData';

export default function FortuneCard({ selectedId = 1 }) {

    const currentFortune = fortunes.find(item => item.id === selectedId) || fortunes[0];

    return (
        /* การ์ดเซียมซี */
        <div className="bg-[#f4ebd0] border-4 border-[#8c6239] rounded-xl p-8 w-80 min-h-105 shadow-2xl flex flex-col items-center justify-between text-center relative overflow-hidden bg-blend-multiply">

            <div className="absolute inset-0 border border-[#d4c39d] pointer-events-none m-2 rounded-lg"></div>

            <div className="relative my-2">
                <span className="inline-block bg-[#b91c1c] text-white px-6 py-2 rounded-sm text-base font-bold shadow-md tracking-wider border-2 border-amber-300 relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:border-y-8 before:border-y-transparent before:border-r-12 before:border-r-[#b91c1c] after:content-[''] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-y-transparent after:border-l-12 after:border-l-[#b91c1c]">
                    ใบที่ {currentFortune.id} : {currentFortune.title}
                </span>
            </div>

            <div className="my-auto py-4 px-2">
                <p className="text-[#1c1917] text-lg font-['Sriracha'] tracking-wide leading-relaxed font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                    {currentFortune.text}
                </p>
            </div>

            <div className="text-xs text-[#8c6239] font-serif tracking-widest opacity-80 mt-2">
                 ⛩️ ไม่มีข่าวดีหรือร้าย..มีแค่ข่าว.. 🐉  <br /> — อูเกว 🐢 —
            </div>
        </div>
    );
}