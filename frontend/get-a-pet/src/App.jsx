import React from "react";
import Router from "./routes/router";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
