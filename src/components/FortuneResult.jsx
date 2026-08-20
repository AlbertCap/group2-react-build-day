import { fortunes } from "../Data/fortunesData";
import FortuneCard from "./FortuneCard";

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
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
      <FortuneCard fortuneId={fortuneId}/>

      <div className="flex gap-3 justify-center flex-wrap mt-4">
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