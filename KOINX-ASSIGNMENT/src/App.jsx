
import HomePage from './Pages/HomePage'
import {GetCoins} from './services/Getcoin.js'

function App() {
  GetCoins()

  return (
        <HomePage/>
      
        
  )
}

export default App
