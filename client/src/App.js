import "./App.css";
// import Post from "./components/post.js";
// import Header from "./components/header.js";
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout.js";
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
