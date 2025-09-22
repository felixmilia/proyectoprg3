import React, { Component } from 'react';
import Card from '../../components/Card/Card'; 

class Verpopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            page: 2,
            peliculasFiltradas: [],
            input: ""
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES&page=1')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log('El error fue: ' + error));
    }

    cargarMas() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=702201d43b610a61ca14f4b8810d7ccb&language=es-ES&page=' + this.state.page)
            .then(response => response.json())
            .then(data => this.setState({ 
                peliculas: this.state.peliculas.concat(data.results), 
                page: this.state.page + 1 
            }))
            .catch(error => console.log('El error fue: ' + error));
    }

    filtrarBusqueda(event) {
        let busqueda = event.target.value;
        let peliculasFiltradas = this.state.peliculas.filter(unaPelicula => {
            return unaPelicula.title.toLowerCase().includes(busqueda.toLowerCase());
        });
        this.setState({ peliculasFiltradas: peliculasFiltradas, input: busqueda });
    }

    render() {
        const peliculasAMostrar = this.state.input.length === 0 ? this.state.peliculas: this.state.peliculasFiltradas;

        return (
            <>
                <h2 className="alert alert-primary">peliculas populares esta semana</h2>
            <div className='filtro-populares'>
                <input placeholder="filtrar" onChange={(event) => this.filtrarBusqueda(event)} /> 
            </div>
                     <section className="row cards" id="now-playing">
                    {peliculasAMostrar.map(pelicula => (
                     <Card data={pelicula} history={this.props.history} key= {pelicula.id}/>
                    ))}
                </section>
            <div className="contenedor-boton">
                <button onClick={() => this.cargarMas()}> cargar mas</button> 
            </div>
            </>
        );
    }
}

export default Verpopular;
