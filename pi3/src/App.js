import React from "react";
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Switch} from 'react-router-dom'


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Populares from "./components/Populares/Populares";
import Cartel from "./components/Cartel/Cartel";
import Tvsopulares from "./components/Tvspopulares/Tvspopulares";
import Tvscartel from "./components/Tvscartel/Tvscartel";
import Busqueda from "./screens/Busqueda/Busqueda";
import Formulario from "./components/Formulario/Formulario";


function App() {
  return (
    <>

      <Header/>

      <Formulario/>

      <h2 className="alert alert-primary">Peliculas populares esta semana</h2>
      <Populares/>

      <h2 className="alert alert-primary">Peliculas en cartel</h2>
      <Cartel/>

      <Switch>
        <Route path="/busqueda/:query" component={Busqueda}/>
      </Switch>

      <Footer/>

    </>
  );
}

export default App;
