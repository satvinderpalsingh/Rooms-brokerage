import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import SearchPageB from './SearchPage/SearchPageB';

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
                
            </Switch>
        </div>
    );
}

export default Home;

