import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Profile = lazy(() => import("./pages/profile/Profile"));



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </Layout>

    </BrowserRouter>
  )
}

export default App
