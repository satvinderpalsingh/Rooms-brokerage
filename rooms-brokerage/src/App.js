import React from 'react';
import User from './Components/UserDashboard/user';
import Home from './Components/Home/home';
import Footer from './Components/Utility/footer/footer';
import Header from './Components/Utility/header/header';
import Sidebar from './Components/Utility/sidebar/sidebar';

const App=()=>{
    return(
        <div>
            <User></User>
            <Home></Home>
            <Footer></Footer>
            <Header></Header>
            <Sidebar></Sidebar>

        </div>        
    );
}
export default App