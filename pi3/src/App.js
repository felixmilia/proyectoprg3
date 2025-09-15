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


function App() {
  return (
    <>

      <Header/>




      <Switch>

      

        <Route path="/" exact={true} component={Home} />
        <Route path="/busqueda/:query" component={Busqueda} />
        <Route path="/ver-mas-cartel" component={Vercartel} />
        <Route path="/ver-mas-popular" component={Verpopular} />
        <Route path="/detalle/:id" component={Detalle} />
        {/* favoritos */}
        {/* error */}

       
      </Switch>

      <Footer/>

    </>
  );
}

export default App;
