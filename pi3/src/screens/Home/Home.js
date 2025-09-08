import React, { Component } from "react";
import Populares from "../../components/Populares/Populares";
import Cartel from "../../components/Cartel/Cartel"
import Formulario from "../../components/Formulario/Formulario";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <Formulario />
                <h2 class="alert alert-primary">Peliculas populares esta semana</h2>
                <Populares />

                <h2 class="alert alert-primary">Peliculas en cartel</h2>
                <Cartel />
            </main>

        )
    }
}

export default Home;