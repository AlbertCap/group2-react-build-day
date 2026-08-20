import { fortunes } from "../Data/fortunesData";

export default function FortuneResult({ 
  fortuneId, 
  onAddToFavorite,
  favorites 
}) {
  const fortune = fortunes.find(f => f.id === fortuneId);

  if (!fortune) {
    return <div className="p-4 text-center text-gray-500">สุ่มเซียมซีก่อนนะจ๊ะ</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === fortune.id);

  const handleAddFavorite = () => {
    onAddToFavorite(fortune);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mt-3 text-gray-900">{fortune.title}</h2>
        <p className="text-gray-700 mt-4 whitespace-pre-wrap leading-relaxed">{fortune.text}</p>
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
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