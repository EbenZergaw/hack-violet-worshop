
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

  // TODO

  // 1. routing with about page

  // 2. useState with a counter

  // 3. useEffect with a random dog
      // https://dog.ceo/api/breeds/image/random

  // 4. components and props with navbar

  // 5. styling with tailwind

  return (
    <div className="w-10/12 mx-auto py-10">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
