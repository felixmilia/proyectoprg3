import React, { Component } from 'react';
import Card from '../../components/Card/Card'; 

class Verpopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES&page=1')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log('El error fue: ' + error));
    }

    render() {
                const peliculasAMostrar = this.state.peliculas;
        return (
            <>
                <h2 className="alert alert-primary">Peliculas populares esta semana</h2>
                <section className="row cards" id="now-playing">
                    <section className="row cards" id="now-playing">
                        {peliculasAMostrar.map(pelicula => (
                            <Card data={pelicula} history={this.props.history} key={pelicula.id} />
                        ))}
                    </section>
                </section>
            </>
        );
    }
}

export default Verpopular;