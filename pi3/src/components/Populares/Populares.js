import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

class Populares extends Component {
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
        const peliculasAMostrar = this.state.peliculas.slice(0, 4);

        return (
            <section className="row cards" id="now-playing">
                {peliculasAMostrar.map(pelicula => (
                    <article className="single-card-playing" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                        <div className="cardBody">
                            <h5 className="card-title">{pelicula.title}</h5>
                            <p className="card-text">{pelicula.overview}</p>
                            <div className="card-actions">
                                <a href="#" className="btn btn-primary">Ver descripción</a>
                                <a href="#" className="btn btn-primary" onClick={event => {event.preventDefault(); this.props.history.push(`/detalle/${pelicula.id}`);}}>
                                    Ir a detalle
                                </a>
                                <button className="btn alert-primary">♥️</button>
                            </div>
                        </div>
                    </article>
                ))}
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