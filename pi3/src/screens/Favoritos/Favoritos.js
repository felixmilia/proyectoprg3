import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, {Component} from "react";
import Card from "../../components/Card/Card";

class Favoritos extends Component{  
    constructor(){
        super ()
        this.state={
            personajesFavoritos: []
        }
    }

    componentDidMount() {
    let datosStorage = localStorage.getItem("LSFavoritos");
    if (datosStorage !== null) {
        let listaIdFavoritos = JSON.parse(datosStorage);
        let listaIdFavoritosAux = [];

        listaIdFavoritos.forEach(id => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=702201d43b610a61ca14f4b8810d7ccb&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    listaIdFavoritosAux.push(data);
                    this.setState({
                        personajesFavoritos: listaIdFavoritosAux
                    })
                })
                .catch(error => console.log('El error fue: ' + error));
        });
    }
}


    render(){
        return (
            <React.Fragment>
                
                { this.state.personajesFavoritos.length === 0 ? 
                    <p>Cargando...</p> :
                    this.state.personajesFavoritos.map(unaPelicula => <Card data={unaPelicula} favoritos={true} key={unaPelicula.id} />)
                }
            </React.Fragment>
        )}
}


export default Favoritos