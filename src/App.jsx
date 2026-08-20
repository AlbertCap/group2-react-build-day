import { useState, useEffect } from "react";
import SiumsiCup from "./components/SiumsiCup";
import FortuneResult from "./components/FortuneResult";
import FavoriteCard from "./components/FavoriteCard";
import FortuneHistory from "./components/FortuneHistory";

function App() {
  const [siumSiClick, setSiumSiClick] = useState(false);
  const [currentFortune, setCurrentFortune] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const [activeTab, setActiveTab] = useState("now");

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (currentFortune !== 0) {
      setHistory((prevHistory) => [currentFortune, ...prevHistory]);
    }
  }, [currentFortune]);

  const handleAddToFavorite = (fortune) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.some((favorite) => favorite.id === fortune.id)) {
        return previousFavorites;
      }

      return [...previousFavorites, fortune];
    });
  };

  const handleRemoveFavorite = (fortuneId) => {
    setFavorites((previousFavorites) =>
      previousFavorites.filter((fortune) => fortune.id !== fortuneId)
    );
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8 text-stone-800">
      <header className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-red-800 tracking-wide">
          เสี่ยงเซียมซี
        </h1>
        <p className="text-stone-600 mt-2 text-sm md:text-base">
          กดเขย่ากระบอกเซียมซี
        </p>
      </header>

      <main className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <section className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-md border border-amber-200">
          {/* ซ้าย */}
          <SiumsiCup
            siumSiClick={siumSiClick}
            setSiumSiClick={setSiumSiClick}
            currentFortune={currentFortune}
            setCurrentFortune={setCurrentFortune}
          />
        </section>

        <section className="w-full overflow-hidden md:w-1/3 max-h-147.5 bg-white p-6 rounded-2xl shadow-md border border-amber-200">
          {/* Tab Menu Bar */}
          <div className="flex border-b border-amber-200 px-5 mb-4 text-sm font-medium justify-between">
            <button
              onClick={() => setActiveTab("now")}
              className={`pb-2 px-3 transition-all cursor-pointer ${activeTab === "now"
                  ? "border-b-2 border-red-800 text-red-800 font-bold"
                  : "text-stone-400 hover:text-stone-600"
                }`}
            >
              ล่าสุด
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`pb-2 px-3 transition-all cursor-pointer ${activeTab === "history"
                  ? "border-b-2 border-red-800 text-red-800 font-bold"
                  : "text-stone-400 hover:text-stone-600"
                }`}
            >
              ประวัติ
            </button>
            <button
              onClick={() => setActiveTab("favorite")}
              className={`pb-2 px-3 transition-all cursor-pointer ${activeTab === "favorite"
                  ? "border-b-2 border-red-800 text-red-800 font-bold"
                  : "text-stone-400 hover:text-stone-600"
                }`}
            >
              บันทึกใบเซียมซี
            </button>
          </div>

          {/* ส่วนแสดงเนื้อหาตาม Tab */}
          <div>
            {activeTab === "now" && (
              !siumSiClick ? (
                <FortuneResult
                  fortuneId={currentFortune} // ← ทดสอบ ID 1
                  onAddToFavorite={handleAddToFavorite}
                  favorites={favorites}
                />
              ) : (
                <p className="text-center text-black py-6 text-sm animate-pulse">
                  กำลังสุ่มผลลัพธ์...
                </p>
              )
            )}

            {/* หน้า History */}
            {activeTab === "history" && <FortuneHistory history={history} />}

            {activeTab === "favorite" && (
              <FavoriteCard
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
              /> 
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
