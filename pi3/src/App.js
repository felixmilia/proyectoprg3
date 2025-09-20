import React from "react";
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Switch} from 'react-router-dom'


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Busqueda from "./screens/Busqueda/Busqueda";
import Home from "./screens/Home/Home";
import Vercartel from "./screens/Vercartel/Vercartel";
import Verpopular from "./screens/Verpopular/Verpopular";
import Detalle from "./screens/Detalle/Detalle";
import NotFound from "./screens/NotFound/NotFound";
import Favoritos from "./screens/Favoritos/Favoritos";


function App() {
  return (
    <>

      <Header/>




      <Switch>

      

        <Route path="/" exact={true} component={Home} />
        <Route path="/busqueda/:tipo/:query" component={Busqueda} />
        <Route path="/ver-mas-cartel" component={Vercartel} />
        <Route path="/ver-mas-popular" component={Verpopular} />
        <Route path="/detalle/:tipo/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="" component={NotFound} />

       
      </Switch>

      <Footer/>

    </>
  );
}

export default App;
