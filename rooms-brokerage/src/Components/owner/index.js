import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ownerdashboard from './ownerdashboard/ownerdashboard';
import Ownerupload from './ownerupload/ownerupload';

function Owner() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/ownerdashboard">
                    <Ownerdashboard />
                </Route>
                <Route exact path="/Ownerupload">
                    <Ownerupload />
                </Route>
                
                
            </Switch>
        </div>
    );
}

export default Owner;

