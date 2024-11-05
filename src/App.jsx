import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* ... other components */}

        <Routes>
          {/* <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/music" element={<Music />} />
          <Route path="/user" element={<User />} />
          <Route path="/test" element={<Test />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
