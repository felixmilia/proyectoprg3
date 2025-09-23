import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null ,
            esFavorito: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES`)
            .then(response => response.json())
            .then(data =>{
                this.setState({ pelicula: data })
                this.verificarFavorito(data.id, tipo)
                console.log (data)
            } )
            .catch(error => console.log('El error fue: ' + error));
    }

    verificarFavorito(id) {
        let favoritos = [];
        let datosStorage = localStorage.getItem("LSFavoritos");
        if (datosStorage !== null) {
            favoritos = JSON.parse(datosStorage);
        }

        if (favoritos.includes(id)) {
            this.setState({ esFavorito: true });
        }
    }

    agregarAFavoritos(){
        const pelicula = this.state.pelicula;
        const id = pelicula.id;

        console.log("se agrego a favoritos la pelicula con id " + id);
        let favoritos = [];

        let datosStorage = localStorage.getItem("LSFavoritos");
        if (datosStorage !== null){
            favoritos = JSON.parse(datosStorage);

        }

        favoritos.push(id);
        localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
        console.log(localStorage);
        this.setState({
            esFavorito: true
        });
    }

    quitarDeFavoritos(){
        localStorage.removeItem("LSFavoritos");
        this.setState({
            esFavorito: false
        });
        console.log(localStorage);
    }

    render() {
        const { pelicula } = this.state;
        if (!pelicula) return <img src="/img/loading.gif" />;

        return (
            <section className="detalle-pelicula">
                <img className="fotoDetalle" src={pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`: 'https://via.placeholder.com/500x750?text=Sin+imagen'} alt={pelicula.title}/>
                <div className="detalle-info">
                    <h2>{this.props.match.params.tipo=="movie"? pelicula.title: pelicula.name}</h2>
                    <p className="ratingPela">Rating: {pelicula.vote_average}</p>
                    <p>Fecha de estreno: {this.props.match.params.tipo== "movie"?pelicula.release_date: pelicula.first_air_date}</p>
                    <p>Duración: {pelicula.runtime} min</p>
                    <p>{pelicula.overview}</p>
                    <p>Género: {pelicula.genres && pelicula.genres.map(genero => `${genero.name} ` )}</p>
                    {this.state.esFavorito ?
                        <button onClick= {()=>this.quitarDeFavoritos()} className="btn btn-danger">♥️</button>
                        :
                        <button onClick= {()=>this.agregarAFavoritos()} className="btn btn-danger">🤍</button>}
                </div>
            </section>
        );
    }
}

export default Detalle;