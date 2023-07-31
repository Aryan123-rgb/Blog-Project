import "./App.css";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Navbar from "./components/Navbar";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <div style={{backgroundColor:"#0f0f3e",minHeight:"100vh"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPage />}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
      </Routes>
    </div>
  );
}

export default App;
