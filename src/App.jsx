import './App.css'
import SiumsiCup from './components/SiumsiCup'

  const [siumSiClick, setSiumSiClick] = useState(false);
  const [currentFortune, setCurrentFortune] = useState(0);


function App() {

  return (
    <>
    <div>
      <SiumsiCup siumSiClick={siumSiClick} setSiumSiClick={setSiumSiClick} currentFortune={currentFortune} setCurrentFortune={setCurrentFortune}/>

    </div>
    </>
  )
}

export default App
