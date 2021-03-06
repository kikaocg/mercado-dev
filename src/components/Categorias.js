import React from 'react'
import HeaderInterno from './HeaderInterno'
import {Link, Route} from 'react-router-dom'
import DetalheCategoria from './DetalheCategoria'
import DetalheAnuncio from "./DetalheAnuncio";

const Categorias = (props) => {
    return (
        <div>
            <HeaderInterno/>
            <div className="container" style={{paddingTop: '120px'}}>
                <h1>Categorias</h1>
                <div className="row">
                    <div className="col-lg-4 col-sm-4">
                        <ul>
                            {
                                props.categorias.map(
                                    cat => {
                                        return (
                                            <li key={cat.url}>
                                                <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-lg-8 col-sm-8">
                        <Route path="/categorias/:urlCategoria" exact component={DetalheCategoria}/>
                        <Route path="/categorias/:urlCategoria/:idAnuncio" render={(props) => <DetalheAnuncio {...props}/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Categorias;