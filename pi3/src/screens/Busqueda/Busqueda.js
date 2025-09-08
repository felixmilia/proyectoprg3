import React, {Component} from "react";

class Busqueda extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props.match.params.query)
        return (
            <p>Resultados de busqueda</p>
        )
    }
}

export default Busqueda;