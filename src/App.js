import React, {Component} from "react"
import Footer from './components/Footer'
import Home from './components/Home'
import NovoAnuncio from './components/NovoAnuncio'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import base from './base'
import Categorias from "./components/Categorias"

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            categorias: []
        }

        base.bindToState('categorias', {
            context: this,
            state: 'categorias'
        })
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact render={() => <Home categorias={this.state.categorias}/>}/>
                    <Route path="/novo-anuncio" exact render={() => <NovoAnuncio categorias={this.state.categorias}/>}/>
                    <Route path="/categorias" render={() => <Categorias categorias={this.state.categorias} />}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App
