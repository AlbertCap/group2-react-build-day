export default function SiumsiCup({
  siumSiClick,
  setSiumSiClick,
  currentFortune,
  setCurrentFortune,
}) {
  return (
    <>
      <div className="flex flex-col w-full border-black border-solid border-2 rounded-2xl p-2 justify-center items-center text-center">
        <h1 className="text-2xl font-bold">SiumciCup</h1>
        <img
          className={`${siumSiClick ? "animate-wiggle" : ""}`}
          alt="Siumci cup picture"
          src="https://horoscope.kapook.com/fortune/assets/images/seamsi.png"
        />
        <button
          className="bg-teal-300 p-2 rounded-md m-4 hover:cursor-pointer"
          onClick={() => {
            setSiumSiClick(true);
            setTimeout(() => setSiumSiClick(false), 2000);
            setCurrentFortune(Math.floor(Math.random() * 27 + 1));
            console.log(currentFortune);
          }}
        >
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
          Click for Siumci
        </button>
      </div>
    </>
  );
}
