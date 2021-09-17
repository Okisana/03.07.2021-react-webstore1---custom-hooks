import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import Categories from './views/Categories';
import Tabs from './views/Tabs';

import Page404 from './views/Page404';
import Category from './views/Category';
import Product from './views/Product';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/category">
            <Category />
          </Route>

          <Route path="/product">
            <Product />
          </Route>
          <Route path="/tabs">
            <Tabs />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
