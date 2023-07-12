import React from "react";
import Router from "./routes/router";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";

import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <NavBar />
      <Router />
      <Footer />
    </UserProvider>
  );
};

export default App;
