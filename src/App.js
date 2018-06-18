import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Routing'


class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>
                    <center>Phillip Riley Beckstead</center>
                </h1>
                <img align="Right"
                     src="https://heliotraining.com/wp-content/uploads/2016/05/cropped-helio_glyph-orangeonwhite-512x512.png"
                     width="100" height="100" alt="Computer Hope"/>
                <Routing/>
            </div>
        )
    }
}

export default App;

