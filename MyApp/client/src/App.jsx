import Counter from "./componennt/Counter"
import {BrowserRouter,Routes, Route} from "react-router-dom"

 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
       
        <Route path="/counter" element={<Counter/>}/>
      </Routes>

       </BrowserRouter>
    </div>
  )
}

export default App
