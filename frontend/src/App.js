import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Authentication from "./Pages/Authentication";

function App() {
  return (
    <>
      <Test3 />
      <Routes>
        <Route path="/" element={<Authentication />}></Route>
        <Route path="/1" element={<Test2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
