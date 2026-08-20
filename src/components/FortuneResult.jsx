//import SiumsiCup from "./SiumsiCup";

import { fortuneData } from "../mock-data/.js";

export default function FortuneResult({ 
  fortuneId, 
  onAddToHistory, 
  onAddToFavorite,
  favorites 
}) {
  const fortune = fortuneData.find(f => f.id === fortuneId);

  if (!fortune) {
    return <div className="p-4 text-center text-gray-500">เลือกเซียมซีด้วย</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === fortune.id);

  const handleAddFavorite = () => {
    onAddToFavorite(fortune);
  };

  const handleAddToHistory = () => {
    onAddToHistory(fortune);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="text-center mb-6">
        <span className="text-6xl">{fortune.emoji}</span>
        <h2 className="text-2xl font-bold mt-3 text-gray-900">{fortune.title}</h2>
        <p className="text-gray-700 mt-2">{fortune.description}</p>
        <p className="text-gray-600 mt-3 text-sm italic">💡 {fortune.advice}</p>
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <button 
          onClick={handleAddToHistory}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          📝 บันทึกประวัติ
        </button>
        
        <button 
          onClick={handleAddFavorite}
          className={`px-4 py-2 rounded transition ${
            isFavorite 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
          }`}
        >
          ⭐ {isFavorite ? 'เพิ่มอยู่แล้ว' : 'เพิ่มรายการโปรด'}
        </button>
      </div>
    </div>
  );
}