import React from 'react';
import User from './Components/UserDashboard/user';
import Home from './Components/Home/home';
import Footer from './Components/Utility/footer/footer';
import Header from './Components/Utility/Header/header';
import Authentication from './Components/authentication/index';

const App = () => {
    return (
        <div>
            <Header></Header>
            <User></User>
            <Home></Home>

            <Authentication></Authentication>
            <Footer></Footer>

        </div>
    );
}
export default App