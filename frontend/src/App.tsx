import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App
