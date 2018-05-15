import React, {Component} from 'react'
import axios from 'axios'

class DetalheAnuncio extends Component {
    constructor(props){
        super(props)

        this.state = {
            anuncio: {},
            isLoading: true
        }

        const id = this.props.match.params.idAnuncio
        const url = `https://mercado-dev-9b056.firebaseio.com/anuncios/${id}.json`
        axios.get(url)
            .then(data => {
                this.setState({anuncio: data.data, isLoading: false})
            })
    }
    render() {
        const anuncio = this.state.anuncio
        return (
            <div>
                {this.state.isLoading && <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"/>}
                <h1>{anuncio.nome}</h1>
                <p><img src={anuncio.foto}/></p>
            </div>
        )
    }
}

export default DetalheAnuncio