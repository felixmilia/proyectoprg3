import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import './styles.css'

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            busqueda : "",
            tipo: ""
        }
    }

    prevenirRecarga (event) {
        event.preventDefault()
        this.props.history.push("/busqueda/" +this.state.tipo+ "/" + this.state.busqueda)      
    }

    controlarCambios (event) {
        console.log(event);
        
        this.setState({
            busqueda : event.target.value
        })
    }
    controlarTipo (event) {
        console.log(event);
        
        this.setState({
            tipo : event.target.value
        })
    }
    render () {
        return (
            <form onSubmit={(event) => this.prevenirRecarga(event)}>
                <input type='text' onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}/>
                <label>peliculas</label>


                <input type="radio" value='movie' name="tipo" onChange={(event)=> this.controlarTipo(event)}/>
                <label>series</label>
                <input type="radio" value='tv' name="tipo" onChange={(event)=> this.controlarTipo(event)}/>
                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default withRouter(Formulario)