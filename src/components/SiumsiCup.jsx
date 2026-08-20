export default function SiumsiCup({
  siumSiClick,
  setSiumSiClick,
  currentFortune,
  setCurrentFortune,
}) {
  return (
    <>
      <div className="flex flex-col w-full border-black border-solid border-2 rounded-2xl p-2 justify-center items-center text-center">
        <h1>SiumciCup</h1>
        <img
          className={`${siumSiClick ? "animate-wiggle" : ""}`}
          alt="Siumci cup picture"
          src="https://horoscope.kapook.com/fortune/assets/images/seamsi.png"
        />
        <button
          className="bg-teal-300 p-2 rounded-md m-4"
          onClick={() => {
            setSiumSiClick(true);
            setTimeout(() => setSiumSiClick(false), 2000);
            setCurrentFortune(Math.floor(Math.random() * 27 + 1));
            console.log(currentFortune);
          }}
        >
          Click for Siumci
        </button>
      </div>
    </>
  );
}
