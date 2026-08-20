import FortuneResult from "./FortuneResult";

export default function FavoriteCard({ favorites , onRemoveFavorite }) {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-amber-200 min-h-[420px]">
        {favorites.length === 0 ? (
        <p className="p-4 text-center text-gray-500">กด ☆ ที่ผลเซียมซีเพื่อบันทึกใบที่ชอบ</p>
      ) : (
        <ul className="flex flex-col gap-2 max-h-[350px] overflow-y-auto">
          {favorites.map((fortune) => (
            <li key={fortune.id} className="flex items-center justify-between p-2 border-b border-gray-200">
              <div>
                <span className="inline-block bg-[#b91c1c] text-white px-6 py-2 rounded-sm text-base font-bold shadow-md tracking-wider border-2 border-amber-300 relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:border-y-8 before:border-y-transparent before:border-r-12 before:border-r-[#b91c1c] after:content-[''] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-y-transparent after:border-l-12 after:border-l-[#b91c1c]">
                    ใบที่ {fortune.id} : {fortune.title}
                </span>
              </div>
              <button
                type="button"
                className="remove-button hover:cursor-pointer"
                onClick={() => onRemoveFavorite(fortune.id)}
                aria-label={`ลบใบที่ ${fortune.id} ออกจากรายการโปรด`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}