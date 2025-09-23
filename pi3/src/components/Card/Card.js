import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mostrarDescripcion: false , 
            textoDescripcion: "Ver descripcion" ,
            esFavorito: false
        };
    }


    
    componentDidMount() {
        const id = this.props.data.id;
        let favoritos = [];
        let datosStorage = localStorage.getItem("LSFavoritos");
        if (datosStorage !== null) {
            favoritos = JSON.parse(datosStorage);
        }
        if (favoritos.includes(id)) {
            this.setState({ esFavorito: true });
        }
    }

    manejarDescripcion() {
        if (this.state.mostrarDescripcion){
            this.setState({mostrarDescripcion: false, textoDescripcion:" Ver descripcion"})

        }
        else {
            this.setState({mostrarDescripcion: true, textoDescripcion:" Ocultar descripcion"})


        }
        
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

    agregarAFavoritos() {
        const id = this.props.data.id;
        let favoritos = [];
        let datosStorage = localStorage.getItem("LSFavoritos");
        if (datosStorage !== null) {
            favoritos = JSON.parse(datosStorage);
        }
        if (!favoritos.includes(id)) {
            favoritos.push(id);
            localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
            this.setState({ esFavorito: true });
        }
    }

    quitarDeFavoritos() {
        const id = this.props.data.id;
        let favoritos = [];
        let datosStorage = localStorage.getItem("LSFavoritos");
        if (datosStorage !== null) {
            favoritos = JSON.parse(datosStorage);
        }
        favoritos = favoritos.filter(favId => favId !== id);
        localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
        this.setState({ esFavorito: false });
    }





    render() {
        const pelicula = this.props.data
        return (
        <article className="single-card-playing" key={pelicula.id}>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
            <div className="cardBody">
                <h5 className="card-title">{(this.props.tipo&&this.props.tipo=="tv")?pelicula.name: pelicula.title}</h5>
               {this.state.mostrarDescripcion ? <p className="card-text">{pelicula.overview}</p>: ""}
                <div className="card-actions">
                    <button onClick= {()=>this.manejarDescripcion()}className="btn btn-primary">{this.state.textoDescripcion}</button>
                    <Link to={`/detalle/${(this.props.tipo&&this.props.tipo=="tv")?'tv': "movie"}/${pelicula.id}`} className="btn btn-primary" >
                        Ir a detalle
                    </Link>
                    {this.state.esFavorito ?
                    <button onClick= {()=>this.quitarDeFavoritos()} className="btn btn-danger">♥️</button>
                    :
                    <button onClick= {()=>this.agregarAFavoritos()} className="btn btn-danger">🤍</button>}
                </div> 
            </div>
        </article>
         
        );
    }
}

export default withRouter(Card);