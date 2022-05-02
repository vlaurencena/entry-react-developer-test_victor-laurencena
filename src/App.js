import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import CartProvider from "./context/CartProvider";


// components
import NavBar from "./components/NavBar";
import Category from "./pages/Category";

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CartProvider>
          <ApolloProvider client={client}>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Redirect to="/all" />
              </Route>
              <Route exact path="/:category">
                <Category />
              </Route>
            </Switch>
          </ApolloProvider>
        </CartProvider>
      </BrowserRouter>
    );
  }
}

export default App;
