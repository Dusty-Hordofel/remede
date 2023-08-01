
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/profile" element={<Profile />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
