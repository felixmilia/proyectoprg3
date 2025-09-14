import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import Card from "../Card/Card"
class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [], 
            cargando: true
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES&page=1')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results, cargando: false }))
            .catch(error => console.log('El error fue: ' + error));
    }

    render() {
        const peliculasAMostrar = this.state.peliculas.slice(0, 4);

        return (
            <section className="row cards" id="now-playing"> 
                {this.state.cargando ? <p> cargando </p> : peliculasAMostrar.map(pelicula => (
                    <Card data={pelicula} /> 
                )) }
                
                <div>
                    <button className="btn btn-primary" onClick={() => this.props.history.push('/ver-mas-popular')}>
                        Ver más películas
                    </button>
                </div>
            </section>
        );
    }
}

export default withRouter(Populares);