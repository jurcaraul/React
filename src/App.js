import React from "react";
import "./App.css";
// import "./mobile-design.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sponsors from "./components/Sponsors";
import Data from "./Data";
import Footer from "./components/Footer";
import FishingPopup from "./components/FishingPopup";



function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.img}
        // nota={item.nota}
        // stock={item.stock}
        // product={item.product}
        // price={item.price}
        // openSpots={item.openSpots}
        // location = {item.location} ..dhghfyyrh
      />
    );
  });

  const [popup, setPopup] = React.useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <section id="services">
        <div className="wave"></div>
        <p className="sec-title">Services</p>
        <div className="container-cards">{cards}</div>
      </section>
      <Sponsors />
      <FishingPopup trigger={popup} setTrigger={setPopup} />
      <Footer />
    </>
  );
}
export default App;
