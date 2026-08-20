export default function SiumsiCup({siumSiClick,setSiumSiClick}) {

  return (
    <>
      <div className="flex flex-col w-1/2 border-black border-solid border-2 rounded-2xl p-2 justify-center items-center text-center">
        <h1>SiumciCup</h1>
        <img
          alt="Siumci cup picture"
          src="https://horoscope.kapook.com/fortune/assets/images/seamsi.png"
        />
        <button
          className="bg-teal-300 p-2 rounded-md"
          onClick={() => {
            setSiumSiClick(true);
          }}
        >
          Click for Siumci
        </button>
      </div>

    </>
  );
}
