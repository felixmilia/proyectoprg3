import React, {Component} from "react";

class Busqueda extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const query = this.props.match.params.query;
        console.log(query);
        return (
            <p>Resultados de busqueda para: {query}</p>
        )
    }
}

export default Busqueda;