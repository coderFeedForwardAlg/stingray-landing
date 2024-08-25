import logo from "./stingray_img-removebg.png"
import './App.css';
import Landing from "./componants/Landing";
import UseCluster from "./componants/UseCluster";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Landing />} />
          <Route path="ray_code" element={<UseCluster />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
