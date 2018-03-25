import React, {Component} from 'react';
import AnuncioHome from './AnuncioHome';
import Categoria from './Categoria';
import base from './base';
import HeaderHome from "./HeaderHome";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categorias: [],
            anuncios: []
        };

        base.bindToState('categorias', {
            context: this,
            state: 'categorias'
        });

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
            queries: {
                limitToLast: 3
            }
        })
    }
    render(){
        let index = 0;
        return (
            <div>
                <HeaderHome/>
                <div className="container">
                    <h3>Últimos anúncios</h3>
                    <div className="row">
                        {this.state.anuncios.map((anuncio,indice) => {
                            return [
                                <AnuncioHome anuncio={anuncio} key={indice}/>
                            ]
                        })}
                    </div>
                    <h3>Categorias</h3>
                    <div className="row">
                        {this.state.categorias.map((cat,indice) => {
                            return [
                                <Categoria categoria={cat} key={indice}/>,
                                ++index%4 === 0 && <div key={"c"+indice} className="w-100"></div>
                            ]
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;