import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/profile" element={<Profile />} /> */}
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App
