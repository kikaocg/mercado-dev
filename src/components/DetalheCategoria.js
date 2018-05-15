import React, {Component} from 'react'
import axios from 'axios'
import Anuncio from "./Anuncio";

class DetalheCategoria extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncios: {},
            urlCategoria: "",
            isLoading: false
        }

        this.loadAnuncios = this.loadAnuncios.bind(this);
        this.loadAnuncios(this.props.match.params.urlCategoria)
    }

    loadAnuncios(urlCategoria){
        this.setState({isLoading: true, anuncios: {}})
        const url = `https://mercado-dev-9b056.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
        axios.get(url).then(
            data => {
                this.setState({anuncios: data.data, urlCategoria: urlCategoria, isLoading: false})
            }
        )
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.urlCategoria) {
            if (this.urlCategoria !== newProps.match.params.urlCategoria) {
                this.loadAnuncios(newProps.match.params.urlCategoria)
            }
        }
    }

    render (){
        return (
            <div>
                <h2>{this.props.match.params.urlCategoria}</h2>
                {this.state.isLoading && <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"/>}
                {!this.state.isLoading && Object.keys(this.state.anuncios).length === 0 &&
                <p>Nenhum produto cadastrado</p>}
                <div className="row">
                    {Object.keys(this.state.anuncios).map(key => {
                        const anuncio = this.state.anuncios[key];
                        return [
                            <Anuncio anuncio={anuncio} id={key} key={key}/>
                        ]
                    })}
                </div>
            </div>
        )
    }
}

export default DetalheCategoria