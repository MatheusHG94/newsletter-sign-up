import SignUp from "pages/SignUp";
import Success from "pages/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/confirmed" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
