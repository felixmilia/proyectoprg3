import React, {Component} from "react";
import Card from "../../components/Card/Card";

class Busqueda extends Component {
    constructor(props) {
        super(props)
        this.state={
            elementos: [],
            cargando: true
        }
    }
componentDidMount (){
    const url = `https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=702201d43b610a61ca14f4b8810d7ccb&query=${this.props.match.params.query}`;
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ elementos: data.results, cargando: false }))
    .catch(error => console.log('El error fue: ' + error));



}

    render () {
       
        return (
            <section className="row cards" id="now-playing"> 
            {this.state.cargando ? <p> cargando </p> : this.state.elementos.map(pelicula => (
                <Card data={pelicula} tipo={this.props.match.params.tipo} /> 
            )) }
            </section>
        )
    }
}

export default Busqueda;