import "./App.css";
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx";
import IndexPage from "./pages/indexPage.js"
import LoginPage from "./pages/LoginPage.js"
import RegisterPage from "./pages/registerPage.js"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Route>
      </Routes>
  );
}

export default App;
