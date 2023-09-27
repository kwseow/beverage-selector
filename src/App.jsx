import { useState } from 'react'
import './App.css'
import Header from './Header'
import Box from './Box'

function App() {
  // the first argument of useState is the default value
  const [favoriteBeverage, setFavoriteBeverage] = useState("");

  const selectBubbleTea = () => {
    setFavoriteBeverage("Bubble Tea")
  }
  return (
    <>
    <Header></Header>
    <p>Select your favorite beverage</p>
    <button onClick={selectBubbleTea}>Choose Bubble Tea</button>
    <button onClick={()=>setFavoriteBeverage("Coffee")}>Choose Coffee</button>
    
    <Box bgcolor="azure" borderColor="black">
        <p>Your favorite drink is {favoriteBeverage}</p>
      </Box>

    </>
  )
}

export default App
