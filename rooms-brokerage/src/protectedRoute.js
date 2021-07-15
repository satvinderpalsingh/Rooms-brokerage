import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";






export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {  
  console.log(isauth);
  var isauth = localStorage.getItem("isauth");
  return (
    <Route
      {...rest}
      render={props => {           
        
          if (isauth === "true") {
            return <Component {...props} />;
          } else {
            alert("You need to login first!");
            return (
              
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
      }}
    />
  );
};
