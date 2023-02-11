import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={
              <Home />
            }
            exact
          />
          <Route 
            path="/sign-in"
            element={
              <SignIn />
            }
            exact
          />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
