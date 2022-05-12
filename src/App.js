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

//pages
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

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
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/:category/:productId">
                <Product />
              </Route>
              <Route path="/:category">
                <Category />
              </Route>
              <Route exact path="/">
                <Redirect to="/all" />
              </Route>
            </Switch>
            <Footer />
          </ApolloProvider>
        </CartProvider>
      </BrowserRouter>
    );
  }
}

export default App;
