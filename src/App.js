import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
