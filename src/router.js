import { UserProvider } from "commom/context/User";
import SignUp from "pages/SignUp";
import Success from "pages/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/confirmed" element={<Success />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Router;
