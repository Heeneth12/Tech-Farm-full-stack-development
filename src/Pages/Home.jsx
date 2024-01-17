import React from "react";
import NavBar from "../components/Navbar";
import Body from "../components/Body";
import BodyContent from "../components/BodyContent";
import Footer from "../components/Fotter";

function Home() {
  return (
    <>
      <div className="z-50">
        <NavBar />
      </div>
      <div className="z-0">
        <Body />
      </div>

      <BodyContent />
      <Footer />
    </>
  );
}

export default Home;
