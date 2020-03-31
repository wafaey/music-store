import React from 'react';
import App from './App'
import Artist from './Artist'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const Main = () =>{
    return(
        <Router>
        <div>
            <div>
                <Switch>
                    <Route exact path ="/" component={App}/>
                    <Route exact path ="/:id" component={Artist}/>
                </Switch>
            </div>
        </div>
        </Router>
    );
}
export default Main; 