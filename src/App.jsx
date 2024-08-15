import "./styles/main.scss";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductPage from "./components/ProductPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
