import React from "react";
import Router from "./routes/router";
import NavBarComponent from "./components/layout/navBar";
import Footer from "./components/layout/footer";

import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <NavBarComponent />
      <Router />
      <Footer />
    </UserProvider>
  );
};

export default App;
