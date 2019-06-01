import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Signup from './Signup';
import Container from './Container';

class App extends Component {
    render() {
        return (
            <Container>
                <Signup/>
            </Container>
        )
    }
}

export default App;
