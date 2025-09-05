import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Populares from "./components/Populares/Populares";
import Cartel from "./components/Cartel/Cartel";
import Tvsopulares from "./components/Tvspopulares/Tvspopulares";
import Tvscartel from "./components/Tvscartel/Tvscartel";


function App() {
  return (
    <body>

      <Header/>

      <h2 class="alert alert-primary">Peliculas populares esta semana</h2>
      <Populares/>

      <h2 class="alert alert-primary">Peliculas en cartel</h2>
      <Cartel/>

      <h2 class="alert alert-warning">Series populares esta semana</h2>
      <Tvsopulares/>

      <h2 class="alert alert-warning">Series en emisión</h2>
      <Tvscartel/>

      <Footer/>

    </body>
  );
}

export default App;
