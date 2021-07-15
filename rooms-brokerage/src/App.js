import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route , Redirect } from 'react-router-dom';

import './App.css';

import Header from './Components/Utility/Header/header';
import Footer from './Components/Utility/Footer/footer';
import Authentication from './Components/authentication/index';
import Contactus from './Components/Home/contactus/contactus';
import Homepage from './Components/Home/index';
import Owner from './Components/owner/index';
import SearchPage from './Components/Home/SearchPage/SearchPage';
import SearchPageB from './Components/Home/SearchPage/SearchPageB';
import  {ProtectedRoute} from './protectedRoute';








function App() {
    
  return (
    <div >
      
      <Router>

        <Header/>

        <Switch>         

          <Route exact path="/search" component = {SearchPage} />
          
          <Route exact path="/searchb" component = {SearchPageB} />         
          
          <Route exact path="/login" component = {Authentication} />
           
          <Route exact path="/register" component = {Authentication}/>          
         
          <ProtectedRoute exact path="/Ownerdashboard" component={Owner} />

          <ProtectedRoute exact path="/Ownerupload" component={Owner} />

          <Route exact path="/contactus" component = {Contactus} />

          <Route path="*" component={Homepage} />

          <Route render={() => <Redirect to={{pathname: "/"}} />} />
          
         
        </Switch>

        <Footer/>

      </Router>

      
    </div>
  );
}

export default App;