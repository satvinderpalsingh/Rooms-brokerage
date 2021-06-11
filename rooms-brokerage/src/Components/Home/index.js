import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from './aboutus/index';
import Contactus from './contactus/index';
import Help from './helpandfaq/index';
import SearchPage from './SearchPage/SearchPage';
import SearchPageB from './SearchPage/SearchPageB';
import Homepage from './Homepage/Home';

function Home() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/search">
                    <SearchPage />
                </Route>
                <Route exact path="/searchb">
                    <SearchPageB />
                </Route>
                <Route exact path="/aboutus">
                    <Aboutus />
                </Route>
                <Route exact path="/contactus">
                    <Contactus />
                </Route>
                <Route exact path="/help">
                    <Help />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                
            </Switch>
        </div>
    );
}

export default Home;

