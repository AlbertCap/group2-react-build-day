export default function SiumsiCup({
  siumSiClick,
  setSiumSiClick,
  setCurrentFortune,
}) {

  const handleSiumsiClick = () => {
    setSiumSiClick(true);

    const newFortuneId = Math.floor(Math.random() * 27 + 1);

    setTimeout(() => {

      setCurrentFortune(newFortuneId);

      setSiumSiClick(false);

      const audio = new Audio('src/sound/chinese-meme-song.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => console.log("Audio play error:", error));
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col w-full h-full border-black border-solid border-2 rounded-2xl p-2 justify-center items-center text-center">
        <h1 className="text-2xl font-bold">SiumciCup</h1>
        <a onClick={handleSiumsiClick}>
            {siumSiClick ? (
            <>
              <div className="flex flex-col fixed w-full h-full bg-gray-600 top-0 left-0 opacity-50"></div>
              <div className="fixed border-2 border-amber-300 top-1/2 left-1/2 z-10 -translate-1/2 bg-amber-400 p-4 rounded-md font-bold text-2xl">
                <h1 className="">กำลังสุ่มอยู่นะครับ 🎉</h1>
              </div>
            </>
          ) : (
            ""
          )}
          <img
          className={`${siumSiClick ? "animate-wiggle" : ""} hover:cursor-pointer hover:scale-110`}
          alt="Siumci cup picture"
          src="https://horoscope.kapook.com/fortune/assets/images/seamsi.png"
        />
        </a>
      </div>
    </>
  );
}
