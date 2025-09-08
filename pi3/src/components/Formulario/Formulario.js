import React, {Component} from "react";
import {withRouter} from "react-router-dom"
// import './styles.css'

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            busqueda : ""
        }
    }

    prevenirRecarga (event) {
        event.preventDefault()
        this.props.history.push("/busqueda/" + this.state.busqueda)      
    }

    controlarCambios (event) {
        this.setState({
            busqueda : event.target.value
        },)
    }

    render () {
        return (
            <form onSubmit={(event) => this.prevenirRecarga(event)}>
                <input type='text' onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}></input>
                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default Formulario