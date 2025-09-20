import React, { Component } from 'react';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES`)
            .then(response => response.json())
            .then(data =>{
                this.setState({ pelicula: data })
                console.log (data)
            } )
            .catch(error => console.log('El error fue: ' + error));
    }

    render() {
        const { pelicula } = this.state;
        if (!pelicula) return <img src="/img/loading.gif" />;

        return (
            <section className="detalle-pelicula">
                <img src={pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`: 'https://via.placeholder.com/500x750?text=Sin+imagen'} alt={pelicula.title}/>
                <h2>{this.props.match.params.tipo=="movie"? pelicula.title: pelicula.name}</h2>
                <p className="ratingPela">Rating: {pelicula.vote_average}</p>
                <p>Fecha de estreno: {this.props.match.params.tipo== "movie"?pelicula.release_date: pelicula.first_air_date}</p>
                <p>Duración: {pelicula.runtime} min</p>
                <p>{pelicula.overview}</p>
                <p>Género: {pelicula.genres && pelicula.genres.map(genero => `${genero.name} ` )}</p>
                <button className="btn alert-primary">♥️</button>
            </section>
        );
    }
}

export default Detalle;