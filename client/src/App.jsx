import Home from "./pages/Home.jsx"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
